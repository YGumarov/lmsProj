from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ReadOnlyModelViewSet
from django.utils import timezone
from django.shortcuts import get_object_or_404

from .models import Course, Lesson, Enrollment, UserLessonProgress
from .serializers import (
    CourseListSerializer, CourseDetailSerializer,
    LessonSerializer,
)


class CourseViewSet(ReadOnlyModelViewSet):
    queryset = Course.objects.all()

    def get_serializer_class(self):
        return CourseDetailSerializer if self.action == "retrieve" else CourseListSerializer

    @action(detail=True, methods=["post"], permission_classes=[IsAuthenticated])
    def enroll(self, request, pk=None):
        course = self.get_object()
        user = request.user

        # Проверяем, не записан ли пользователь уже
        if Enrollment.objects.filter(user=user, course=course).exists():
            return Response({"detail": "Вы уже записаны на этот курс."}, status=400)

        # Создаем запись о подписке
        Enrollment.objects.create(user=user, course=course)

        return Response({"detail": "Вы успешно записаны на курс."}, status=201)

    @action(detail=False, methods=["get"], permission_classes=[IsAuthenticated])
    def my_courses(self, request):
        # Получаем ID курсов, на которые записан пользователь
        enrolled_course_ids = Enrollment.objects.filter(user=request.user).values_list('course_id', flat=True)

        # Фильтруем курсы по этим ID
        queryset = self.get_queryset().filter(id__in=enrolled_course_ids)

        # Используем CourseListSerializer с контекстом для is_enrolled
        serializer = self.get_serializer(queryset, many=True, context={'request': request})

        return Response(serializer.data)


class LessonViewSet(ReadOnlyModelViewSet):
    serializer_class = LessonSerializer

    def get_queryset(self):
        # lookup='course' => kwargs будет course_pk
        course_id = self.kwargs["course_pk"]
        return Lesson.objects.filter(course_id=course_id).order_by("order", "id")

    @action(detail=True, methods=["get"])
    def context(self, request, course_pk=None, pk=None):
        course = get_object_or_404(Course, pk=course_pk)
        lessons = list(Lesson.objects.filter(course=course).order_by("order", "id"))

        idx = next((i for i, l in enumerate(lessons) if l.id == int(pk)), None)
        if idx is None:
            return Response({"detail": "Lesson not found"}, status=404)

        lesson = lessons[idx]
        prev_lesson = lessons[idx - 1] if idx > 0 else None
        next_lesson = lessons[idx + 1] if idx < len(lessons) - 1 else None

        return Response({
            "course": CourseDetailSerializer(course, context={'request': request}).data,
            "lesson": LessonSerializer(lesson, context={'request': request}).data,
            "prevLesson": LessonSerializer(prev_lesson, context={'request': request}).data if prev_lesson else None,
            "nextLesson": LessonSerializer(next_lesson, context={'request': request}).data if next_lesson else None,
        })

    @action(detail=True, methods=["post"], permission_classes=[IsAuthenticated])
    def complete(self, request, course_pk=None, pk=None):
        lesson = self.get_object()
        user = request.user

        # 1. Проверяем, записан ли пользователь на курс
        if not Enrollment.objects.filter(user=user, course=lesson.course).exists():
            return Response({"detail": "Вы не записаны на этот курс."}, status=403)

        # 2. Обновляем или создаем прогресс
        progress, created = UserLessonProgress.objects.update_or_create(
            user=user,
            lesson=lesson,
            defaults={'status': 'completed', 'completed_at': timezone.now()}
        )

        # 3. Реализация логики разблокировки следующего урока
        lessons = list(Lesson.objects.filter(course=lesson.course).order_by("order", "id"))
        current_lesson_index = lessons.index(lesson)

        if current_lesson_index < len(lessons) - 1:
            next_lesson = lessons[current_lesson_index + 1]

            # Разблокируем следующий урок, если он еще не завершен
            UserLessonProgress.objects.update_or_create(
                user=user,
                lesson=next_lesson,
                defaults={'status': 'active'}
            )

        return Response({"detail": "Урок успешно отмечен как завершенный.", "status": "completed"}, status=200)

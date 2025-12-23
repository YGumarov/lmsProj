from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .models import Course, Lesson
from .serializers import (
    CourseListSerializer, CourseDetailSerializer,
    LessonSerializer,
)

class CourseViewSet(ReadOnlyModelViewSet):
    queryset = Course.objects.all()

    def get_serializer_class(self):
        return CourseDetailSerializer if self.action == "retrieve" else CourseListSerializer


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
            "course": CourseDetailSerializer(course).data,
            "lesson": LessonSerializer(lesson).data,
            "prevLesson": LessonSerializer(prev_lesson).data if prev_lesson else None,
            "nextLesson": LessonSerializer(next_lesson).data if next_lesson else None,
        })

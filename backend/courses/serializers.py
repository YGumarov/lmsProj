from rest_framework import serializers
from .models import Course, Lesson, Enrollment, UserLessonProgress


class LessonSerializer(serializers.ModelSerializer):
    status = serializers.SerializerMethodField()
    grade = serializers.SerializerMethodField()

    def get_status(self, obj):
        request = self.context.get('request')

        # 1. Проверяем прогресс авторизованного пользователя
        if request and request.user.is_authenticated:
            try:
                progress = UserLessonProgress.objects.get(user=request.user, lesson=obj)
                return progress.status
            except UserLessonProgress.DoesNotExist:
                # Проверяем, является ли это первым уроком в курсе
                first_lesson = obj.course.lessons.order_by('order').first()
                if obj == first_lesson:
                    return 'active'  # Первый урок всегда активен (бесплатный)

                return 'locked'

        # 2. Если пользователь не авторизован, проверяем только первый урок
        if not request or not request.user.is_authenticated:
            first_lesson = obj.course.lessons.order_by('order').first()
            if obj == first_lesson:
                return 'active'
            return 'locked'

        return 'locked'

    def get_grade(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            try:
                progress = UserLessonProgress.objects.get(user=request.user, lesson=obj)
                return progress.grade
            except UserLessonProgress.DoesNotExist:
                return None
        return None

    class Meta:
        model = Lesson
        fields = ['id', 'title', 'content', 'video_url', 'order', 'status', 'grade']


class CourseListSerializer(serializers.ModelSerializer):
    is_enrolled = serializers.SerializerMethodField()

    def get_is_enrolled(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return Enrollment.objects.filter(user=request.user, course=obj).exists()
        return False

    class Meta:
        model = Course
        fields = ['id', 'title', 'description', 'cover', 'is_enrolled']


class CourseDetailSerializer(serializers.ModelSerializer):
    lessons = LessonSerializer(many=True, read_only=True)
    is_enrolled = serializers.SerializerMethodField()

    def get_is_enrolled(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return Enrollment.objects.filter(user=request.user, course=obj).exists()
        return False

    class Meta:
        model = Course
        fields = ['id', 'title', 'description', 'cover', 'lessons', 'is_enrolled']

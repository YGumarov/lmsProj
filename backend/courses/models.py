from django.db import models
from django.conf import settings

class Course(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    description = models.TextField()
    cover = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_published = models.BooleanField(default=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']


class Lesson(models.Model):
    id = models.AutoField(primary_key=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='lessons')
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)
    video_url = models.URLField(blank=True, null=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.course.title} - {self.title}"

    class Meta:
        ordering = ['order']

# --- НОВЫЕ МОДЕЛИ ---

class Enrollment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    enrolled_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'course')
        verbose_name = 'Подписка на курс'
        verbose_name_plural = 'Подписки на курсы'

    def __str__(self):
        return f"{self.user.email} enrolled in {self.course.title}"


class UserLessonProgress(models.Model):
    STATUS_CHOICES = [
        ('locked', 'Заблокирован'),
        ('active', 'Активен'),
        ('completed', 'Завершен'),
    ]
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='locked')
    completed_at = models.DateTimeField(null=True, blank=True)
    grade = models.IntegerField(null=True, blank=True) # Для оценки, если есть ДЗ

    class Meta:
        unique_together = ('user', 'lesson')
        verbose_name = 'Прогресс урока'
        verbose_name_plural = 'Прогресс уроков'

    def __str__(self):
        return f"{self.user.email} - {self.lesson.title} ({self.status})"

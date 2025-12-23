from django.contrib import admin
from .models import Course, Lesson  # ← важно: точка значит "из текущего приложения"

# Регистрируем модели
admin.site.register(Course)
admin.site.register(Lesson)
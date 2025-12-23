from django.urls import include, path
from rest_framework_nested import routers
from .views import CourseViewSet, LessonViewSet

router = routers.SimpleRouter()
router.register(r"courses", CourseViewSet, basename="courses")

courses_router = routers.NestedSimpleRouter(router, r"courses", lookup="course")
courses_router.register(r"lessons", LessonViewSet, basename="course-lessons")

urlpatterns = [
    path("", include(router.urls)),
    path("", include(courses_router.urls)),
]

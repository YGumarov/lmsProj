import { Course, mockCourses, mockNews, Lesson } from './mockData';

// Функция-хелпер для имитации задержки сети
const simulateDelay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// --- API для КУРСОВ ---

// Получить список всех курсов
export async function fetchAllCourses(): Promise<Course[]> {
    await simulateDelay(800); // Имитация долгого запроса
    return mockCourses;
}

// Получить список курсов, на которые записан ученик
export async function fetchMyCourses(): Promise<Course[]> {
    await simulateDelay(500);
    return mockCourses.filter(course => course.isEnrolled);
}

// Получить данные конкретного курса по ID
export async function fetchCourseById(id: number): Promise<Course | undefined> {
    await simulateDelay(600);
    return mockCourses.find(course => course.id === id);
}

// Получить данные конкретного урока по ID
export async function fetchLessonById(courseId: number, lessonId: number): Promise<Lesson | undefined> {
    await simulateDelay(400);
    const course = mockCourses.find(c => c.id === courseId);
    return course?.lessons.find(lesson => lesson.id === lessonId);
}

// --- API для НОВОСТЕЙ ---

export async function fetchNews() {
    await simulateDelay(300);
    return mockNews;
}

// --- API для АВТОРИЗАЦИИ (заглушки) ---

export async function login(data: any): Promise<{ token: string }> {
    await simulateDelay(1000);
    if (data.email === "test@bashlms.kz" && data.password === "123456") {
        return { token: "fake_jwt_token_12345" };
    }
    throw new Error("Неверные учетные данные");
}
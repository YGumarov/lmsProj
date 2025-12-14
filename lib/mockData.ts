// --- 1. Типы Данных ---

export interface Lesson {
    id: number;
    title: string;
    videoUrl: string;
    status: 'locked' | 'active' | 'completed';
    grade?: number; // Оценка (если урок сдан)
    deadline?: string; // Дедлайн для ДЗ
    duration?: string; // Длительность урока (для красоты)
}

export interface Course {
    id: number;
    title: string;
    description: string;
    price: number;
    startDate: string;
    isEnrolled: boolean;
    image?: string; // Картинка курса (опционально)
    lessons: Lesson[];
    category: 'Programming' | 'Design' | 'Marketing' | 'Science';
}

// --- 2. Фейковые Уроки (Генерация контента) ---

// Курс 1: Python (Backend)
const pythonLessons: Lesson[] = [
    { id: 101, title: 'Введение в Python и установка IDE', videoUrl: 'video_101.mp4', status: 'completed', grade: 5, duration: '15:00' },
    { id: 102, title: 'Переменные, типы данных и вывод', videoUrl: 'video_102.mp4', status: 'completed', grade: 4, duration: '22:30' },
    { id: 103, title: 'Условные операторы (if/else)', videoUrl: 'video_103.mp4', status: 'active', duration: '18:45' },
    { id: 104, title: 'Циклы for и while', videoUrl: 'video_104.mp4', status: 'locked', duration: '30:10' },
    { id: 105, title: 'Функции и модули', videoUrl: 'video_105.mp4', status: 'locked', duration: '25:00' },
    { id: 106, title: 'Списки и словари (Data Structures)', videoUrl: 'video_106.mp4', status: 'locked', duration: '28:15' },
    { id: 107, title: 'Введение в ООП: Классы и Объекты', videoUrl: 'video_107.mp4', status: 'locked', duration: '35:20' },
    { id: 108, title: 'Работа с файлами и исключениями', videoUrl: 'video_108.mp4', status: 'locked', duration: '20:10' },
    { id: 109, title: 'Итоговый проект: Телеграм-бот', videoUrl: 'video_109.mp4', status: 'locked', duration: '45:00', deadline: '2026-02-01' },
];

// Курс 2: Веб-дизайн (Frontend/UI)
const designLessons: Lesson[] = [
    { id: 201, title: 'Основы композиции и цвета', videoUrl: 'video_201.mp4', status: 'completed', grade: 5, duration: '12:00' },
    { id: 202, title: 'Знакомство с Figma', videoUrl: 'video_202.mp4', status: 'completed', grade: 5, duration: '40:00' },
    { id: 203, title: 'HTML5: Теги и структура', videoUrl: 'video_203.mp4', status: 'active', deadline: '2025-12-25', duration: '25:30' },
    { id: 204, title: 'CSS3: Стили и селекторы', videoUrl: 'video_204.mp4', status: 'active', duration: '30:00' },
    { id: 205, title: 'Flexbox и Grid верстка', videoUrl: 'video_205.mp4', status: 'locked', duration: '35:45' },
    { id: 206, title: 'Адаптив под мобильные устройства', videoUrl: 'video_206.mp4', status: 'locked', duration: '28:10' },
    { id: 207, title: 'Анимации в CSS', videoUrl: 'video_207.mp4', status: 'locked', duration: '20:00' },
];

// Курс 3: Математика (Школа)
const mathLessons: Lesson[] = [
    { id: 301, title: 'Линейные уравнения', videoUrl: 'video_301.mp4', status: 'active', duration: '45:00' },
    { id: 302, title: 'Системы уравнений', videoUrl: 'video_302.mp4', status: 'locked', duration: '40:00' },
    { id: 303, title: 'Геометрия: Треугольники', videoUrl: 'video_303.mp4', status: 'locked', duration: '35:00' },
    { id: 304, title: 'Теорема Пифагора', videoUrl: 'video_304.mp4', status: 'locked', duration: '25:00' },
];

// Курс 4: Маркетинг (SMM)
const smmLessons: Lesson[] = [
    { id: 401, title: 'Что такое SMM и зачем он нужен', videoUrl: 'video_401.mp4', status: 'active', duration: '15:00' },
    { id: 402, title: 'Анализ целевой аудитории', videoUrl: 'video_402.mp4', status: 'locked', duration: '22:00' },
    { id: 403, title: 'Оформление профиля в Instagram', videoUrl: 'video_403.mp4', status: 'locked', duration: '30:00' },
    { id: 404, title: 'Настройка таргетированной рекламы', videoUrl: 'video_404.mp4', status: 'locked', duration: '50:00' },
];

// Курс 5: Data Science (Продвинутый)
const dsLessons: Lesson[] = [
    { id: 501, title: 'Введение в Data Science', videoUrl: 'video_501.mp4', status: 'locked', duration: '20:00' },
    { id: 502, title: 'Библиотека Pandas', videoUrl: 'video_502.mp4', status: 'locked', duration: '45:00' },
    { id: 503, title: 'Визуализация с Matplotlib', videoUrl: 'video_503.mp4', status: 'locked', duration: '35:00' },
];

// --- 3. Фейковые Курсы ---

export const mockCourses: Course[] = [
    {
        id: 1,
        title: 'Python-разработчик с нуля',
        description: 'Полный курс от "Hello World" до создания своего первого Telegram-бота и работы с базами данных.',
        price: 25000,
        startDate: '2025-12-15',
        isEnrolled: true,
        category: 'Programming',
        lessons: pythonLessons,
    },
    {
        id: 2,
        title: 'Веб-дизайн и Верстка',
        description: 'Научись создавать современные сайты. Figma, HTML, CSS и основы JavaScript для анимаций.',
        price: 18900,
        startDate: '2026-01-10',
        isEnrolled: true,
        category: 'Design',
        lessons: designLessons,
    },
    {
        id: 3,
        title: 'Математика: 7 класс (Углубленно)',
        description: 'Подготовка к олимпиадам. Алгебра и геометрия в понятном и интересном формате.',
        price: 0,
        startDate: '2025-12-01',
        isEnrolled: false,
        category: 'Science',
        lessons: mathLessons,
    },
    {
        id: 4,
        title: 'SMM-специалист 2026',
        description: 'Как продвигать бренды в соцсетях, писать продающие посты и настраивать таргет.',
        price: 12000,
        startDate: '2025-12-20',
        isEnrolled: false,
        category: 'Marketing',
        lessons: smmLessons,
    },
    {
        id: 5,
        title: 'Data Science: Анализ данных',
        description: 'Вход в профессию Data Scientist. Работа с Big Data, Python, Pandas и нейросетями.',
        price: 45000,
        startDate: '2026-02-01',
        isEnrolled: false,
        category: 'Programming',
        lessons: dsLessons,
    },
    {
        id: 6,
        title: 'Английский для IT',
        description: 'Специализированный курс для программистов. Учимся читать документацию и проходить собеседования.',
        price: 8500,
        startDate: '2026-01-15',
        isEnrolled: false,
        category: 'Science',
        lessons: [],
    },
];

// --- 4. Фейковые Новости ---

export const mockNews = [
    {
        id: 1,
        title: "Запуск курса по Python!",
        content: "Мы обновили программу курса. Теперь еще больше практики и проектов в портфолио.",
        date: "2025-12-12"
    },
    {
        id: 2,
        title: "Технические работы 20.12",
        content: "Сайт будет недоступен с 03:00 до 05:00 утра по времени Астаны для обновления серверов.",
        date: "2025-12-10"
    },
    {
        id: 3,
        title: "Конкурс на лучший дизайн",
        content: "Нарисуй редизайн главной страницы BashLMS и выиграй бесплатный доступ ко всем курсам!",
        date: "2025-12-08"
    },
    {
        id: 4,
        title: "Новый раздел: Достижения",
        content: "Теперь за прохождение уроков вы получаете бейджи и XP. Соревнуйтесь с друзьями!",
        date: "2025-12-05"
    },
    {
        id: 5,
        title: "Скидки на Новый Год",
        content: "С 25 декабря по 7 января действуют скидки до 50% на все профессии.",
        date: "2025-12-01"
    },
];

import Link from 'next/link';
import { Course } from '@/lib/mockData'; // Импортируем тип!

interface CourseCardProps {
    course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
    return (
        // Карточка ведет на детальную страницу курса: /courses/[id]
        <Link href={`/courses/${course.id}`} className="block">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition hover:shadow-lg hover:border-blue-300 transform hover:scale-[1.01]">
                {/* ... (остальная вёрстка карточки) ... */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{course.description}</p>

                <div className="flex justify-between items-center mt-4 pt-4 border-t border-dashed border-gray-200">
                    <div className="text-sm">
                        <span className="font-medium text-gray-600">Начало:</span> {course.startDate}
                    </div>
                    {course.price > 0 ? (
                        <span className="text-lg font-extrabold text-green-600">
                            {course.price} тг.
                        </span>
                    ) : (
                        <span className="text-lg font-extrabold text-blue-600">Бесплатно</span>
                    )}
                </div>

                <button
                    type="button" // Добавлено, чтобы предотвратить отправку формы, если карточка попадет в форму
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                    {course.isEnrolled ? 'Продолжить' : course.price > 0 ? 'Купить курс' : 'Начать бесплатно'}
                </button>
            </div>
        </Link>
    );
};
import {fetchNews} from "@/lib/api";
import { Alert } from '@/components/ui/Alert';

// Указываем тип для элемента новости, взятый из lib/mockData
interface NewsItem {
    id: number;
    title: string;
    content: string;
    date: string;
}

export default async function NewsPage() {
    // 1. Инициализируем news пустым массивом, чтобы гарантировать тип и значение
    let news: NewsItem[] = [];
    let error: string | null = null;

    try {
        // 2. news теперь гарантированно является массивом типа NewsItem[]
        news = await fetchNews();
    } catch (e) {
        error = 'Не удалось загрузить новости с сервера.';
        console.error(e);
        // news остается пустым массивом, что корректно для рендеринга
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">📰 Новости и Объявления</h2>
            {error && <Alert type="error" message={error} className="mb-6" />}

            {/* Проверка на пустой массив (сработает, если API вернул 0 или была ошибка) */}
            {news.length === 0 && !error && (
                <div className="text-gray-500">Пока нет новостей.</div>
            )}

            <div className="space-y-6">
                {news.map((item) => (
                    <div key={item.id} className="p-6 rounded-xl shadow-md border border-gray-100 transition hover:shadow-lg">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-3">{item.content}</p>
                        <p className="text-sm text-gray-400">Дата: {item.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
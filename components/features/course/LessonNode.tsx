"use client";

import Link from 'next/link';
import { Lock, Zap, CheckCircle, Star } from 'lucide-react';
import { Lesson } from '@/lib/mockData';

interface LessonNodeProps {
    lesson: Lesson;
    courseId: number;
}

export const LessonNode = ({ lesson, courseId }: LessonNodeProps) => {
    const {status, title, grade, id} = lesson;
    const link = `/courses/${courseId}/lesson/${id}`;

    const statusConfig = {
        completed: {
            icon: <CheckCircle className="h-6 w-6 text-white"/>,
            classes: 'bg-green-500 hover:bg-green-600',
            tooltip: `Пройден: ${title}${grade ? ' (Оценка: ' + grade + ')' : ''}`,
        },
        active: {
            icon: <Zap className="h-6 w-6 text-white"/>,
            classes: 'bg-blue-600 ring-4 ring-blue-300 hover:bg-blue-700',
            tooltip: `Активный урок: ${title}`,
        },
        locked: {
            icon: <Lock className="h-6 w-6 text-gray-400"/>,
            classes: 'bg-gray-200 cursor-not-allowed',
            tooltip: `Закрыт: ${title}`,
        },
    }[status];

    const isPerfect = status === 'completed' && grade === 5;

    const nodeContent = (
        <div
            className={`relative h-16 w-16 rounded-full flex items-center justify-center shadow-lg transition duration-300 ${statusConfig.classes} ${isPerfect ? 'border-4 border-yellow-400' : ''}`}            title={statusConfig.tooltip}
        >
            {statusConfig.icon}
            {isPerfect && <Star className="absolute -top-1 -right-1 h-4 w-4 text-yellow-500 fill-yellow-500"/>}
        </div>
    );
    return status === 'locked' ? (
        // Если закрыт, возвращаем просто div без ссылки
        <div className="flex flex-col items-center">
            {nodeContent}
            <span className="mt-1 text-xs text-gray-500 truncate max-w-[60px]">{title}</span>
        </div>
    ) : (
        // Если активен или пройден, оборачиваем в Link
        <Link href={link} className="flex flex-col items-center hover:scale-105 transition">
            {nodeContent}
            <span className="mt-1 text-xs text-gray-700 font-medium truncate max-w-[60px]">{title}</span>
        </Link>
    );
}


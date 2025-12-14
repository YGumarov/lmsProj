import React from 'react';
import { Button } from '@/components/ui/Button';

export const InfoCardWidget = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm h-full flex flex-col justify-between">
            <div>
                <h3 className="font-bold text-xl text-gray-800 mb-4">Виджет</h3>
                <p className="text-sm text-gray-700 leading-relaxed max-w-4xl">
                    Учебный сайт — это современная онлайн-платформа, созданная для удобного и эффективного
                    обучения. Он объединяет в себе учебные материалы, интерактивные задания и инструменты для
                    общения между студентами и преподавателями. Пользователь может в любое время получить
                    доступ к лекциям, презентациям и дополнительным ресурсам, не привязываясь к конкретному
                    месту.
                </p>
            </div>

            <div className="flex justify-end mt-6">
                <Button className="bg-[#2F6687] hover:bg-[#25526d] text-white px-8 py-2 rounded-lg font-medium transition-colors">
                    Активные
                </Button>
            </div>
        </div>
    );
};

import React from 'react';
import {Button} from "@/components/ui/Button";
import {Star, FileCheckCorner, Frown} from 'lucide-react'


export const ActiveCoursesWidget = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm h-full">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Мои Курсы</h2>
                <div className="flex gap-2">
                    <Button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:border-blue-800 transform hover:scale-[1.01]">Активные</Button>
                    <Button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:border-blue-800 transform hover:scale-[1.01]r">Оконченные</Button>
                </div>
            </div>

            {/* Таблица или список курсов */}
            <div className="space-y-4">
                {/* Пример одной строки курса */}

                <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                    <div className="w-1/3 font-medium">Пример Название Курса</div>
                    <div className="w-1/3 px-4">
                        {/* Прогресс бар */}
                        <div className="h-2 w-full bg-blue-100 rounded-full">
                            <div className="h-2 bg-blue-600 rounded-full" style={{width: '60%'}}></div>
                        </div>
                    </div>
                    <div className="w-1/3 flex gap-4 text-sm text-gray-500 justify-end">
                        <Star></Star>X17
                        <FileCheckCorner></FileCheckCorner>X10
                        <Frown></Frown>X6
                    </div>
                </div>

                {/* Повторить для других курсов... */}
                <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                    <div className="w-1/3 font-medium">Пример Название Курса</div>
                    <div className="w-1/3 px-4">
                        {/* Прогресс бар */}
                        <div className="h-2 w-full bg-blue-100 rounded-full">
                            <div className="h-2 bg-blue-600 rounded-full" style={{width: '40%'}}></div>
                        </div>
                    </div>
                    <div className="w-1/3 flex gap-4 text-sm text-gray-500 justify-end">
                        <Star></Star>X15
                        <FileCheckCorner></FileCheckCorner>X5
                        <Frown></Frown>X0
                    </div>
                </div>

                <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                    <div className="w-1/3 font-medium">Пример Название Курса</div>
                    <div className="w-1/3 px-4">
                        {/* Прогресс бар */}
                        <div className="h-2 w-full bg-blue-100 rounded-full">
                            <div className="h-2 bg-blue-600 rounded-full" style={{width: '20%'}}></div>
                        </div>
                    </div>
                    <div className="w-1/3 flex gap-4 text-sm text-gray-500 justify-end">
                        <Star></Star>X8
                        <FileCheckCorner></FileCheckCorner>X8
                        <Frown></Frown>X2
                    </div>
                </div>
            </div>
        </div>
    );
};
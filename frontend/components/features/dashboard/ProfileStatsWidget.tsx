import React from 'react';

export const ProfileStatsWidget = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm h-full flex flex-col justify-between gap-4">
            <h3 className="font-bold text-lg mb-2">Статистика</h3>

            {/* Блок 1 */}
            <div className="bg-gray-100 p-3 rounded-lg flex flex-col items-center justify-center text-center">
                <span className="font-bold text-xl text-blue-900">10</span>
                <span className="text-sm text-gray-600">Курсов пройдено 🎓</span>
            </div>

            {/* Блок 2 */}
            <div className="bg-gray-100 p-3 rounded-lg flex flex-col items-center justify-center text-center">
                <span className="font-bold text-xl text-blue-900">8</span>
                <span className="text-sm text-gray-600">Курсов начато 📖</span>
            </div>

            {/* Блок 3 */}
            <div className="bg-gray-100 p-3 rounded-lg flex flex-col items-center justify-center text-center">
                <span className="font-bold text-xl text-green-600">85%</span>
                <span className="text-sm text-gray-600">Средняя оценка 📊</span>
            </div>
        </div>
    );
};

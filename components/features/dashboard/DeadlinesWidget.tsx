import React from 'react';

export const DeadlinesWidget = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm h-full text-center">
            <h2 className="font-semibold text-lg">Скоро дедлайн</h2>
            <div className="text-gray-400 text-center py-10">
                Пока что дедлайнов нет
            </div>
        </div>
    )
}
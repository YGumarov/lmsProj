import React from 'react';
import { Button } from '@/components/ui/Button'; // Убедись, что путь к Button верный

export const StatusWidget = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm h-full flex flex-col">
            <h3 className="font-bold text-xl text-gray-800 mb-6">Виджет</h3>

            <div className="flex flex-col gap-3 mt-auto">
                <Button className="w-full bg-[#2F6687] hover:bg-[#25526d] text-white py-2 rounded-lg font-medium transition-colors">
                    Активные
                </Button>
                <Button className="w-full bg-[#BEE3F8] hover:bg-[#A0D2F0] text-[#2C5282] py-2 rounded-lg font-medium transition-colors">
                    Оконченные
                </Button>
            </div>
        </div>
    );
};

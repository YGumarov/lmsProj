"use client";
import React, { useState } from "react";
import {Button} from "@/components/ui/Button";

export const ProfileInfoWidget = () => {
    const [isEditing, setIsEditing] = useState(false)

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm h-full">
            <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-bold text-gray-800">Мой Профиль</h2>
                <Button
                    onClick={() => setIsEditing(!isEditing)}
                    className={`px-4 py-2 text-sm rounded-lg ${isEditing ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                    {isEditing ? 'Сохранить' : 'Редактировать'}
                </Button>
            </div>

            <div className="flex flex-col gap-6">
                {/* Аватар */}
                <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-600">
                        YE
                    </div>
                    {isEditing && (
                        <button className="text-sm text-blue-600 hover:underline">
                            Изменить фото
                        </button>
                    )}
                </div>

                {/* Поля ввода */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-500 mb-1">Имя</label>
                        <input
                            disabled={!isEditing}
                            defaultValue="Yerasyl"
                            className={`w-full p-2 rounded-lg border ${isEditing ? 'border-blue-500 bg-white' : 'border-transparent bg-gray-50'}`}
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-500 mb-1">Email</label>
                        <input
                            disabled={!isEditing}
                            defaultValue="yerasyl@example.com"
                            className={`w-full p-2 rounded-lg border ${isEditing ? 'border-blue-500 bg-white' : 'border-transparent bg-gray-50'}`}
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-500 mb-1">Роль</label>
                        <div className="p-2 text-gray-800 font-medium">Студент</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
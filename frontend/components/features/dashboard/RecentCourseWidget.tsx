import React from 'react';
import {Button} from "@/components/ui/Button";
import {Star, FileCheckCorner, Frown} from 'lucide-react'

export const RecentCourseWidget = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-semibold text-lg">Недавний курс</div>

            <div className="w-48 h-2 bg-blue-100 rounded-full hidden sm:block">
                <div className="h-2 bg-blue-600 rounded-full" style={{width: '35%'}}></div>
            </div>

            <div className="flex gap-3 text-sm font-medium">
                <Star></Star>X1
                <FileCheckCorner></FileCheckCorner>X2
                <Frown></Frown>X5
            </div>
            <Button className="hover:border-blue-800 transform hover:scale-[1.01]">Продолжить</Button>
        </div>
    )
}
import React from 'react';
import { ProfileInfoWidget} from "@/components/features/dashboard/ProfileInfoWidget";
import { ActiveCoursesWidget } from '@/components/features/dashboard/ActiveCoursesWidget';
import { ProfileStatsWidget } from '@/components/features/dashboard/ProfileStatsWidget'; // (Убедись, что создал его там)
import { StatusWidget } from '@/components/features/dashboard/StatusWidget';
import { InfoCardWidget } from '@/components/features/dashboard/InfoCardWidget';

export default function ProfilePage() {
    return (
        <div className="p-6 h-full w-full space-y-6">

            {/* --- ВЕРХ: Профиль (75%) + Статистика (25%) --- */}
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-3/4">
                    <ProfileInfoWidget />
                </div>
                <div className="w-full lg:w-1/4">
                    <ProfileStatsWidget />
                </div>
            </div>

            {/* --- ЦЕНТР: Курсы (100%) --- */}
            <div className="w-full">
                <ActiveCoursesWidget />
            </div>

            {/* --- НИЗ: Статус (25%) + Инфо (75%) --- */}
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-1/4">
                    <StatusWidget />
                </div>
                <div className="w-full lg:w-3/4">
                    <InfoCardWidget />
                </div>
            </div>

        </div>
    );
}

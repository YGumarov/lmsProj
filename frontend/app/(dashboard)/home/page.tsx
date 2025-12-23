import React from 'react';
import {ActiveCoursesWidget} from "@/components/features/dashboard/ActiveCoursesWidget";
import {DeadlinesWidget} from "@/components/features/dashboard/DeadlinesWidget";
import {RecentCourseWidget} from "@/components/features/dashboard/RecentCourseWidget";


export default async function DashboardHomePage() {
    return (
        <div className="p-6 h-full w-full">
            <div className="flex flex-col gap-6 lg:flex-row items-start">

                {/*Левая часть блока(если будет их не два мне пизда)*/}
                <div className="w-full lg:w-3/4 flex flex-col gap-6">
                    <RecentCourseWidget/>
                    <ActiveCoursesWidget/>
                </div>

                {/*Правый блок*/}
                <div className="w-full lg:w-1/4">
                    <DeadlinesWidget/>
                </div>

            </div>
        </div>
    )
}
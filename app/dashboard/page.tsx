import Breadcrumb from "@/src/components/breadcrumbnav";
import CourseCards from "@/src/components/courseCard";
import CourseTabs from "@/src/components/coursetab";
import DuaSection from "@/src/components/duaSection";
import PurposefulBlessings from "@/src/components/purposefulBlessings";
import StudentProfile from "@/src/components/studentprofile";

export default function Dashboard() {
    return (
        <main className="flex-1 overflow-auto bg-gray-50 p-6">
            <Breadcrumb />
            <StudentProfile />
            <CourseCards />
            <CourseTabs />

            <div
                className="flex flex-col gap-4 tablet:flex-row tablet:items-start mt-4"
            >
                <div className="tablet:w-[320px] laptop:w-[350px] shrink-0 ">
                    <DuaSection />
                </div>

                <div className="flex-1 min-w-0">
                    <PurposefulBlessings />
                </div>
            </div>
        </main>
    );
}
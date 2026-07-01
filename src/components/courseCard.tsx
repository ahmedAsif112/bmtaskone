import { Button, Progress } from "antd";
import Image from "next/image";

// ── Card data ──
// Swap/extend this array to render more course cards.
const courses = [
    {
        id: 1,
        image: "/assets/card.svg",
        category: "Course",
        title: "Best Tajweed course, All Tajweed from scratch to advanced",
        progress: 100,
        status: "completed", // "completed" | "continue"
    },
    {
        id: 2,
        image: "/assets/card.svg",
        category: "Course",
        title: "Complete English Mastery Course From Basics to Advanced",
        progress: 80,
        status: "continue",
    },
    {
        id: 3,
        image: "/assets/card.svg",
        category: "Course",
        title: "Complete English Mastery Course From Basics to Advanced",
        progress: 80,
        status: "continue",
    },
];

function CourseIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-[10px] h-[10px]"
        >
            <path d="M22 10 12 5 2 10l10 5 10-5Z" />
            <path d="M6 12v5c3 1.5 9 1.5 12 0v-5" />
        </svg>
    );
}

function CourseCard({ course }) {
    const isCompleted = course.status === "completed";

    return (
        <div className="flex items-center gap-3 bg-[#F5F6F8] border border-gray-200 rounded-xl p-3 w-full md:w-[395px] md:shrink-0">
            {/* Thumbnail */}
            <div className="shrink-0 w-[104px] h-16 rounded-lg overflow-hidden bg-white">
                <Image
                    src={course.image}
                    alt={course.title}
                    width={104}
                    height={64}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1 flex-1 min-w-0">
                {/* Badge */}
                <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-[4px] bg-emerald-500 flex items-center justify-center shrink-0">
                        <CourseIcon />
                    </span>
                    <span className="text-[11px] text-gray-500 font-medium">{course.category}</span>
                </div>

                {/* Title */}
                <p className="text-[12px] font-semibold text-gray-900 leading-[14px] line-clamp-2">
                    {course.title}
                </p>

                {/* Progress + Action */}
                <div className="flex items-center gap-3">
                    <div className="flex-1 min-w-0">
                        <p className="text-[11px] text-gray-500 whitespace-nowrap">
                            Progress{" "}
                            <span className="font-bold text-gray-800">
                                {course.progress}%
                            </span>
                        </p>

                        <Progress
                            percent={course.progress}
                            showInfo={false}
                            strokeColor="#22C55E"

                        />
                    </div>

                    <Button
                        type="default"
                        className={`!shrink-0 !w-16 !h-[22px] !rounded-md !text-[10px] !font-medium !flex !items-center !justify-center ${isCompleted
                            ? "!bg-teal-600 !text-white"
                            : "!bg-white !text-gray-500 !border !border-gray-300"
                            }`}
                    >
                        {isCompleted ? "Completed" : "Continue"}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default function CourseCards() {
    return (
        <div className="flex flex-col gap-[10px] md:flex-row md:flex-wrap pt-3">
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    );
}
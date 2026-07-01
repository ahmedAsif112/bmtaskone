import { Tag } from "antd";
import { Dot } from "lucide-react";
import Image from "next/image";

export default function StudentProfile() {
    return (
        <div className="bg-white rounded-xl border border-gray-200 p-3 md:p-4 space-y-4">

            {/* ── Top Row: Avatar + Info + Badges ── */}
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                {/* Left: Avatar + Name + Details */}
                <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="shrink-0">
                        <img
                            src="https://i.pravatar.cc/64?img=47"
                            alt="M. Ayesha Sheikh"
                            className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-gray-100"
                        />
                    </div>

                    {/* Name + Badge + Meta */}
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-gray-800 text-[15px]">M. Ayesha Sheikh</span>
                            <Tag
                                icon={<Dot size={16} />}
                                className="!m-0 !bg-[#CC7429] !flex items-center justify-center !text-white !border-none !rounded-full px-2 !py-0.5 text-[11px] font-semibold leading-none"
                            >
                                Regular
                            </Tag>

                        </div>

                        {/* Meta fields */}
                        <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-1 md:flex md:flex-wrap md:gap-x-[30px] md:gap-y-1">
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-400 font-medium">Gender</span>
                                <span className="text-[12px] text-gray-700 font-medium">Female</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-400 font-medium">Age</span>
                                <span className="text-[12px] text-gray-700 font-medium">05</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-400 font-medium">Date of Enrollment</span>
                                <span className="text-[12px] text-gray-700 font-medium">05/05/2025</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-400 font-medium">Country</span>
                                <span className="text-[12px] text-gray-700 font-medium">United Kingdom</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-400 font-medium">Timezone</span>
                                <span className="text-[12px] text-gray-700 font-medium">GMT (United Kingdom)</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Points / Courses / Certificate badges */}
                <div className="grid grid-cols-3 gap-2 w-full md:flex md:w-auto md:items-center md:gap-2 md:shrink-0">

                    <Tag
                        className="!m-0 !flex items-center justify-center gap-1 !bg-[#FFA727] !text-white !border-none px-2 !py-1 rounded-lg w-full md:w-auto md:px-3"
                    >
                        <Image src="/assets/points.svg" alt="Points" width={12} height={12} />
                        <span className="text-[10px] font-medium">Points</span>
                        <span className="font-bold text-[16px]">100</span>
                    </Tag>

                    <Tag
                        className="!m-0 !flex items-center justify-center gap-1 !bg-[#00D200] !text-white !border-none px-2 !py-1 rounded-lg w-full md:w-auto md:px-3"
                    >
                        <Image src="/assets/courses.svg" alt="Courses" width={12} height={12} />
                        <span className="font-bold text-[16px]">32</span>
                        <span className="text-[10px] font-medium">Courses</span>
                    </Tag>

                    <Tag
                        className="!m-0 !flex items-center justify-center gap-1 !bg-[#007AFF] !text-white !border-none px-2 !py-1 rounded-lg w-full md:w-auto md:px-3"
                    >
                        <Image src="/assets/certificate.svg" alt="Certificate" width={12} height={12} />
                        <span className="font-bold text-[16px]">2</span>
                        <span className="text-[10px] font-medium">Certificate</span>
                    </Tag>

                </div>
            </div>

            {/* ── Divider ── */}
            <div className="border-t border-gray-100" />

            {/* ── Bottom Row: 4 Info Cards ── */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">

                {/* Unit Name */}
                <div className="flex items-center gap-2 md:gap-3 border bg-[#D5D5D5] border-gray-200 rounded-xl px-3 py-2 md:px-4 md:py-3">
                    <div className="shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-lg  flex items-center justify-center">
                        <Image src="/assets/unit.svg" alt="Unit" width={20} height={20} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-[#000000] font-medium">Unit Name</span>
                        <span className="text-[14px] text-[#000000] font-semibold">English Unit 1</span>
                    </div>
                </div>

                {/* Lesson Name */}
                <div className="flex items-center gap-2 md:gap-3 border bg-[#D5D5D5] border-gray-200 rounded-xl px-3 py-2 md:px-4 md:py-3">
                    <div className="shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-lg  flex items-center justify-center">
                        <Image src="/assets/lesson.svg" alt="Lesson" width={20} height={20} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-[#000000]font-medium">Lesson Name</span>
                        <span className="text-[14px] text-[#000000] font-semibold">English Lesson 2</span>
                    </div>
                </div>

                {/* Previous Quiz Result */}
                <div className="flex items-center gap-2 md:gap-3 border bg-[#D5D5D5] border-gray-200 rounded-xl px-3 py-2 md:px-4 md:py-3">
                    <div className="shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-lg  flex items-center justify-center">
                        <Image src="/assets/quiz.svg" alt="Quiz" width={20} height={20} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-[#000000] font-medium">Previous Quiz Result</span>
                        <span className="text-[14px] text-[#000000] font-semibold">30 / 50 Marks</span>
                    </div>
                </div>

                {/* Session */}
                <div className="flex items-center gap-2 md:gap-3 border bg-[#D5D5D5] border-gray-200 rounded-xl px-3 py-2 md:px-4 md:py-3">
                    <div className="shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-lg  flex items-center justify-center">
                        <Image src="/assets/session.svg" alt="Session" width={20} height={20} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-[#000000] font-medium">Session:</span>
                        <span className="text-[14px] text-[#000000] font-semibold">03:00 - 04:00</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
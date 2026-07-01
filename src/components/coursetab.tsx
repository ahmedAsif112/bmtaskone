"use client";

import { useState } from "react";
import BismillahBanner from "./banner";

const tabs = [
    "Slide Deck",
    "Dua's",
    "Kalma's",
    "Teacher Notes",
    "Assessment Result",
    "Student Progress",
    "Documents",
];

export default function CourseTabs() {
    const [active, setActive] = useState("");

    return (
        <div>
            <div className="flex pt-5 items-center gap-10 overflow-x-auto border-b border-gray-200 px-2 scrollbar-hide">
                {tabs.map((tab) => {
                    const isActive = tab === active;

                    return (
                        <button
                            key={tab}
                            type="button"
                            onClick={() => setActive(tab)}
                            className={`cursor-pointer shrink-0 whitespace-nowrap border-b-2 pb-3 text-sm transition-colors ${isActive
                                ? "border-gray-900 font-semibold text-gray-900"
                                : "border-transparent font-medium text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {tab}
                        </button>
                    );
                })}
            </div>
            <BismillahBanner activeTab={active} />
        </div>
    );
}
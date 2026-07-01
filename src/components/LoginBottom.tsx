"use client";

import { Image } from "antd";
import React from "react";

const features = [
    {
        icon: "/assets/login/Smart learning.svg",
        title: "Smart Learning",
        description: "study personalized your way",
    },
    {
        icon: "/assets/login/scholar.svg",
        title: "Expert Tutors",
        description: "learn from the best",
    },
    {
        icon: "/assets/login/analytics.svg",
        title: "Track progress",
        description: "achieve more every day.",
    },
];

const LoginBottom = () => {
    return (
        <div className="w-full px-6 sm:px-4">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-center sm:gap-0 pt-3">

                {features.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="flex items-center gap-3 lg:gap-2.5 sm:px-6 lg:px-5 w-full max-w-[280px] sm:w-auto sm:max-w-none">

                            {/* Icon */}
                            <div className="w-[65px] h-[65px] lg:w-[52px] lg:h-[52px] xl:w-14 xl:h-14 shrink-0 flex items-center justify-center">
                                <Image
                                    preview={false}
                                    src={item.icon}
                                    alt={item.title}
                                    className="!w-full !h-full"
                                />
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className="text-base lg:text-[14px] xl:text-base font-semibold text-gray-800">
                                    {item.title}
                                </h3>

                                <p className="text-sm lg:text-[12px] xl:text-sm text-gray-600 leading-4">
                                    {item.description}
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        {index !== features.length - 1 && (
                            <div className="hidden sm:block h-10 lg:h-8 w-px bg-gray-400"></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default LoginBottom;
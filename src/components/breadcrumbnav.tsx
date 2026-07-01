"use client";

import React from "react";

type BreadcrumbItem = {
    label: string;
    href?: string;
    active?: boolean;
};

const items: BreadcrumbItem[] = [
    { label: "Dashboard", href: "#" },
    { label: "LMS", href: "#" },
    { label: "Subject", href: "#" },
    { label: "Course", href: "#" },
    { label: "Unit", href: "#" },
    { label: "Assessment Form", active: true },
];

export default function Breadcrumb() {
    return (
        <div className="w-full bg-[#FAFBFC] border-b  border-gray-300">
            <nav className="flex items-center gap-2.5 text-[13px] font-sans px-5 py-3">
                {items.map((item, index) => (
                    <React.Fragment key={item.label}>
                        {index > 0 && (
                            <span className="text-gray-400 text-[11px] select-none">{">"}</span>
                        )}
                        {item.active ? (
                            <span className="font-semibold text-[#029385]">{item.label}</span>
                        ) : (
                            <a
                                href={item.href}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                {item.label}
                            </a>
                        )}
                    </React.Fragment>
                ))}
            </nav>
        </div>
    );
}
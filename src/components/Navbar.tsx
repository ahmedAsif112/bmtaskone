"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";

const navLinks = [
    { label: "Dashboard", active: false },
    { label: "User", active: false },
    { label: "LMS", active: true },
    { label: "Reports", active: false },
    { label: "Analytics", active: false },
    { label: "Events", active: false },
];

export default function Navbar() {
    const [searchValue, setSearchValue] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
            {/* ── Main Bar ── */}
            <div className="flex items-center h-14 px-4 md:px-8">

                {/* Logo */}
                <div className="shrink-0 mr-12">
                    <Image
                        src="/assets/logo.svg"
                        alt="myTutorJob"
                        width={130}
                        height={32}
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Desktop: Nav Links + Search */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href="#"
                            className={`text-[13px] font-medium transition-colors whitespace-nowrap pb-0.5 ${link.active
                                ? "text-teal-500 border-b-2 border-teal-500"
                                : "text-gray-600 hover:text-teal-500"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}

                    {/* Search bar with left padding from links */}
                    <div className="flex items-center bg-gray-100 rounded-full px-3 py-1.5 gap-2 w-44 ml-8">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            className="bg-transparent outline-none text-[13px] text-gray-600 placeholder-gray-400 w-full"
                        />
                        <Search size={14} className="text-gray-400 shrink-0" />
                    </div>
                </nav>

                {/* Mobile: Hamburger */}
                <div className="ml-auto md:hidden">
                    <button
                        onClick={() => setMenuOpen((v) => !v)}
                        className="p-1.5 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* ── Mobile Dropdown ── */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 flex flex-col gap-1">
                    <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 gap-2 mt-3 mb-2">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            className="bg-transparent outline-none text-[13px] text-gray-600 placeholder-gray-400 w-full"
                        />
                        <Search size={14} className="text-gray-400 shrink-0" />
                    </div>
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href="#"
                            className={`text-[13px] font-medium px-3 py-2.5 rounded-lg transition-colors ${link.active
                                ? "text-teal-500 bg-teal-50"
                                : "text-gray-600 hover:bg-gray-100 hover:text-teal-500"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
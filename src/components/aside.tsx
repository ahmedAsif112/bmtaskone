"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Image } from "antd";
import {
    ChevronDown,
    ChevronUp,
    X,
    Plus,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────
type NavItem = {
    label: string;
    icon: React.ReactNode;
    active?: boolean;
    path?: string;
};

type NavSection = {
    title: string;
    items: NavItem[];
};

// ─── Nav Data ────────────────────────────────────────────────────────────────
const sections: NavSection[] = [
    {
        title: "Main",
        items: [
            {
                label: "Teacher Dashboard", icon: (
                    <Image
                        alt=""
                        src="/assets/1.svg"
                        preview={false}
                        style={{ width: "100%", height: "100%" }}
                    />
                ),
            },
            {
                label: "Check Quiz", icon: (
                    <Image
                        alt=""
                        src="/assets/2.svg"
                        preview={false}
                        style={{ width: "100%", height: "100%" }}
                    />
                ),
            },
        ],
    },
    {
        title: "Scheduling",
        items: [
            {
                label: "Calendar",
                icon: (
                    <Image
                        alt=""
                        src="/assets/3.svg"
                        preview={false}
                        style={{ width: "100%", height: "100%" }}
                    />
                ),
            },
            {
                label: "Summary", icon: (
                    <Image
                        alt=""
                        src="/assets/4.svg"
                        preview={false}
                        style={{ width: "100%", height: "100%" }}
                    />
                ),
            },
        ],
    },
    {
        title: "Supplications",
        items: [
            {
                label: "Dua's", icon: (
                    <Image
                        alt=""
                        src="/assets/5.svg"
                        preview={false}
                        style={{ width: "100%", height: "100%" }}
                    />
                ),
            },
            {
                label: "Kalma's", icon: (
                    <Image
                        alt=""
                        src="/assets/6.svg"
                        preview={false}
                        style={{ width: "100%", height: "100%" }}
                    />
                ),
            },
        ],
    },
    {
        title: "Activities",
        items: [{
            label: "Activities", icon: (
                <Image
                    alt=""
                    src="/assets/7.svg"
                    preview={false}
                    style={{ width: "100%", height: "100%" }}
                />
            ),
        }],
    },
    {
        title: "LMS",
        items: [
            {
                label: "Subject", icon: (
                    <Image
                        alt=""
                        src="/assets/8.svg"
                        preview={false}
                        style={{ width: "100%", height: "100%" }}
                    />
                ),
            },
            {
                label: "Course", icon: (
                    <Image
                        alt=""
                        src="/assets/9.svg"
                        preview={false}
                        style={{ width: "100%", height: "100%" }}
                    />
                ),
            },
            {
                label: "Unit", icon: (
                    <Image
                        alt=""
                        src="/assets/10.svg"
                        preview={false}
                        style={{ width: "100%", height: "100%" }}
                    />
                ),
            },
            {
                label: "Lesson",
                path: "/lesson",
                icon: (
                    <Image
                        alt=""
                        src="/assets/11.svg"
                        preview={false}
                        style={{ width: "100%", height: "100%" }}
                    />
                ),
            },
            {
                label: "Quiz", icon: (
                    <Image
                        alt=""
                        src="/assets/12.svg"
                        preview={false}
                        style={{ width: "100%", height: "100%" }}
                    />
                ),
            },
            {
                label: "Demo",
                icon: (
                    <Image
                        src="/assets/13.svg"
                        alt="Demo"
                        preview={false}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                        }}
                    />
                ),
                active: true,
            },
        ],
    },
    {
        title: "Logs",
        items: [{
            label: "Warnings and Unpaid", icon: (
                <Image
                    alt=""
                    src="/assets/14.svg"
                    preview={false}
                    style={{ width: "100%", height: "100%" }}
                />
            ),
        }],
    },
];

const addNewItems = [
    {
        label: "Add Subject", icon: (
            <Image
                alt=""
                src="/assets/15.svg"
                preview={false}
                style={{ width: "100%", height: "100%" }}
            />
        ),
    },
    {
        label: "Add Course", icon: (
            <Image
                alt=""
                src="/assets/16.svg"
                preview={false}
                style={{ width: "100%", height: "100%" }}
            />
        ),
    },
    {
        label: "Add Unit", icon: (
            <Image
                alt=""
                src="/assets/17.svg"
                preview={false}
                style={{ width: "100%", height: "100%" }}
            />
        ),
    },
    {
        label: "Add Lesson", icon: (
            <Image
                alt=""
                src="/assets/18.svg"
                preview={false}
                style={{ width: "100%", height: "100%" }}
            />
        ),
    },
];

// ─── Icon Rail — using images from public/assets ──────────────────────────────
type RailIcon = {
    img: string;       // path relative to /public e.g. "/assets/dashboard.png"
    bg: string;
    tooltip: string;
    isToggle?: boolean;
};

const topRailIcons: RailIcon[] = [
    { img: "/assets/menu.svg", bg: "", tooltip: "Dashboard" },
    { img: "/assets/calender.svg", bg: "", tooltip: "Check Quiz" },
    { img: "/assets/cap.svg", bg: "bg-[#029385]", tooltip: "LMS Sidebar", isToggle: true },
    { img: "/assets/pdf.svg", bg: "", tooltip: "Logs" },
];

const bottomRailIcons: RailIcon[] = [
    { img: "/assets/pkt.svg", bg: "", tooltip: "PKT" },
    { img: "/assets/setting.svg", bg: "", tooltip: "Settings" },
    { img: "/assets/notification.svg", bg: "", tooltip: "Notifications" },
    { img: "/assets/profile.svg", bg: "", tooltip: "Profile" },
    { img: "/assets/add.svg", bg: "bg-[#029385]", tooltip: "Add New", isToggle: true },
    { img: "/assets/logout.svg", bg: "", tooltip: "Logout" },
];

// ─── Rail Button with Image ───────────────────────────────────────────────────
function RailButton({
    item,
    onClick,
}: {
    item: RailIcon;
    onClick?: () => void;
}) {
    return (
        <div className="relative group flex justify-center">
            <button
                onClick={onClick}
                className={`w-[54px] h-[50px] rounded-2xl flex items-center justify-center transition-all overflow-hidden
                    ${item.bg === "bg-[#029385]"
                        ? "bg-[#029385] shadow-md shadow-[#029385]/30"
                        : "bg-transparent hover:bg-gray-200"
                    }
                    cursor-pointer hover:scale-105`}
                title={item.tooltip}
            >
                <Image
                    src={item.img}
                    alt={item.tooltip}
                    preview={false}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                    }}
                />
            </button>
            <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-800 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                {item.tooltip}
            </span>
        </div>
    );
}

// ─── Mobile Rail Button ───────────────────────────────────────────────────────
function MobileRailButton({
    item,
    onClick,
}: {
    item: RailIcon;
    onClick?: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={`w-[46px] h-[42px] rounded-xl flex items-center justify-center transition-all overflow-hidden
                ${item.bg === "bg-[#029385]"
                    ? "bg-[#029385] shadow-md shadow-[#029385]/30"
                    : "bg-transparent hover:bg-gray-100"
                }
                cursor-pointer`}
            title={item.tooltip}
        >
            <Image
                src={item.img}
                alt={item.tooltip}
                preview={false}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                }}
            />
        </button>
    );
}

// ─── Sidebar Nav Content ──────────────────────────────────────────────────────
function SidebarContent({
    onClose,
    collapsed,
    toggleSection,
}: {
    onClose?: () => void;
    collapsed: Record<string, boolean>;
    toggleSection: (t: string) => void;
}) {
    const router = useRouter(); // ← ADD THIS
    return (
        <div className="flex flex-col h-full">
            {/* Profile Header */}
            <div className="flex items-center bg-[#F2F2F7] gap-3 px-4 py-4 border-b border-gray-100 shrink-0">
                <div className="relative shrink-0">
                    <img
                        src="https://i.pravatar.cc/36?img=47"
                        alt="Sana Naseem"
                        className="w-9 h-9 rounded-full object-cover"
                    />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white" />
                </div>
                <div className="flex flex-col leading-tight min-w-0">
                    <span className="font-semibold text-gray-800 text-[13px] truncate">Sana Naseem</span>
                    <span className="text-[11px] text-gray-400">Teacher Dashboard</span>
                </div>
                <div className="ml-auto flex items-center gap-1">
                    <ChevronDown size={14} className="text-gray-400 shrink-0" />
                    {onClose && (
                        <button
                            onClick={onClose}
                            className="ml-1 p-1 rounded-md text-gray-400 hover:bg-gray-100"
                        >
                            <X size={15} />
                        </button>
                    )}
                </div>
            </div>

            {/* Navigation — this is the part that scrolls independently */}
            <nav className="flex-1 overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-2 px-2">
                {sections.map((section) => (
                    <div key={section.title} className="mb-1">
                        <button
                            onClick={() => toggleSection(section.title)}
                            className="w-full flex items-center justify-between px-2 py-1.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wide hover:text-gray-600 transition-colors"
                        >
                            {section.title}
                            {collapsed[section.title] ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
                        </button>

                        {!collapsed[section.title] && (
                            <ul className="space-y-0.5">
                                {section.items.map((item) => (
                                    <li key={item.label}>
                                        <button
                                            type="button"
                                            onClick={() => item.path && router.push(item.path)}
                                            className={`w-full flex cursor-pointer items-center gap-2.5 px-3 py-2 rounded-lg transition-colors ${item.active
                                                ? "bg-[#029385] text-white font-medium shadow-sm"
                                                : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                                                }`}
                                        >
                                            <span className={item.active ? "text-white" : "text-emerald-500"}>
                                                {item.icon}
                                            </span>

                                            <span>{item.label}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}

                {/* Add New */}
                <div className="mt-2 mb-1">
                    <div className="px-2 py-1.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
                        Add New
                    </div>
                    <ul className="space-y-0.5">
                        {addNewItems.map((item, index) => (
                            <li key={item.label}>
                                <a
                                    href="#"
                                    className="flex items-center justify-between px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors group"
                                >
                                    <span className="flex items-center gap-2.5">
                                        <span className="text-emerald-500">{item.icon}</span>
                                        {item.label}
                                    </span>
                                    <span
                                        className="w-7 h-7 rounded-md flex items-center justify-center"
                                        style={{
                                            backgroundColor: [
                                                "#009688",
                                                "#39C34A",
                                                "#FF9800",
                                                "#14B8A6",
                                            ][index],
                                        }}
                                    >
                                        <Plus size={18} color="white" strokeWidth={3} />
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function TeacherSidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});


    const toggleSection = (title: string) =>
        setCollapsed((prev) => ({ ...prev, [title]: !prev[title] }));

    return (
        <>
            {/* ════════ DESKTOP (tablet+) ════════ */}
            <div className="hidden tablet:flex h-full font-sans">
                {/* Icon Rail — fixed in place, own scroll */}
                <aside className="w-[92px] pl-2 h-full overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-white border-r border-gray-100 flex flex-col items-center py-3 gap-2 z-20">
                    <div className="flex flex-col gap-2.5">
                        {topRailIcons.map((item) => (
                            <RailButton
                                key={item.tooltip}
                                item={item}
                                onClick={item.isToggle ? () => setSidebarOpen((v) => !v) : undefined}
                            />
                        ))}
                    </div>

                    <div className="flex-1" />

                    <div className="flex flex-col gap-2.5">
                        {bottomRailIcons.map((item) => (
                            <RailButton key={item.tooltip} item={item} />
                        ))}
                    </div>
                </aside>

                {/* Expandable Sidebar — fixed in place, own scroll */}
                <aside
                    className={`h-full bg-white border-r border-gray-200 flex flex-col text-[13px] overflow-hidden transition-all duration-300 ease-in-out
                        ${sidebarOpen ? "w-[220px] opacity-100" : "w-0 opacity-0"}`}
                >
                    {sidebarOpen && (
                        <div className="w-[220px] flex flex-col flex-1 h-full">
                            <SidebarContent collapsed={collapsed} toggleSection={toggleSection} />
                        </div>
                    )}
                </aside>
            </div>

            {/* ════════ MOBILE (below tablet) ════════ */}
            <div className="tablet:hidden font-sans flex h-full">
                {/* Mobile Icon Rail — fixed in place, own scroll */}
                <aside className="w-[64px] h-full overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-white border-r border-gray-100 flex flex-col items-center py-3 gap-1.5 z-20 shrink-0">
                    <div className="flex flex-col gap-2">
                        {topRailIcons.map((item) => (
                            <MobileRailButton
                                key={item.tooltip}
                                item={item}
                                onClick={item.isToggle ? () => setMobileSidebarOpen((v) => !v) : undefined}
                            />
                        ))}
                    </div>

                    <div className="flex-1" />

                    <div className="flex flex-col gap-2">
                        {bottomRailIcons.map((item) => (
                            <MobileRailButton key={item.tooltip} item={item} />
                        ))}
                    </div>
                </aside>

                {/* Mobile Nested Sidebar Drawer */}
                {mobileSidebarOpen && (
                    <div className="fixed inset-0 z-50 flex">
                        {/* Backdrop — offset to not cover the rail */}
                        <div
                            className="absolute inset-0 bg-black/40"
                            onClick={() => setMobileSidebarOpen(false)}
                        />
                        {/* Drawer — slides in right next to the rail, own scroll */}
                        <div className="relative z-10 ml-[64px] w-[240px] max-w-[calc(100vw-64px)] bg-white flex flex-col h-full shadow-xl text-[13px] overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            <SidebarContent
                                onClose={() => setMobileSidebarOpen(false)}
                                collapsed={collapsed}
                                toggleSection={toggleSection}
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
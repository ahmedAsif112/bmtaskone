import React from "react";

const duas = [
    {
        id: 1,
        title: "Before Eating",
        description: '"In the name of Allah."',
        arabicText: "اللَّهُمَّ ارْزُقْنِي",
        active: true,
    },
    { id: 2, title: "After Eating", description: "O Allah grant me...", arabicText: "أَشْهَدُ أَنْ لَا إِلَهَ" },
    { id: 3, title: "Before Sleeping", description: "Family of Imran", arabicText: "سُبْحَانَ اللهِ وَالْحَمْدُ" },
    { id: 4, title: "After Sleeping", description: "The Women", arabicText: "لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ" },
    { id: 5, title: "Leaving Home", description: "The Table Spread", arabicText: "أَسْتَغْفِرُ اللهَ رَبِّي مِنْ" },
    { id: 6, title: "Leaving Mosque", description: "The Cattle", arabicText: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ" },
];

const DuaSection = () => {
    return (
        <div className="flex flex-col gap-2 p-2 font-sans">
            {duas.map((dua) => (
                <div
                    key={dua.id}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl border ${dua.active
                        ? "bg-[#EDFCED] border-green-500"
                        : "bg-white border-gray-200"
                        }`}
                >
                    <div className="flex items-center gap-3">
                        <div
                            className={`w-9 h-9 rounded-[10px] flex items-center justify-center text-white text-sm font-medium flex-shrink-0 ${dua.active ? "bg-green-500" : "bg-amber-400"
                                }`}
                        >
                            {dua.id}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-900 mb-0.5">{dua.title}</p>
                            <p className="text-xs text-gray-500">{dua.description}</p>
                        </div>
                    </div>
                    <span
                        className={`font-arabic text-xl text-right leading-relaxed max-w-[160px] ${dua.active ? "text-green-500" : "text-amber-400"
                            }`}
                        dir="rtl"
                    >
                        {dua.arabicText}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default DuaSection;
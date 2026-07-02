"use client";

import React, { useEffect, useRef, useState } from "react";
import { Image } from "antd";
import FormLogin from "@/src/components/Form";
import LoginBottom from "@/src/components/LoginBottom";

// Same as before — x/y are just the numeric px values from your original
// translate-x/-y classes, wClass is the exact same Tailwind width class.
const illustrations = [
    { src: "/assets/login/loginHat.svg", x: -800, y: -460, wClass: "w-[29%]" },
    { src: "/assets/login/Cube boy.svg", x: -950, y: -220, wClass: "w-[12%]" },
    { src: "/assets/login/Bulb boy.svg", x: -1200, y: -140, wClass: "w-[20%]" },

    { src: "/assets/login/Cube girl.svg", x: 450, y: -460, wClass: "w-[18%]" },
    { src: "/assets/login/Bulb.svg", x: 770, y: -260, wClass: "w-[16%]" },
    { src: "/assets/login/girl-Cube.svg", x: 950, y: -40, wClass: "w-[18%]" },

    { src: "/assets/login/Login-Books.svg", x: -1230, y: 170, wClass: "w-[35%]" },
    { src: "/assets/login/Login-Boy.svg", x: -970, y: 15, wClass: "w-[48%]" },

    { src: "/assets/login/Girl.svg", x: 420, y: 15, wClass: "w-[48%]" },
    { src: "/assets/login/girl globe.svg", x: 895, y: 220, wClass: "w-[23%]" },
    { src: "/assets/login/girl Plant 1.svg", x: 1110, y: 258, wClass: "w-[18%]" },
];

// This matches your existing max-w-[1200px] — the width your px offsets
// were originally tuned against.
const REF_WIDTH = 1200;

export default function Page() {
    const anchorRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const el = anchorRef.current;
        if (!el) return;

        const update = () => {
            // Only correct when the container is actually smaller than 1200px
            // (i.e. zoom shrank it). If it's >= 1200px, scale stays exactly 1
            // and nothing changes from your current layout.
            const ratio = el.clientWidth / REF_WIDTH;
            setScale(Math.min(ratio, 1));
        };

        update();
        const ro = new ResizeObserver(update);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    return (
        <div
            className='h-screen overflow-hidden flex flex-col items-center justify-center
            bg-[url("/assets/login/Login-BG.svg")]
            bg-cover bg-center bg-no-repeat'
        >
            {/* Logo */}
            <div className="pt-6 flex justify-center shrink-0 z-20">
                <Image
                    src="/assets/login/Logo.svg"
                    preview={false}
                    className="
            !w-[180px]
            lg:!w-[150px]
            xl:!w-[280px]
        "
                />
            </div>

            {/* Main */}
            <div className="flex-1 flex items-center justify-center px-4 relative">

                {/* Anchor container */}
                <div
                    ref={anchorRef}
                    className="relative w-full max-w-[1200px] h-full flex items-center justify-center"
                >

                    {/* Desktop illustrations */}
                    <div className="hidden lg:block absolute inset-0">

                        {illustrations.map((item) => (
                            <img
                                key={item.src}
                                src={item.src}
                                alt=""
                                className={`
                                    z-30
                                    absolute
                                    left-1/2
                                    top-1/2
                                    ${item.wClass}
                                    object-contain
                                    pointer-events-none
                                    select-none
                                `}
                                style={{
                                    transform: `translate(${item.x * scale}px, ${item.y * scale}px)`,
                                }}
                            />
                        ))}

                    </div>

                    {/* Form */}
                    <div className="relative z-20 w-full flex justify-center">
                        <FormLogin />
                    </div>

                </div>
            </div>

            {/* Bottom */}
            <div className="pb-4 shrink-0 z-20">
                <LoginBottom />
            </div>

        </div>
    );
}
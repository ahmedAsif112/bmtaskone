"use client";

import React from "react";
import { Image } from "antd";
import FormLogin from "@/src/components/Form";
import LoginBottom from "@/src/components/LoginBottom";

const illustrations = [
    { src: "/assets/login/loginHat.svg", pos: "-translate-x-[280px] -translate-y-[160px] w-[29%]" },
    { src: "/assets/login/Cube boy.svg", pos: "-translate-x-[350px] -translate-y-[140px] w-[12%]" },
    { src: "/assets/login/Bulb boy.svg", pos: "-translate-x-[400px] translate-y-[-80px] w-[20%]" },

    { src: "/assets/login/Cube girl.svg", pos: "translate-x-[150px] -translate-y-[160px] w-[18%]" },
    { src: "/assets/login/Bulb.svg", pos: "translate-x-[270px] -translate-y-[90px] w-[16%]" },
    { src: "/assets/login/girl-Cube.svg", pos: "translate-x-[350px] translate-y-[-40px] w-[18%]" },

    { src: "/assets/login/Login-Books.svg", pos: "-translate-x-[430px] translate-y-[70px] w-[35%]" },
    { src: "/assets/login/Login-Boy.svg", pos: "-translate-x-[340px] translate-y-[15px] w-[48%]" },

    { src: "/assets/login/Girl.svg", pos: "translate-x-[170px] translate-y-[15px] w-[48%]" },
    { src: "/assets/login/girl globe.svg", pos: "translate-x-[340px] translate-y-[65px] w-[25%]" },
    { src: "/assets/login/girl Plant 1.svg", pos: "translate-x-[420px] translate-y-[88px] w-[18%]" },
];

export default function Page() {
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
                <div className="relative w-full max-w-[1200px] h-full flex items-center justify-center">

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
                                    ${item.pos}
                                    object-contain
                                    pointer-events-none
                                    select-none
                                `}
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
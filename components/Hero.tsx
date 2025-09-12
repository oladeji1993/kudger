"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const roles = [
    {
        label: "Farmer",
        img: "/for-farmers.svg",
        alt: "For Farmers",
    },
    {
        label: "Shop Owner",
        img: "/shopowner_client.svg",
        alt: "Shop Owner",
    },
    {
        label: "Artisan",
        img: "/for-farmers.svg", // fallback, update if you have artisan image
        alt: "Artisan",
    },
    {
        label: "NGO",
        img: "/ngo_client.svg",
        alt: "NGO",
    },
];

export default function Hero() {
    const [activeIdx, setActiveIdx] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsSliding(true);
            setTimeout(() => {
                setActiveIdx((idx) => (idx + 1) % roles.length);
                setIsSliding(false);
            }, 400); // slide out before switching
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full bg-white overflow-hidden py-8 sm:py-12 md:py-24 flex items-center">
            <div className="w-full flex flex-col md:flex-row items-center md:items-stretch justify-between gap-10 md:gap-0">
                {/* Left: Text Content */}
                <div className="flex flex-col justify-center w-full mt-16 md:mt-0 ml-0 md:ml-24  lg:pl-24 xl:pl-32 px-4 sm:px-6 md:px-0 items-center md:items-start text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-bold leading-tight mb-5 sm:mb-6 md:mb-8">
                        eNaira Offline Access<br />
                        for Every Nigerian<br />
                        <span
                            className={`font-bold block transition-all duration-500 ${isSliding ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"} text-green-500`}
                            key={roles[activeIdx].label}
                        >
                            {roles[activeIdx].label}
                        </span>
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-5 sm:mb-6 md:mb-8 max-w-md sm:max-w-lg">
                        No smartphone? No internet? No problem. Kudger makes digital payments possible for all — using simple NFC technology.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start items-center md:items-start">
                        <Link href="#get-started" className="bg-[#0A2B32] hover:bg-[#14505F] text-white px-7 py-3 rounded-lg text-base font-semibold shadow transition w-full sm:w-auto text-center">
                            Get Started
                        </Link>
                        <Link href="#get-nfc-device" className="bg-[#0A2B32] hover:bg-[#14505F] text-white px-7 py-3 rounded-lg text-base font-semibold transition w-full sm:w-auto text-center">
                            Get Kudger NFC Device
                        </Link>
                    </div>
                </div>
                {/* Right: Hero Images - flush to right edge */}
                <div className="relative flex-1 flex items-center justify-center md:justify-end mt-8 md:mt-0 w-full">
                    <div className="overflow-hidden w-full p-10 md:p-0 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] flex items-center justify-center md:justify-end">
                        <Image
                            src={roles[activeIdx].img}
                            alt={roles[activeIdx].alt}
                            width={600}
                            height={600}
                            className={`w-full h-full object-contain transition-all duration-500 ${isSliding ? "opacity-0 translate-x-16" : "opacity-100 translate-x-0"}`}
                            priority
                            key={roles[activeIdx].img}
                        />
                    </div>
                </div>
            </div>
        </section>

    );
}

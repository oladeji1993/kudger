import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full bg-white overflow-hidden py-12 md:py-24 px-2 flex items-center">
            <div className="w-full flex h-[529px] flex-col md:flex-row items-center md:items-stretch justify-between gap-10 md:gap-0">
                {/* Left: Text Content */}
                <div className="flex flex-col justify-center w-full md:ml-28 lg:pl-24 xl:pl-32 px-2 md:px-0">
                    <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold leading-tight mb-6 md:mb-8 text-left">
                        eNaira Offline Access<br />
                        for Every Nigerian<br />
                        <span className="text-green-500 font-bold block">Farmer</span>
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 max-w-lg text-left">
                        No smartphone? No internet? No problem. Kudger makes digital payments possible for all — using simple NFC technology.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <Link href="#get-started" className="bg-[#0A2B32] hover:bg-[#14505F] text-white px-7 py-3 rounded-lg text-base font-semibold shadow transition">
                            Get Started
                        </Link>
                        <Link href="#get-nfc-device" className="bg-[#0A2B32] hover:bg-[#14505F] text-white px-7 py-3 rounded-lg text-base font-semibold transition">
                            Get Kudger NFC Device
                        </Link>
                    </div>
                </div>
                {/* Right: Hero Images - flush to right edge */}
                <div className="relative flex-1 flex items-center justify-end mt-10 md:mt-0">
                    <div className="overflow-hidden w-[600px] h-[600px] md:h-[900px] flex items-center justify-end">
                        <Image
                            src="/for-farmers.svg"
                            alt="For Farmers"
                            width={600}
                            height={600}
                            className="w-full h-full object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>

    );
}

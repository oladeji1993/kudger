import Image from "next/image";

export default function Compliance() {
    return (
        <section className="relative w-full min-h-[60vh] bg-[#07272A] flex items-center justify-center overflow-hidden px-2">
            {/* Decorative Background SVGs */}
            <img src="/bg-layout.svg" alt="background layout" className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 pointer-events-none select-none" />

            <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
                {/* Left Illustration */}
                <div className="flex-1 flex items-start justify-center md:justify-start">
                    <div className="relative">
                        <Image width={640} height={640} src="/cards.svg" alt="cards" className="w-full h-[300px] md:h-full object-contain" />
                    </div>
                </div>
                {/* Right Content */}
                <div className="flex-1 flex flex-col items-start md:items-start text-white">
                    {/* Badge */}
                    <span className="inline-block bg-[#19C37D] text-[#07272A] text-sm font-semibold rounded-full px-4 py-1 mb-4">Trusted. Compliant. Secure.</span>
                    {/* Headline */}
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center md:text-left leading-tight">
                        Kudger fully supports the Central Bank of Nigeria&apos;s (CBN) vision for the eNaira.
                    </h2>
                    {/* Checklist */}
                    <ul className="mb-8 space-y-2 w-full">
                        <li className="flex items-start gap-2"><span className="mt-1 text-[#19C37D]">✔</span>Tiered KYC</li>
                        <li className="flex items-start gap-2"><span className="mt-1 text-[#19C37D]">✔</span>Transparent transaction records</li>
                        <li className="flex items-start gap-2"><span className="mt-1 text-[#19C37D]">✔</span>Data security standards</li>
                        <li className="flex items-start gap-2"><span className="mt-1 text-[#19C37D]">✔</span>Interoperability with the national digital payment infrastructure</li>
                    </ul>
                    {/* Button */}
                    <button className="bg-[#35C220] hover:bg-[#14a95b] mb-10 md:mb-0 text-white font-semibold px-8 py-3 rounded-lg shadow transition-colors duration-200">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    )
}
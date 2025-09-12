import Image from "next/image";

export default function TechnologyBehind() {
    return (
        <section id="technology-behind" className="w-full py-16 px-2 md:px-0 flex justify-center items-center bg-[#F6FBFD] border-t border-[#E3E7E8]">
            <div className="max-w-7xl mx-auto w-full flex flex-col items-start gap-8 px-2 md:px-0">
                {/* Badge */}
                <span className="inline-block bg-[#16A34A] text-white rounded-full px-6 py-1 text-sm font-semibold mb-4 shadow">★ The Technology Behind Kudger</span>
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-left leading-tight text-[#23272F]">Kudger uses smart but simple<br />tech to make all this happen.</h2>
                {/* Cards Row */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl shadow-sm border border-[#E3E7E8] flex flex-col overflow-hidden min-h-[370px]">
                        <div className="w-full p-3 flex items-center justify-center bg-[#F6FBFD] relative">
                            <Image width={370} height={370} src="/band.svg" alt="NFC Devices" className="object-contain" />
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-start relative overflow-hidden" style={{ backgroundImage: 'url(/bg-layout.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', opacity: 1 }}>
                            <div className="absolute inset-0 bg-white opacity-50 pointer-events-none z-0"></div>
                            <div className="relative z-10">
                                <h3 className="font-bold text-lg text-[#23272F] mb-1">NFC Devices</h3>
                                <p className="text-[#23272F] text-base leading-snug">Wristbands, cards, or stickers that hold secure, single-use tokens.</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl shadow-sm border border-[#E3E7E8] flex flex-col overflow-hidden min-h-[370px]">
                        <div className="w-full p-3 flex items-center justify-center bg-[#F6FBFD] relative">
                            <Image width={370} height={370} src="/merchant.svg" alt="Merchant App" className="object-contain rounded-2xl" />
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-start relative overflow-hidden" style={{ backgroundImage: 'url(/bg-layout.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', opacity: 1 }}>
                            <div className="absolute inset-0 bg-white opacity-50 pointer-events-none z-0"></div>
                            <div className="relative z-10">
                                <h3 className="font-bold text-lg text-[#23272F] mb-1">Merchant App</h3>
                                <p className="text-[#23272F] text-base leading-snug">A mobile app (Android-based) used to accept payments — even offline.</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl shadow-sm border border-[#E3E7E8] flex flex-col overflow-hidden">
                        <div className="w-full p-3 flex items-center justify-center bg-[#F6FBFD] relative">
                            <Image width={370} height={370} src="/token.svg" alt="Token System" className="object-contain" />
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-start relative overflow-hidden" style={{ backgroundImage: 'url(/bg-layout.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', opacity: 1 }}>
                            <div className="absolute inset-0 bg-white opacity-50 pointer-events-none z-0"></div>
                            <div className="relative z-10">
                                <h3 className="font-bold text-lg text-[#23272F] mb-1">Token System</h3>
                                <p className="text-[#23272F] text-base leading-snug">Your NFC device holds encrypted tokens that are validated during each tap. Once used, they expire automatically.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
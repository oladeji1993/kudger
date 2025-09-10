import Image from "next/image";


export default function WhoCanUseIt() {
    return (
        <section id="who-can-use-it" className="w-full py-16 px-2 md:px-0 flex justify-center items-center bg-[#F6FBFD]">
            <div className="max-w-7xl mx-auto w-full flex flex-col items-start gap-8 px-2 md:px-0">
                {/* Badge */}
                <span className="inline-block bg-[#16A34A] text-white rounded-full px-6 py-1 text-sm font-semibold mb-4 shadow">★ For Businesses, Banks, and Partners</span>
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-left leading-tight text-[#23272F]">
                    Kudger isn't just for individuals — it's<br />a smart solution for institutions.
                </h2>
                {/* Cards Row */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl shadow-sm border border-[#E3E7E8] flex flex-col overflow-hidden min-h-[320px]">
                        <div className="w-full flex items-center justify-center bg-[#F6FBFD] relative">
                            <Image width={370} height={200} src="/market-people.svg" alt="Merchants" className="object-cover rounded-xl" />
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-start relative overflow-hidden" style={{ backgroundImage: 'url(/bg-layout.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-white opacity-50 pointer-events-none z-0"></div>
                            <div className="relative z-10">
                                <h3 className="font-bold text-lg text-[#23272F] mb-1">Merchants</h3>
                                <p className="text-[#23272F] text-base leading-snug">Accept payments with or without POS devices. No internet? No problem.</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl shadow-sm border border-[#E3E7E8] flex flex-col overflow-hidden min-h-[320px]">
                        <div className="w-full flex items-center justify-center bg-[#F6FBFD] relative">
                            <Image width={370} height={200} src="/banks.svg" alt="Banks & Fintechs" className="object-cover rounded-xl" />
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-start relative overflow-hidden" style={{ backgroundImage: 'url(/bg-layout.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-white opacity-50 pointer-events-none z-0"></div>
                            <div className="relative z-10">
                                <h3 className="font-bold text-lg text-[#23272F] mb-1">Banks & Fintechs</h3>
                                <p className="text-[#23272F] text-base leading-snug">Integrate with Kudger APIs to expand your reach into offline and underserved markets.</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl shadow-sm border border-[#E3E7E8] flex flex-col overflow-hidden min-h-[320px]">
                        <div className="w-full flex items-center justify-center bg-[#F6FBFD] relative">
                            <Image width={370} height={200} src="/ngo.svg" alt="Government & NGOs" className="object-cover rounded-xl" />
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-start relative overflow-hidden" style={{ backgroundImage: 'url(/bg-layout.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-white opacity-50 pointer-events-none z-0"></div>
                            <div className="relative z-10">
                                <h3 className="font-bold text-lg text-[#23272F] mb-1">Government & NGOs</h3>
                                <p className="text-[#23272F] text-base leading-snug">Use Kudger for disbursing stipends, relief funds, or pensions — securely.</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-white rounded-2xl shadow-sm border border-[#E3E7E8] flex flex-col overflow-hidden min-h-[320px]">
                        <div className="w-full flex items-center justify-center bg-[#F6FBFD] relative">
                            <Image width={370} height={200} src="/agent.svg" alt="Agent Networks" className="object-cover rounded-xl" />
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-start relative overflow-hidden" style={{ backgroundImage: 'url(/bg-layout.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                            {/* White overlay */}
                            <div className="absolute inset-0 bg-white opacity-50 pointer-events-none z-0"></div>
                            <div className="relative z-10">
                                <h3 className="font-bold text-lg text-[#23272F] mb-1">Agent Networks</h3>
                                <p className="text-[#23272F] text-base leading-snug">Help people top up tokens, create wallets, and earn income while doing it.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


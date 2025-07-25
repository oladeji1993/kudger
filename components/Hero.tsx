import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full bg-[#fcf8f3] overflow-hidden py-16 md:py-32 px-2 md:px-0 flex justify-center items-center">
            <div className="max-w-7xl mx-auto w-full relative flex flex-col md:flex-row items-center justify-between gap-14 md:gap-20 z-10">
                {/* Left: Text Content */}
                <div className="flex-1 flex flex-col justify-center z-10 max-w-xl">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Send & Receive<br />
                        eNaira—<span className="text-green-600">No<br />Smartphone or<br />Internet Needed</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-700 mb-10 max-w-xl">
                        Empowering Nigeria&#39;s rural and unbanked communities with NFC payment technology.
                    </p>
                    <div className="flex gap-6 flex-wrap">
                        <Link href="#how-it-works" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow transition">
                            See How It Works
                        </Link>
                        <Link href="#find-agent" className="border border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-full text-lg font-semibold transition">
                            Find Agent Near You
                        </Link>
                    </div>
                </div>
                {/* Right: Hero Image */}
                <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 z-10">
                    <div className="bg-white rounded-xl shadow-lg" style={{ maxWidth: 440 }}>
                        <Image
                            src="/hero-image.png"
                            alt="Kudger Hero Illustration"
                            width={400}
                            height={400}
                            className="rounded-lg object-cover"
                            priority
                        />
                    </div>
                </div>
                {/* Background overlay image, only on large screens */}
                {/* <div className="absolute inset-0 w-full h-full z-0 pointer-events-none md:block hidden">
                    <Image
                        src="/hero-bg.jpg"
                        alt="Farm background"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                </div> */}
            </div>
        </section>
    );
}

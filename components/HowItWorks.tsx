import Image from "next/image";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative w-full h-[729px] flex items-center justify-center overflow-hidden px-4 md:px-12">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/bg-layout.svg"
          alt="How Kudger Works Background"
          layout="fill"
          objectFit="cover"
          className="pointer-events-none select-none"
          priority
        />
        {/* Overlay color */}
        <div className="absolute inset-0 bg-[#eaf7ed] opacity-80 mix-blend-multiply pointer-events-none select-none"></div>
      </div>
      <div className="relative z-10 mx-auto w-full h-full max-w-screen-xl flex flex-row items-center md:justify-center gap-x-24">
        {/* Illustration - absolutely anchored bottom left on desktop */}
        <div className="hidden md:block absolute left-0 bottom-0 h-full w-[47%] pointer-events-none select-none">
          <Image
            src="/pos-hand.svg"
            alt="Kudger POS Illustration"
            width={730}
            height={900}
            className="absolute left-[-180px] bottom-[0px] max-w-none h-[729px] w-auto drop-shadow-xl"
            priority
          />
        </div>
        {/* Mobile illustration, stacked above text */}
        <div className="md:hidden flex justify-center items-end w-full h-[260px] min-h-[200px] relative">
          <Image
            src="/pos-hand.svg"
            alt="Kudger POS Illustration"
            width={300}
            height={350}
            className="max-w-none h-full w-auto drop-shadow-xl"
            priority
          />
        </div>
        {/* Text Content */}
        <div className="relative w-full md:w-[53%] flex flex-col justify-center items-start py-6 md:py-0 ml-auto z-10 max-w-xl">
          <span className="inline-block bg-green-600 text-white rounded-full px-4 py-1 text-xs font-semibold mb-1 md:mb-2">What is KUDGER?</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-5 leading-tight text-gray-900 text-left">Kudger is Nigeria’s offline digital payment solution.</h2>
          <p className="text-gray-700 text-base md:text-lg mb-2 md:mb-5 max-w-xl text-left">
            We connect the unbanked and underserved to the digital economy — no smartphones or constant internet required. Using NFC devices like wristbands or stickers, you can send or receive eNaira with a simple tap.<br />
            It’s fast. It’s secure. And it’s built for Nigerians — especially those in rural or low-connectivity areas.
          </p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-800 transition mt-2">Get Started</button>
        </div>
      </div>
    </section>

  );
}

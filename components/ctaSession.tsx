import Image from "next/image";

export default function CtaSession() {
  return (
    <section className="w-full flex justify-center items-center py-12 px-2 md:px-0 bg-[#F6FBFD]">
      <div className="relative w-full max-w-7xl rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center md:items-stretch" style={{background: 'url(/cta-bg.svg) center/cover no-repeat'}}>
        {/* Left content */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-[#23272F] mb-3">
            Ready to Join the Offline Digital Revolution?
          </h2>
          <p className="mb-6 text-[#23272F] text-base md:text-lg">
            Kudger is here to make sure no Nigerian is left behind in the digital economy.
          </p>
          <button className="bg-[#0A282B] text-white rounded-lg px-6 py-3 font-medium shadow hover:bg-[#163C3C] transition-colors duration-150 w-fit">
            Get Started now
          </button>
        </div>
        {/* Right image */}
        <div className="flex-1 flex items-end justify-center md:justify-end p-8 md:pl-0">
          <Image
            src="/pos-device.svg"
            alt="POS Device"
            width={520}
            height={420}
            className="object-contain drop-shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
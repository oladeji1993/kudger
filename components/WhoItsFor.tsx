import Image from "next/image";

export default function WhoItsFor() {
  return (
    <section className="w-full bg-gradient-to-b from-[#fafaf6] to-[#e6f6f1] py-16 px-2 md:px-0 flex justify-center items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Badge */}
        <span className="inline-block bg-green-600 text-white rounded-full px-6 py-1 text-sm font-semibold mb-6">Who is it for?</span>
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-left leading-tight">
          Kudger is made for<br />people like you.
        </h2>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
          {/* Farmers & Traders */}
          <div className="flex flex-col items-start p-0">
            <div className="w-full flex justify-center mb-5">
              <Image src="/farmers&traders.svg" alt="Farmers & Traders" width={270} height={270} className="object-contain" />
            </div>
          </div>
          {/* Shop Owners */}
          <div className="flex flex-col items-start p-0">
            <div className="w-full flex justify-center mb-5">
              <Image src="/shopowners.svg" alt="Farmers & Traders" width={270} height={270} className="object-contain" />
            </div>
          </div>
          {/* Shop Owners */}
          <div className="flex flex-col items-start p-0">
            <div className="w-full flex justify-center mb-5">
              <Image src="/withoutphone.svg" alt="Farmers & Traders" width={270} height={270} className="object-contain" />
            </div>
          </div>
          {/* Shop Owners */}
          <div className="flex flex-col items-start p-0">
            <div className="w-full flex justify-center mb-5">
              <Image src="/ruralareas.svg" alt="Farmers & Traders" width={270} height={270} className="object-contain" />
            </div>
          </div>

        </div>
      </div>
    </section>

  );
}

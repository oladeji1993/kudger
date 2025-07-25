import Image from "next/image";

const features = [
  {
    title: "Tokenization Technology",
    desc: "Secure offline transaction processing with automatic synchronization"
  },
  {
    title: "Wallet Sync",
    desc: "Seamless integration with eNaira wallets and banking systems"
  },
  {
    title: "API Integration",
    desc: "Easy integration for merchants, banks, and service providers"
  }
];

export default function PartnerWithKudger() {
  return (
    <section id="partners" className="w-full bg-white py-16 px-2 md:px-0 flex justify-center items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Partner with Kudger</h2>
        <p className="text-gray-600 text-base md:text-lg mb-12 text-center max-w-2xl">
          Join our network of agents, merchants, and technology partners to bring digital payments to every corner of Nigeria
        </p>
        <div className="w-full flex flex-col md:flex-row md:items-start gap-10 md:gap-16 justify-center">
          {/* Left: Technical Overview */}
          <div className="flex-1 flex flex-col items-start md:items-start md:justify-center">
            <h3 className="font-semibold text-lg mb-4 text-gray-900">Technical Overview</h3>
            <ul className="space-y-5 mb-8">
              {features.map((f, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <circle cx="11" cy="11" r="11" fill="#D1FADF"/>
                      <path d="M7 11.5l3 3 5-5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <span className="font-bold text-base text-gray-900">{f.title}</span>
                    <div className="text-gray-600 text-sm leading-snug">{f.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-2 w-full md:w-auto">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-5 py-2 text-sm md:px-7 md:py-2 md:text-base shadow-md transition w-full md:w-auto">Become a Partner</button>
              <button className="border border-green-600 text-green-700 font-semibold rounded-full px-5 py-2 text-sm md:px-7 md:py-2 md:text-base bg-white hover:bg-green-50 transition w-full md:w-auto">View Technical Overview</button>
            </div>
          </div>
          {/* Right: Diagram/Image */}
          <div className="flex-1 flex justify-center items-center">
            <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-md h-[260px] flex items-center justify-center">
              {/* Placeholder image, swap with your own */}
              <Image src="/partner.png" alt="Technical Overview Diagram" width={450} height={180} className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

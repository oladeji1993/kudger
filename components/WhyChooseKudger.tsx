import Image from "next/image";

const features = [
  {
    title: "Works Offline",
    desc: "Make payments even without internet connection",
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#D1FADF]">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path d="M12 18c-3.31 0-6-2.69-6-6 0-1.11.3-2.16.82-3.06l1.46 1.46A3.98 3.98 0 008 12c0 2.21 1.79 4 4 4 .52 0 1.01-.1 1.46-.27l1.46 1.46A5.97 5.97 0 0112 18zm9.19 2.19l-16.38-16.38a.996.996 0 10-1.41 1.41l2.17 2.17A7.93 7.93 0 004 12c0 4.42 3.58 8 8 8 1.61 0 3.11-.48 4.37-1.3l2.02 2.02a.996.996 0 101.41-1.41zM12 6c1.1 0 2.16.3 3.06.82l1.46-1.46A7.93 7.93 0 0012 4c-1.61 0-3.11.48-4.37 1.3l2.02 2.02A5.97 5.97 0 0112 6zm7.18 9.88c.52-.9.82-1.95.82-3.06 0-4.42-3.58-8-8-8-.52 0-1.01.1-1.46.27l9.64 9.64z" fill="#16A34A"/>
        </svg>
      </span>
    ),
  },
  {
    title: "No Smartphone Needed",
    desc: "Use simple NFC cards and wristbands instead",
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#D1FADF]">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <rect x="4" y="7" width="16" height="10" rx="2" stroke="#16A34A" strokeWidth="2"/>
          <rect x="8" y="15" width="8" height="2" rx="1" fill="#16A34A"/>
        </svg>
      </span>
    ),
  },
  {
    title: "Safe and Secure",
    desc: "Bank-level security with encrypted transactions",
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#D1FADF]">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path d="M12 17a2 2 0 002-2v-1h-4v1a2 2 0 002 2zm6-6v-2a6 6 0 10-12 0v2a2 2 0 00-2 2v5a2 2 0 002 2h12a2 2 0 002-2v-5a2 2 0 00-2-2zm-8-2a4 4 0 118 0v2H8v-2z" fill="#16A34A"/>
        </svg>
      </span>
    ),
  },
  {
    title: "Low-Cost for Merchants",
    desc: "Affordable transaction fees for small businesses",
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#D1FADF]">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <text x="12" y="18" textAnchor="middle" fontSize="18" fill="#16A34A" fontFamily="Arial, sans-serif">₦</text>
        </svg>
      </span>
    ),
  },
  {
    title: "CBN Compliant",
    desc: "Fully approved by Central Bank of Nigeria",
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#D1FADF]">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="#16A34A" strokeWidth="2" fill="none"/>
          <path d="M8 12l2.5 2.5L16 9" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    ),
  },
  {
    title: "Community Focused",
    desc: "Built specifically for rural Nigerian communities",
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#D1FADF]">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <circle cx="8.5" cy="10.5" r="2.5" fill="#16A34A"/>
          <circle cx="15.5" cy="10.5" r="2.5" fill="#16A34A"/>
          <ellipse cx="12" cy="16" rx="7" ry="3" fill="#16A34A" fillOpacity="0.2"/>
        </svg>
      </span>
    ),
  },
];

export default function WhyChooseKudger() {
  return (
    <section id="why-choose-kudger" className="w-full py-16 md:py-24 px-2 md:px-0 flex justify-center items-center bg-[#0B2B2C] relative overflow-hidden" style={{backgroundImage: 'url(/bg-layout.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
  <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
    {/* Left: Text & Features */}
    <div className="basis-2/3 flex flex-col items-start min-w-0">
      {/* Badge */}
      <span className="inline-block bg-[#16A34A] text-white rounded-full px-6  py-1 text-sm font-semibold mb-6 shadow">Why choose Kudger?</span>
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-left leading-tight text-white">Built for Nigeria&apos;s unique<br />needs and challenges</h2>
      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-8 w-full">
        {/* Feature 1 */}
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center justify-center w-12 h-12 mb-4">
            <Image width={20} height={20} src="/offline.svg" alt="Offline" className="object-contain" />
          </span>
          <h3 className="font-bold text-white text-lg mb-1">Works Offline</h3>
          <p className="text-[#D1FADF] text-base leading-snug">Make payments even without internet connection</p>
        </div>
        {/* Feature 2 */}
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center justify-center w-12 h-12 mb-4">
            <Image width={14} height={14} src="/phone.svg" alt="Phone" className="object-contain" />
          </span>
          <h3 className="font-bold text-white text-lg mb-1">No Smartphone Needed</h3>
          <p className="text-[#D1FADF] text-base leading-snug">Use simple NFC cards and wristbands instead</p>
        </div>
        {/* Feature 3 */}
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center justify-center w-12 h-12 mb-4">
            <Image width={20} height={20} src="/low_cost.svg" alt="Safe" className="object-contain" />
          </span>
          <h3 className="font-bold text-white text-lg mb-1">Safe & Secure</h3>
          <p className="text-[#D1FADF] text-base leading-snug">Bank-level security with encrypted transactions</p>
        </div>
        {/* Feature 4 */}
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center justify-center w-12 h-12 mb-4">
            <Image width={20} height={20} src="/cbn.svg" alt="CBN" className="object-contain" />
          </span>
          <h3 className="font-bold text-white text-lg mb-1">CBN Compliant</h3>
          <p className="text-[#D1FADF] text-base leading-snug">Fully approved by Central Bank of Nigeria</p>
        </div>
        {/* Feature 5 */}
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center justify-center w-12 h-12 mb-4">
            <Image width={20} height={20} src="/community.svg" alt="Community" className="object-contain" />
          </span>
          <h3 className="font-bold text-white text-lg mb-1">Community Focused</h3>
          <p className="text-[#D1FADF] text-base leading-snug">Built specifically for rural Nigerian communities</p>
        </div>
        {/* Feature 6 */}
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center justify-center w-12 h-12 mb-4">
            <Image width={20} height={20} src="/low_cost.svg" alt="Low Cost" className="object-contain" />
          </span>
          <h3 className="font-bold text-white text-lg mb-1">Low-Cost for Merchant</h3>
          <p className="text-[#D1FADF] text-base leading-snug">Affordable transaction fees for small businesses</p>
        </div>
      </div>
    </div>
    {/* Right: Image */}
    <div className="basis-1/3 flex justify-center items-end min-w-0">
      <div className="rounded-3xl p-2 md:p-6 relative flex items-center justify-center" style={{backgroundImage: 'url(/bg-layout.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <img src="/whyChoose.svg" alt="Kudger user" className="rounded-2xl object-cover w-[340px] h-[420px] md:w-[370px] md:h-[430px]" />
      </div>
    </div>
  </div>
  {/* Optional: dark overlay for better contrast */}
  <div className="absolute inset-0 bg-[#0B2B2C] opacity-80 pointer-events-none z-0"></div>
</section>


  );
}

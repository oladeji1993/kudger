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

export default function paymentProcess() {
  return (
    <section id="payment-process" className="w-full bg-[#f6fbfd] py-16 px-2 md:px-0 flex justify-center items-center">
    <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
      {/* Badge */}
      <span className="inline-block bg-green-600 text-white rounded-full px-6 py-1 text-sm font-semibold mb-6">How Kudger works?</span>
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-left leading-tight">5 Easy Steps to Tap & Pay</h2>
      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 w-full">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl border border-[#E3E7E8] flex flex-col items-start p-0 overflow-hidden shadow-sm relative">
          <div className="w-full p-3 bg-gray-100 flex items-center justify-center">
            <Image src="/create-wallet.svg" alt="Create Your Wallet" width={370} height={370} className="object-contain" />
          </div>
          <div className="p-6 relative z-10">
            <h3 className="font-bold text-lg mb-2 text-gray-900 text-left">Create Your Wallet</h3>
            <p className="text-gray-700 text-base text-left leading-snug">Open a Kudger-linked eNaira wallet using your phone number or NIN.</p>
          </div>
          <Image src="/bg-layout.svg" alt="card-bg" width={270} height={270} className="absolute bottom-0 left-0 w-full h-3/5 object-cover opacity-20 pointer-events-none z-0" />
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-2xl border border-[#E3E7E8] flex flex-col items-start p-0 overflow-hidden shadow-sm relative">
          <div className="w-full p-3 bg-gray-100 flex items-center justify-center">
            <Image src="/nfc.svg" alt="Get Your NFC Device" width={370} height={370} className="object-contain" />
          </div>
          <div className="p-6 relative z-10">
            <h3 className="font-bold text-lg mb-2 text-gray-900 text-left">Get Your NFC Device</h3>
            <p className="text-gray-700 text-base text-left leading-snug">We’ll give you a smart sticker, wristband, or card that stores payment tokens.</p>
          </div>
          <Image src="/bg-layout.svg" alt="card-bg" width={270} height={270} className="absolute bottom-0 left-0 w-full h-3/5 object-cover opacity-20 pointer-events-none z-0" />
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-2xl border border-[#E3E7E8] flex flex-col items-start p-0 overflow-hidden shadow-sm relative">
          <div className="w-full p-3 bg-gray-100 flex items-center justify-center">
            <Image src="/token.svg" alt="Load Tokens" width={370} height={370} className="object-contain" />
          </div>
          <div className="p-6 relative z-10">
            <h3 className="font-bold text-lg mb-2 text-gray-900 text-left">Load Tokens</h3>
            <p className="text-gray-700 text-base text-left leading-snug">Top up your wallet. Tokens are loaded securely onto your NFC device.</p>
          </div>
          <Image src="/bg-layout.svg" alt="card-bg" width={270} height={270} className="absolute bottom-0 left-0 w-full h-3/5 object-cover opacity-20 pointer-events-none z-0" />
        </div>
        {/* Card 4 */}
        <div className="bg-white rounded-2xl border border-[#E3E7E8] flex flex-col items-start p-0 overflow-hidden shadow-sm relative">
          <div className="w-full p-3 bg-gray-100 flex items-center justify-center">
            <Image src="/pay.svg" alt="Tap to Pay" width={370} height={370} className="object-contain" />
          </div>
          <div className="p-6 relative z-10">
            <h3 className="font-bold text-lg mb-2 text-gray-900 text-left">Tap to Pay</h3>
            <p className="text-gray-700 text-base text-left leading-snug">At the point of payment, just tap your device on the merchant’s phone or POS.</p>
          </div>
          <Image objectFit="cover" src="/bg-layout.svg" width={100} height={100} alt="card-bg" className="absolute bottom-0 left-0 w-full h-3/5 object-cover opacity-20 pointer-events-none z-0" />
        </div>
        {/* Card 5 */}
        <div className="bg-white rounded-2xl border border-[#E3E7E8] flex flex-col items-start p-0 overflow-hidden shadow-sm relative">
          <div className="w-full p-3 bg-gray-100 flex items-center justify-center">
            <Image src="/sync.svg" alt="Sync Later" width={370} height={370} className="object-contain" />
          </div>
          <div className="p-6 relative z-10">
            <h3 className="font-bold text-lg mb-2 text-gray-900 text-left">Sync Later</h3>
            <p className="text-gray-700 text-base text-left leading-snug">Transactions go through instantly. Records sync automatically when internet is available.</p>
          </div>
          <Image src="/bg-layout.svg" alt="card-bg" width={270} height={270} className="absolute bottom-0 left-0 w-full h-3/5 object-cover opacity-20 pointer-events-none z-0" />
        </div>
        {/* Card 6: Get Started Now */}
        <div className="bg-white rounded-2xl border border-[#E3E7E8] flex flex-col items-start p-0 overflow-hidden shadow-sm">
          <div className="w-full p-3 bg-gray-100 flex items-center justify-center">
            <Image src="/getStarted.png" alt="Get Started Now" width={370} height={370} className="object-contain" />
          </div>
          <div className="p-6 flex flex-col h-full w-full justify-between">
            <h3 className="font-bold text-lg mb-4 text-gray-900 text-left">Get started now</h3>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-800 transition w-fit">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
}

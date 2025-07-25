import Image from "next/image";

const quickLinks = [
  { name: "About", href: "#" },
  { name: "How it Works", href: "#" },
  { name: "Partners", href: "#" },
  { name: "FAQs", href: "#" }
];
const supportLinks = [
  { name: "Contact", href: "#" },
  { name: "Help Center", href: "#" },
  { name: "Agent Network", href: "#" },
  { name: "Technical Docs", href: "#" }
];
const legalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Compliance", href: "#" },
  { name: "Security", href: "#" }
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#131926] text-white pt-14 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
        {/* Logo & tagline */}
        <div>
          <div className="font-pacifico text-2xl text-white mb-2">Kudger</div>
          <div className="text-sm text-gray-300 mb-4">Empowering Nigeria&#39;s rural communities with offline-first digital payments.</div>
          <div className="flex gap-2 mt-2">
            <a href="#" className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition">
              <svg width="18" height="18" fill="none" viewBox="0 0 18 18"><path d="M9 2.25c-3.72 0-6.75 3.03-6.75 6.75 0 3.15 2.18 5.77 5.03 6.51v-4.6H5.69V8.25h1.59V7.13c0-1.57.94-2.44 2.37-2.44.69 0 1.41.12 1.41.12v1.55h-.8c-.79 0-1.04.49-1.04 1v1.19h1.77l-.28 1.41H9.22v4.6c2.85-.74 5.03-3.36 5.03-6.51 0-3.72-3.03-6.75-6.75-6.75z" fill="#fff"/></svg>
            </a>
            <a href="#" className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition">
              <svg width="18" height="18" fill="none" viewBox="0 0 18 18"><path d="M15.75 2.25a6.75 6.75 0 01-1.94.53A3.38 3.38 0 0015.34.6a6.68 6.68 0 01-2.13.82A3.37 3.37 0 008.88 6.4a9.57 9.57 0 01-6.95-3.52a3.36 3.36 0 001.05 4.5A3.33 3.33 0 012.1 6.6v.04a3.37 3.37 0 002.7 3.3a3.38 3.38 0 01-1.52.06a3.37 3.37 0 003.14 2.33A6.77 6.77 0 012.25 14.1a9.54 9.54 0 005.18 1.52c6.22 0 9.62-5.15 9.62-9.62c0-.15 0-.29-.01-.43a6.8 6.8 0 001.67-1.72z" fill="#fff"/></svg>
            </a>
            <a href="#" className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition">
              <svg width="18" height="18" fill="none" viewBox="0 0 18 18"><path d="M15.75 2.25v13.5h-13.5v-13.5h13.5zm-2.25 2.25h-9v9h9v-9zm-1.5 1.5v6h-6v-6h6z" fill="#fff"/></svg>
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <div className="font-semibold mb-2">Quick Links</div>
          <ul className="space-y-1">
            {quickLinks.map((l, i) => <li key={i}><a href={l.href} className="text-gray-200 hover:text-green-400 text-sm transition">{l.name}</a></li>)}
          </ul>
        </div>
        {/* Support */}
        <div>
          <div className="font-semibold mb-2">Support</div>
          <ul className="space-y-1">
            {supportLinks.map((l, i) => <li key={i}><a href={l.href} className="text-gray-200 hover:text-green-400 text-sm transition">{l.name}</a></li>)}
          </ul>
        </div>
        {/* Legal */}
        <div>
          <div className="font-semibold mb-2">Legal</div>
          <ul className="space-y-1">
            {legalLinks.map((l, i) => <li key={i}><a href={l.href} className="text-gray-200 hover:text-green-400 text-sm transition">{l.name}</a></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-[#23293a] pt-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="text-xs text-gray-400 mb-2 md:mb-0">© 2024 Kudger. All rights reserved. Licensed by Central Bank of Nigeria.</div>
        <div className="flex items-center gap-2">
          <Image src="/enaira-badge.png" alt="eNaira badge" width={32} height={32} className="object-contain" />
          <span className="bg-green-700 text-white text-xs font-semibold rounded px-2 py-1">eNaira</span>
        </div>
      </div>
    </footer>
  );
}

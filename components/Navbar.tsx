"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when a link is clicked
  const handleNavClick = () => setMenuOpen(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <nav className="w-full max-w-7xl mx-auto">
        <div className="mx-auto w-full flex items-center justify-between pt-4 pb-4">
          {/* Logo */}
          <div className="flex items-center gap-2 select-none">
            {/* Placeholder SVG for green logo icon */}
            <Image src="/k-logo.svg" alt="Kudger Logo" width={150} height={150} />
            {/* <span className="font-extrabold text-2xl text-[#122027] tracking-tight">kudger</span> */}
          </div>
          <div className="flex items-center gap-4">
            {/* Nav Links (desktop) */}
            <div className="hidden md:flex gap-8 text-[#122027] text-base font-semibold items-center">
              <Link href="#about" className="hover:text-[#12D18E] transition">About Us</Link>
              <Link href="#faq" className="hover:text-[#12D18E] transition">FAQ</Link>
              <Link href="#contact" className="hover:text-[#12D18E] transition">Contact Us</Link>
            </div>
            {/* CTA Button (desktop) */}
            <div className="flex items-center">
              <Link href="#get-started" className="hidden sm:inline-block bg-[#0A2B32] hover:bg-[#14505F] text-white px-8 py-2 rounded-xl text-base font-semibold transition shadow-md" style={{ minWidth: '170px', textAlign: 'center' }}>Get Started</Link>
            </div>
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              className="p-2 focus:outline-none"
              aria-label="Open menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                // Close icon
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" /></svg>
              ) : (
                // Hamburger icon
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-30" onClick={() => setMenuOpen(false)}>
            <div
              className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg flex flex-col gap-6 pt-20 px-6 text-[#122027] text-lg font-semibold"
              onClick={e => e.stopPropagation()}
            >
              <Link href="#about" className="hover:text-[#12D18E] transition" onClick={handleNavClick}>About Us</Link>
              <Link href="#faq" className="hover:text-[#12D18E] transition" onClick={handleNavClick}>FAQ</Link>
              <Link href="#contact" className="hover:text-[#12D18E] transition" onClick={handleNavClick}>Contact Us</Link>
              <Link href="#get-started" className="bg-[#10343F] hover:bg-[#14505F] text-white px-8 py-2 rounded-xl text-lg font-semibold transition mt-2 text-center shadow-md" onClick={handleNavClick}>Get Started</Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}


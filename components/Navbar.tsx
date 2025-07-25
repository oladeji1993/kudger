"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when a link is clicked
  const handleNavClick = () => setMenuOpen(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <nav className="border-b border-gray-200 w-full">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-4 sm:px-8 py-2">
          {/* Logo */}
          <div className="flex items-center">
            <span className="font-pacifico text-green-700 text-2xl select-none">Kudger</span>
          </div>
          {/* Nav Links (desktop) */}
          <div className="hidden md:flex gap-6 text-gray-700 text-sm font-medium">
            <Link href="#how-it-works" className="hover:text-green-700 transition">How It Works</Link>
            <Link href="#why-choose-kudger" className="hover:text-green-700 transition">Benefits</Link>
            <Link href="#partners" className="hover:text-green-700 transition">Partners</Link>
            <Link href="#contact" className="hover:text-green-700 transition">Contact</Link>
          </div>
          {/* CTA Button (desktop) */}
          <div className="flex items-center">
            <Link href="#find-agent" className="bg-green-600 hover:bg-green-700 text-white px-5 py-1.5 rounded-full text-sm font-medium transition hidden sm:inline-block">Find Agent</Link>
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
              className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg flex flex-col gap-6 pt-20 px-6 text-gray-700 text-base font-medium"
              onClick={e => e.stopPropagation()}
            >
              <Link href="#how-it-works" className="hover:text-green-700 transition" onClick={handleNavClick}>How It Works</Link>
              <Link href="#why-choose-kudger" className="hover:text-green-700 transition" onClick={handleNavClick}>Benefits</Link>
              <Link href="#partners" className="hover:text-green-700 transition" onClick={handleNavClick}>Partners</Link>
              <Link href="#contact" className="hover:text-green-700 transition" onClick={handleNavClick}>Contact</Link>
              <Link href="#find-agent" className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-base font-medium transition mt-2 text-center" onClick={handleNavClick}>Find Agent</Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}


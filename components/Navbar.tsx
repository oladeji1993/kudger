import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <nav className="border-b border-gray-200 w-full">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-4 sm:px-8 py-2">
          {/* Logo */}
          <div className="flex items-center">
            <span className="font-pacifico text-green-700 text-2xl select-none">Kudger</span>
          </div>
          {/* Nav Links */}
          <div className="hidden md:flex gap-6 text-gray-700 text-sm font-medium">
            <Link href="#how-it-works" className="hover:text-green-700 transition">How It Works</Link>
            <Link href="#why-choose-kudger" className="hover:text-green-700 transition">Benefits</Link>
            <Link href="#partners" className="hover:text-green-700 transition">Partners</Link>
            <Link href="#contact" className="hover:text-green-700 transition">Contact</Link>
          </div>
          {/* CTA Button */}
          <div className="flex items-center">
            <Link href="#find-agent" className="bg-green-600 hover:bg-green-700 text-white px-5 py-1.5 rounded-full text-sm font-medium transition hidden sm:inline-block">Find Agent</Link>
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden">
            {/* Hamburger icon for future mobile menu */}
            <button className="p-2 focus:outline-none">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

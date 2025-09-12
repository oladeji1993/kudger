
"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Do I need a smartphone to use Kudger?",
    a: "No, you can use Kudger with our NFC devices without a smartphone.",
  },
  {
    q: "What happens if I lose my NFC device?",
    a: "Your tokens are protected with encryption. We'll block it and issue a new one tied to your wallet.",
  },
  {
    q: "Is Kudger legal and secure?",
    a: "Absolutely. Kudger complies with CBN regulations and uses bank-grade security.",
  },
  {
    q: "Can I use Kudger as a business owner?",
    a: "Yes, Kudger supports both individuals and businesses.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative w-full py-16 px-2 md:px-0 flex flex-col items-center bg-[#F6FBFD] overflow-hidden">
      <img src="/bg-layout.svg" alt="background layout" className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 pointer-events-none select-none" />
      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center leading-tight text-[#23272F]">FAQ</h2>
        <div className="w-full max-w-5xl flex flex-col gap-6">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl bg-[#0A282B]">
              <button
                className="w-full flex items-center justify-between px-6 py-6 md:py-7 focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
              >
                <span className="text-lg md:text-xl font-semibold text-white text-left">
                  {faq.q}
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-md bg-white">
                  <span className="text-[#19C37D] text-2xl font-bold select-none">
                    {open === i ? "–" : "+"}
                  </span>
                </span>
              </button>
              {open === i && (
                <div
                  id={`faq-panel-${i}`}
                  className="px-6 pb-6 text-white animate-fadeIn"
                >
                  <div className="text-base md:text-lg pt-2">
                    {faq.a}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
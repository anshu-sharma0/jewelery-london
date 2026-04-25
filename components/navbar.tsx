"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { business, navigation } from "@/data/site";

export function Navbar() {
  const [isCompact, setIsCompact] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsCompact(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 lg:px-10 lg:pt-6">
      <div
        className={`mx-auto max-w-[1480px] rounded-[26px] border border-[rgba(23,23,23,0.12)] bg-[rgba(255,253,250,0.84)] shadow-[0_12px_34px_rgba(17,15,10,0.08)] backdrop-blur-xl transition-all duration-300 ${
          isCompact ? "px-4 py-3" : "px-5 py-4 sm:px-7"
        }`}
      >
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3" aria-label={`${business.name} home`}>
            <span className="flex size-10 items-center justify-center rounded-full border border-[#1b1b1b] text-[12px] font-semibold uppercase tracking-[0.2em]">
              AH
            </span>
            <span className="flex flex-col leading-none">
              <span className="display text-[19px] tracking-[0.08em] text-[#151515] uppercase">{business.name}</span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-[#6a6555]">Fine Jewellery</span>
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden lg:block">
            <ul className="flex items-center gap-9 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#35322a]">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-opacity duration-300 hover:opacity-60">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          className={`grid overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <nav aria-label="Mobile navigation" className="min-h-0">
            <ul className="grid gap-3 border-t border-[var(--line)] pt-4 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#35322a]">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex py-1" onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="mt-1 inline-flex rounded-full bg-[#141414] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {business.heroCta}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

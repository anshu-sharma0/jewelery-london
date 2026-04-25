import Link from "next/link";
import { BagIcon, LogoMark, SearchIcon } from "@/components/ui";
import { navigation } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="px-6 pt-8 sm:px-10 lg:px-16 lg:pt-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" aria-label="UiXShuvo home">
            <LogoMark />
          </Link>
          <div className="hidden h-10 w-px bg-[var(--line)] lg:block" />
        </div>

        <nav aria-label="Primary navigation" className="order-3 lg:order-none">
          <ul className="flex flex-wrap items-center justify-center gap-6 text-[15px] font-medium text-[#141414] sm:gap-9">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-opacity duration-300 hover:opacity-60">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-between gap-4 self-end lg:self-auto">
          <button
            type="button"
            aria-label="Search"
            className="flex size-11 items-center justify-center rounded-full border border-transparent transition-colors duration-300 hover:border-[var(--line)]"
          >
            <SearchIcon />
          </button>
          <div className="h-10 w-px bg-[var(--line)]" />
          <Link href="/contact" className="text-[15px] font-medium text-[#181818] transition-opacity duration-300 hover:opacity-60">
            Contact
          </Link>
          <button
            type="button"
            aria-label="Cart"
            className="relative flex size-12 items-center justify-center rounded-full bg-[#171717] text-white transition-transform duration-300 hover:scale-105"
          >
            <BagIcon />
            <span className="absolute right-1.5 top-1.5 flex size-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#171717]">
              3
            </span>
          </button>
        </div>
      </div>
      <div className="section-line mt-7" />
    </header>
  );
}

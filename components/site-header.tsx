import Link from "next/link";
import { BagIcon, LogoMark } from "@/components/ui";
import { business, navigation } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="px-6 pt-8 sm:px-10 lg:px-16 lg:pt-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" aria-label={`${business.name} home`}>
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
            aria-label="Cart"
            className="relative flex size-12 items-center justify-center rounded-full transition-transform duration-300 hover:scale-105"
          >
            <BagIcon />
          </button>
        </div>
      </div>
      <div className="section-line mt-7" />
    </header>
  );
}

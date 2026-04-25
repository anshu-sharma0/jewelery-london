import Link from "next/link";
import { business, navigation } from "@/data/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(12,12,12,0.72)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-full border border-[var(--border-strong)] bg-white/6 text-sm font-semibold tracking-[0.3em] text-[var(--text)]">
              AH
            </span>
            <span className="flex flex-col">
              <span className="font-[family:var(--font-display)] text-lg tracking-[0.18em] text-[var(--text)] uppercase">
                {business.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.32em] text-[var(--text-muted)]">
                Fine Jewellery
              </span>
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm tracking-[0.22em] text-[var(--text-muted)] uppercase">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link href="/contact" className="luxury-button luxury-button-dark">
            {business.heroCta}
          </Link>
        </div>

        <nav aria-label="Mobile navigation" className="mt-4 md:hidden">
          <ul className="flex items-center gap-5 overflow-x-auto text-[11px] uppercase tracking-[0.28em] text-[var(--text-muted)]">
            {navigation.map((item) => (
              <li key={item.href} className="shrink-0">
                <Link href={item.href} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

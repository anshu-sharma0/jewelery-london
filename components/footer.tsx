import Link from "next/link";
import { business, footerLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[rgba(9,9,9,0.96)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.3fr_0.7fr_0.8fr] lg:px-8 lg:py-16">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.34em] text-[var(--text-muted)]">
            {business.tagline}
          </p>
          <h2 className="max-w-md font-[family:var(--font-display)] text-3xl leading-tight text-[var(--text)] sm:text-4xl">
            Jewellery for moments that deserve permanence.
          </h2>
        </div>

        <div className="space-y-3 text-sm text-[var(--text-soft)]">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link inline-flex">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="space-y-3 text-sm text-[var(--text-soft)]">
          <p>{business.legalName}</p>
          <p>{business.phone}</p>
          <p>{business.email}</p>
          <p>{business.location}</p>
        </div>
      </div>
    </footer>
  );
}

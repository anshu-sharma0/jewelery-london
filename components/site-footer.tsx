import Link from "next/link";
import { ArrowThinIcon, LogoMark } from "@/components/ui";
import { business, footerLinks } from "@/data/site";

const socials = [
  { label: "Instagram", href: "#" },
  { label: "Pinterest", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Facebook", href: "#" }
];

export function SiteFooter() {
  return (
    <footer className="px-6 pb-8 sm:px-10 lg:px-16 lg:pb-10">
      <div className="section-line" />
      <div className="flex flex-col gap-8 py-8 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" aria-label={`${business.name} home`} className="inline-flex">
          <LogoMark />
        </Link>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-0">
          <label className="flex items-center border-b border-[var(--line)] pb-3 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-8">
            <span className="sr-only">Enter email</span>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full min-w-[190px] bg-transparent text-[16px] text-[#151515] outline-none placeholder:text-[#555]"
            />
          </label>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 border-b border-[var(--line)] pb-3 text-[16px] font-medium text-[#151515] transition-transform duration-300 hover:translate-x-1 sm:border-b-0 sm:pb-0 sm:pl-8"
          >
            <span>Newsletter</span>
            <ArrowThinIcon />
          </Link>
        </div>
      </div>
      <div className="section-line" />
      <div className="flex flex-col gap-6 py-8 text-[15px] text-[#444] sm:flex-row sm:items-center sm:justify-between">
        <p>{`© ${new Date().getFullYear()} ${business.legalName}`}</p>
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex size-9 items-center justify-center rounded-full border border-[#1b1b1b] text-[11px] font-bold uppercase tracking-[0.08em] text-[#1b1b1b] transition-colors duration-300 hover:bg-[#1b1b1b] hover:text-white"
            >
              {social.label[0]}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-6">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-opacity duration-300 hover:opacity-60">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

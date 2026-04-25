import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { business } from "@/data/site";

type SectionHeadingProps = {
  title: string;
  className?: string;
};

export function SectionHeading({ title, className = "" }: SectionHeadingProps) {
  return (
    <h2
      className={`display text-[46px] leading-[0.94] tracking-[0] text-[#141414] sm:text-[58px] lg:text-[76px] ${className}`}
    >
      {title}
    </h2>
  );
}

type CopyProps = {
  children: React.ReactNode;
  className?: string;
};

export function Copy({ children, className = "" }: CopyProps) {
  return (
    <p className={`text-[15px] leading-8 text-[#4f4f4f] sm:text-[16px] ${className}`}>{children}</p>
  );
}

type PillArrowButtonProps = {
  href: string;
  label: string;
  className?: string;
  invert?: boolean;
};

export function PillArrowButton({
  href,
  label,
  className = "",
  invert = false
}: PillArrowButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-4 text-[15px] font-semibold tracking-[0] transition-transform duration-300 hover:translate-x-1 ${className}`}
    >
      <span className={`button-line inline-block h-10 w-[100px] shrink-0 sm:w-[122px]`} />
      <span
        className={`flex size-12 items-center justify-center rounded-full border transition-colors duration-300 ${
          invert
            ? "border-[#1a1a1a] bg-[#1a1a1a] text-white group-hover:bg-white group-hover:text-[#1a1a1a]"
            : "border-[#1a1a1a] bg-white text-[#1a1a1a] group-hover:bg-[#1a1a1a] group-hover:text-white"
        }`}
        aria-hidden="true"
      >
        <ArrowIcon />
      </span>
      <span>{label}</span>
    </Link>
  );
}

type TextArrowLinkProps = {
  href: string;
  label: string;
  className?: string;
};

export function TextArrowLink({ href, label, className = "" }: TextArrowLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-5 text-[17px] font-medium text-[#191919] transition-transform duration-300 hover:translate-x-1 ${className}`}
    >
      <span>{label}</span>
      <span className="relative inline-flex h-4 w-28 items-center">
        <span className="h-px w-full bg-[#1a1a1a] transition-all duration-300 group-hover:w-[90%]" />
        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-xl leading-none">
          <ArrowThinIcon />
        </span>
      </span>
    </Link>
  );
}

type FramedImageProps = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function FramedImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 33vw"
}: FramedImageProps) {
  return (
    <div className={`relative overflow-hidden bg-[#f4f1eb] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-700 hover:scale-[1.04]"
      />
    </div>
  );
}

export function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <span className="relative block size-8 rounded-full border-[3px] border-[#111]">
        <span className="absolute right-[-2px] top-[2px] size-3 rounded-full bg-white" />
        <span className="absolute left-[9px] top-[-6px] size-2 rounded-full bg-[#111]" />
      </span>
      <span className="text-[28px] font-extrabold uppercase tracking-tight text-[#111]">{business.name}</span>
    </div>
  );
}

export function ArrowThinIcon() {
  return (
    <svg viewBox="0 0 32 12" className="h-4 w-10 fill-none stroke-current" strokeWidth="1.4">
      <path d="M0.5 6H30.5" />
      <path d="M25.5 1L30.5 6L25.5 11" />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.7">
      <path d="M3 12h18" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.7">
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l5 5" />
    </svg>
  );
}

export function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.7">
      <path d="M6 8h12l-1.2 10.5a2 2 0 0 1-2 1.5H9.2a2 2 0 0 1-2-1.5z" />
      <path d="M9 9V7a3 3 0 1 1 6 0v2" />
    </svg>
  );
}

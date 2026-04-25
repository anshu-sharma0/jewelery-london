import { Copy, FramedImage, SectionHeading, TextArrowLink } from "@/components/ui";

export function EditorialSection() {
  return (
    <section className="px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[0.86fr_1.2fr_0.9fr] lg:items-start">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6b6758]">Editorial Lens</p>
          <SectionHeading title={"Jewellery is the\nfinishing signature"} className="max-w-[450px] whitespace-pre-line" />
          <Copy className="mt-8 max-w-[240px]">
            Designed to elevate personal style without overwhelming it, each piece is composed with softness,
            structure, and a quiet glow.
          </Copy>
          <TextArrowLink href="#testimonial" label="Read Client Stories" className="mt-10" />
        </div>

        <div className="relative flex justify-center">
          <div className="pointer-events-none absolute left-[8%] top-[18%] h-[82%] w-[74%] rounded-[999px] border border-[#171717]" />
          <FramedImage
            src="/assets/images/editorial.webp"
            alt="Jewellery editorial still life"
            className="rounded-arch-left image-shadow aspect-[0.82] w-full max-w-[430px]"
          />
          <div className="soft-card absolute -bottom-5 left-4 rounded-[20px] px-5 py-4 sm:left-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6a6556]">Featured In</p>
            <p className="display mt-2 text-[23px] leading-none text-[#141414]">Modern Luxury Edit</p>
          </div>
        </div>

        <div className="pt-4 lg:pt-10">
          <div className="mb-8 h-px w-24 bg-[#171717]" />
          <Copy className="text-[17px] leading-9">
            True luxury is never loud. It reveals itself in proportion, texture, and in the way a piece captures and
            returns light.
          </Copy>
          <Copy className="mt-6">
            That is the feeling behind every collection: calm confidence, enduring beauty, and modern femininity.
          </Copy>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-[#171717]/15 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2d2a24]">
              Limited Runs
            </span>
            <span className="rounded-full border border-[#171717]/15 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2d2a24]">
              Hand Finished
            </span>
            <span className="rounded-full border border-[#171717]/15 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2d2a24]">
              Lifetime Care
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

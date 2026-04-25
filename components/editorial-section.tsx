import { Copy, FramedImage, SectionHeading, TextArrowLink } from "@/components/ui";

export function EditorialSection() {
  return (
    <section className="px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[0.86fr_1.2fr_0.9fr] lg:items-start">
        <div>
          <SectionHeading title={"Jewelry is the\nfinishing gesture"} className="max-w-[420px] whitespace-pre-line" />
          <Copy className="mt-8 max-w-[240px]">
            Designed to elevate what is already there, each piece is composed with softness, structure, and a quiet glow.
          </Copy>
          <TextArrowLink href="#testimonial" label="" className="mt-10 [&>span:first-child]:hidden" />
        </div>

        <div className="relative flex justify-center">
          <div className="pointer-events-none absolute left-[8%] top-[18%] h-[82%] w-[74%] rounded-[999px] border border-[#171717]" />
          <FramedImage
            src="/assets/images/editorial.webp"
            alt="Jewellery editorial still life"
            className="rounded-arch-left image-shadow aspect-[0.82] w-full max-w-[430px]"
          />
          <SectionHeading
            title={"It complements what is\nalready there"}
            className="absolute bottom-[-4%] left-[18%] max-w-[650px] whitespace-pre-line text-[50px] leading-[0.9] sm:text-[72px]"
          />
        </div>

        <div className="pt-4 lg:pt-10">
          <div className="mb-8 h-px w-24 bg-[#171717]" />
          <Copy>
            Premium design is never loud. It is revealed in proportion, texture, and the way a piece holds light on the
            body.
          </Copy>
          <Copy className="mt-6">
            That is the feeling we pursue in every collection: calm confidence, lasting beauty, and modern femininity.
          </Copy>
        </div>
      </div>
    </section>
  );
}

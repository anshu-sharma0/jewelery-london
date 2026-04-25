import { Copy, FramedImage, PillArrowButton, SectionHeading } from "@/components/ui";

export function CtaSection() {
  return (
    <section className="px-6 pb-16 pt-6 sm:px-10 lg:px-16 lg:pb-24 lg:pt-8">
      <div className="grid gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
        <div className="max-w-[560px]">
          <SectionHeading title={"Pearls are always\nappropriate."} className="max-w-[520px] whitespace-pre-line" />
          <p className="mt-10 text-[26px] font-extrabold tracking-tight text-[#181818] sm:text-[34px]">40% off on your first order</p>
          <Copy className="mt-6 max-w-[560px]">
            Dreaming of a piece that&apos;s uniquely yours? Our custom jewelry service allows you to bring your vision to
            life. Work closely with our expert artisans to design a piece that reflects your personal style and story.
          </Copy>
          <PillArrowButton href="#shop" label="Shop Now" className="mt-10" invert />
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px]">
            <FramedImage
              src="/assets/images/cta.webp"
              alt="Model wearing pearl earrings"
              className="image-shadow rounded-[999px] aspect-[0.78] w-full"
            />
            <span className="ellipse-ring left-[-7%] top-[32%] h-16 w-[118%] -rotate-[24deg]" />
            <span className="ellipse-ring left-[-1%] top-[54%] h-16 w-[110%] -rotate-[24deg]" />
            <span className="ellipse-ring left-[12%] top-[10%] h-14 w-[88%] rotate-[24deg]" />
          </div>
        </div>
      </div>
    </section>
  );
}

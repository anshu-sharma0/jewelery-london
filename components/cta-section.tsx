import { Copy, FramedImage, PillArrowButton, SectionHeading } from "@/components/ui";

export function CtaSection() {
  return (
    <section className="px-6 pb-16 pt-6 sm:px-10 lg:px-16 lg:pb-24 lg:pt-8">
      <div className="grid gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
        <div className="max-w-[560px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#6a6556]">Private Appointments</p>
          <SectionHeading title={"Pearls, Gold,\nand Forever Pieces."} className="max-w-[560px] whitespace-pre-line" />
          <p className="mt-10 text-[26px] font-extrabold tracking-tight text-[#181818] sm:text-[34px]">
            Complimentary private styling on your first order
          </p>
          <Copy className="mt-6 max-w-[560px]">
            Looking for something truly personal? Our custom jewellery service lets you co-create a piece with our
            designers and artisans, tailored to your story, lifestyle, and signature style.
          </Copy>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PillArrowButton href="/contact" label="Book Your Consultation" invert />
            
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px]">
            <FramedImage
              src="/assets/images/cta.webp"
              alt="Model wearing pearl earrings"
              className="image-shadow rounded-[999px] aspect-[0.78] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

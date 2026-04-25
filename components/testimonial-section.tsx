import { Copy, FramedImage, SectionHeading } from "@/components/ui";

export function TestimonialSection() {
  return (
    <section id="testimonial" className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[760px] text-center">
        <SectionHeading title={"Words from Our\nPrivate Clients"} className="whitespace-pre-line text-[50px] sm:text-[62px]" />
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[0.88fr_1.22fr] lg:items-center">
        <div className="relative mx-auto w-full max-w-[390px]">
          <div className="absolute inset-0 translate-x-5 translate-y-4 rounded-full border border-[#171717]" />
          <FramedImage
            src="/assets/images/testimonial.webp"
            alt="Client portrait"
            className="image-shadow relative aspect-square w-full rounded-full"
            sizes="(max-width: 1024px) 70vw, 390px"
          />
        </div>

        <div className="max-w-[720px]">
          <div className="display text-[112px] leading-[0.75] text-[#151515]">“</div>
          <Copy className="mt-4 text-[18px] leading-10 text-[#2f2f2f]">
            The craftsmanship is exceptional, and the final piece felt even more beautiful in person. From consultation
            to delivery, every detail was thoughtful and seamless. I have received endless compliments, and I already
            know this will not be my last Aurelia House piece.
          </Copy>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="text-[20px] font-extrabold text-[#141414] sm:text-[22px]">Tanjin Tisha</div>
            <span className="h-1 w-16 rounded-full bg-[#171717]" />
            {[...Array(4)].map((_, index) => (
              <span key={index} className="h-[2px] w-16 bg-[#ececec]" />
            ))}
            <button
              type="button"
              aria-label="Next testimonial"
              className="ml-auto flex size-14 items-center justify-center rounded-full bg-[#1a1a1a] text-white transition-transform duration-300 hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.6">
                <path d="M3 12h18" />
                <path d="M13 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

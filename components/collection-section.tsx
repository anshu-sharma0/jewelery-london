import { FramedImage, SectionHeading, TextArrowLink } from "@/components/ui";

const categories = ["Necklaces", "Bracelets", "Rings", "Earrings", "Bridal"];

export function CollectionSection() {
  return (
    <section id="collection" className="px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.15fr] lg:items-center">
        <div className="max-w-[460px]">
          <SectionHeading title="The Signature Collection" className="text-[48px] sm:text-[62px]" />
          <div className="mt-9 grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
            <ul className="space-y-6">
              {categories.map((category, index) => (
                <li
                  key={`${category}-${index}`}
                  className={`flex items-center gap-4 text-[16px] font-medium ${
                    index === 0 ? "text-[#161616]" : "text-[#6e6e6e]"
                  }`}
                >
                  {index === 0 ? <span className="inline-block h-px w-24 bg-[#171717]" /> : <span className="inline-block w-24" />}
                  <span>{category}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-start gap-6 sm:flex-col">
              <div className="text-[76px] font-semibold leading-none tracking-tight text-[#161616]">01</div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-12 rounded-full bg-[#141414]" />
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="h-2.5 w-12 rounded-full bg-[#e5e5e5]" />
                ))}
              </div>
              <button
                type="button"
                aria-label="Next collection"
                className="mt-2 flex size-14 items-center justify-center rounded-full bg-[#1a1a1a] text-white transition-transform duration-300 hover:scale-105"
              >
                <span className="translate-x-px">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.6">
                    <path d="M3 12h18" />
                    <path d="M13 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <TextArrowLink href="/collection" label="View Full Collection" className="mt-10" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <FramedImage
            src="/assets/images/collection-1.webp"
            alt="Earring and necklace close-up"
            className="rounded-arch-right image-shadow aspect-[0.78] w-full"
          />
          <FramedImage
            src="/assets/images/collection-2.webp"
            alt="Gold necklace close-up"
            className="rounded-arch image-shadow aspect-[0.78] w-full"
          />
        </div>
      </div>
    </section>
  );
}

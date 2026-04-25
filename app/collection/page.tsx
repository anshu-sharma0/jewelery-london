import Link from "next/link";
import { Copy, FramedImage, SectionHeading, TextArrowLink } from "@/components/ui";
import { business, collectionFilters, collectionItems } from "@/data/site";

export default function CollectionPage() {
  return (
    <main className="px-6 pb-16 pt-10 sm:px-10 lg:px-16 lg:pb-24 lg:pt-14">
      <section className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <p className="text-[13px] font-semibold uppercase tracking-[0.34em] text-[#6b6758]">Collection</p>
          <SectionHeading
            title={"Modern heirlooms\nwith editorial calm"}
            className="mt-4 max-w-[520px] whitespace-pre-line text-[50px] sm:text-[68px]"
          />
          <Copy className="mt-8 max-w-[490px] text-[17px] leading-9 text-[#373737]">
            {business.description} Explore refined silhouettes, luminous surfaces, and timeless pieces designed for
            everyday elegance.
          </Copy>

          <div className="soft-card mt-10 rounded-[34px] p-6 sm:p-8">
            <div className="space-y-7">
              {Object.entries(collectionFilters).map(([key, values]) => (
                <div key={key}>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#6e6a5b]">
                    {key}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {values.map((value, index) => (
                      <button
                        key={value}
                        type="button"
                        className={`rounded-full border px-4 py-2 text-[13px] transition-all duration-300 ${
                          index === 0
                            ? "border-[#171717] bg-[#171717] text-white"
                            : "border-[var(--line)] bg-white/70 text-[#343434] hover:-translate-y-0.5 hover:bg-[var(--accent-2)]"
                        }`}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="section-line my-8" />
            <p className="text-[14px] leading-8 text-[#444]">
              Private styling appointments are available for bridal edits, gifting moments, and signature everyday
              stacks.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-[#171717] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Book Appointment
            </Link>
          </div>
        </div>

        <div>
          <div className="mb-10 grid gap-6 sm:grid-cols-2">
            {collectionItems.slice(0, 2).map((item, index) => (
              <div key={item.title} className={index === 0 ? "sm:pt-12" : ""}>
                <div className="group rounded-[34px] bg-white/70 p-4 shadow-[0_18px_40px_rgba(16,15,10,0.05)]">
                  <div className="relative overflow-hidden rounded-[28px]">
                    <FramedImage
                      src={item.image}
                      alt={item.title}
                      className="aspect-[0.84] w-full rounded-[28px]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-x-5 bottom-5 flex translate-y-5 items-center justify-between rounded-full bg-white/90 px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#171717] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span>Quick View</span>
                      <span>{item.category}</span>
                    </div>
                  </div>
                  <div className="px-2 pb-2 pt-5">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h2 className="display text-[30px] leading-none text-[#171717]">{item.title}</h2>
                        <p className="mt-3 text-[14px] leading-7 text-[#575757]">{item.accent}</p>
                      </div>
                      <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#171717]">{item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {collectionItems.slice(2).map((item) => (
              <article key={item.title} className="group rounded-[34px] bg-white/60 p-4 shadow-[0_18px_40px_rgba(16,15,10,0.05)] transition-transform duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-[28px]">
                  <FramedImage
                    src={item.image}
                    alt={item.title}
                    className="aspect-[0.88] w-full rounded-[28px]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#171717]">
                    {item.category}
                  </div>
                </div>
                <div className="px-2 pb-2 pt-5">
                  <div className="flex items-start justify-between gap-5">
                    <h3 className="display text-[28px] leading-none text-[#171717]">{item.title}</h3>
                    <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#171717]">{item.price}</p>
                  </div>
                  <p className="mt-3 text-[14px] leading-7 text-[#575757]">{item.accent}</p>
                </div>
              </article>
            ))}
          </div>

          <TextArrowLink href="/about" label="Discover Our Story" className="mt-12" />
        </div>
      </section>
    </main>
  );
}

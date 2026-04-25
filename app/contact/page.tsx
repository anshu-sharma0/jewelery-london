import { Copy, FramedImage, PillArrowButton, SectionHeading } from "@/components/ui";
import { business, contactHighlights } from "@/data/site";

export default function ContactPage() {
  return (
    <main>
      <section className="px-6 pb-10 pt-10 sm:px-10 lg:px-16 lg:pb-14 lg:pt-14">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.34em] text-[#6b6758]">Contact</p>
            <SectionHeading
              title={"Let's begin\nsomething beautiful"}
              className="mt-4 max-w-[540px] whitespace-pre-line text-[52px] sm:text-[72px]"
            />
            <Copy className="mt-8 max-w-[520px] text-[17px] leading-9 text-[#333]">
              Reach out for private appointments, gifting guidance, custom enquiries, or an in-studio styling session.
            </Copy>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {contactHighlights.map((item) => (
                <div key={item.label} className="soft-card rounded-[28px] px-5 py-5">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#6b6758]">{item.label}</p>
                  <p className="mt-3 text-[15px] leading-8 text-[#343434]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-card rounded-[36px] p-5 sm:p-7">
            <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
              <form className="space-y-5">
                <label className="block">
                  <span className="mb-3 block text-[12px] font-semibold uppercase tracking-[0.28em] text-[#6b6758]">Name</span>
                  <input type="text" name="name" placeholder="Your full name" className="field-input" />
                </label>
                <label className="block">
                  <span className="mb-3 block text-[12px] font-semibold uppercase tracking-[0.28em] text-[#6b6758]">
                    Phone Number
                  </span>
                  <input type="tel" name="phone" placeholder="+91 00000 00000" className="field-input" />
                </label>
                <label className="block">
                  <span className="mb-3 block text-[12px] font-semibold uppercase tracking-[0.28em] text-[#6b6758]">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell us about your requirement, event, or the piece you have in mind."
                    className="field-input min-h-40 resize-none"
                  />
                </label>
                <PillArrowButton href="/contact" label="Send Enquiry" invert />
              </form>

              <div className="space-y-5">
                <FramedImage
                  src="/assets/images/cta.webp"
                  alt="Jewellery portrait"
                  className="rounded-arch image-shadow aspect-[0.88] w-full"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="overflow-hidden rounded-[30px] border border-[var(--line)] bg-white">
                  <iframe
                    title={`${business.name} map`}
                    src={business.mapEmbedUrl}
                    className="h-[260px] w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

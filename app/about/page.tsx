import { Copy, FramedImage, PillArrowButton, SectionHeading, TextArrowLink } from "@/components/ui";
import { aboutSections, brandStory } from "@/data/site";

export default function AboutPage() {
  return (
    <main>
      <section className="px-6 pb-10 pt-10 sm:px-10 lg:px-16 lg:pb-14 lg:pt-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.08fr] lg:items-center">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.34em] text-[#6b6758]">{brandStory.eyebrow}</p>
            <SectionHeading
              title={"Crafted with emotion,\nshaped with restraint"}
              className="mt-4 max-w-[590px] whitespace-pre-line text-[52px] sm:text-[72px]"
            />
            <Copy className="mt-8 max-w-[560px] text-[17px] leading-9 text-[#303030]">{brandStory.intro}</Copy>

            <div className="mt-10 space-y-4">
              {brandStory.values.map((value) => (
                <div key={value} className="soft-card rounded-[28px] px-6 py-5 text-[15px] leading-8 text-[#343434]">
                  {value}
                </div>
              ))}
            </div>

            <PillArrowButton href="/contact" label="Book Consultation" className="mt-10" invert />
          </div>

          <div className="relative mx-auto flex w-full max-w-[560px] items-end justify-center lg:justify-end">
            <FramedImage
              src="/assets/images/story-left.webp"
              alt="Jewellery portrait"
              className="rounded-arch-left image-shadow relative z-10 aspect-[0.78] w-[260px] sm:w-[320px]"
              priority
            />
            <FramedImage
              src="/assets/images/hero-main.webp"
              alt="Editorial jewellery styling"
              className="rounded-arch-right image-shadow ml-[-44px] aspect-[0.9] w-[280px] sm:w-[350px]"
              priority
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-12 sm:px-10 lg:px-16 lg:py-18">
        <div className="grid gap-10">
          {aboutSections.map((section) => {
            const isLeft = section.imagePosition === "left";

            return (
              <div key={section.title} className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
                <div className={isLeft ? "lg:order-1" : "lg:order-2"}>
                  <FramedImage
                    src={section.image}
                    alt={section.title}
                    className={`${isLeft ? "rounded-arch-left" : "rounded-arch-right"} image-shadow aspect-[0.82] w-full`}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className={isLeft ? "lg:order-2" : "lg:order-1"}>
                  <SectionHeading title={section.title} className="max-w-[580px] text-[46px] sm:text-[62px]" />
                  <Copy className="mt-7 max-w-[560px] text-[16px] leading-9">{section.body}</Copy>
                  <TextArrowLink href="/collection" label="Explore Collection" className="mt-9" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

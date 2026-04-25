import { Copy, FramedImage, SectionHeading, TextArrowLink } from "@/components/ui";

export function StorySection() {
  return (
    <section id="about" className="px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.12fr]">
        <div className="relative mx-auto flex w-full max-w-[520px] items-end justify-center lg:mx-0 lg:justify-start">
          <FramedImage
            src="/assets/images/story-left.webp"
            alt="Model wearing pearl jewellery"
            className="rounded-arch-left image-shadow relative z-10 aspect-[0.72] w-[250px] sm:w-[300px]"
          />
          <FramedImage
            src="/assets/images/story-right.webp"
            alt="Model portrait with floral jewellery styling"
            className="rounded-arch image-shadow ml-[-40px] aspect-[0.78] w-[260px] sm:w-[310px]"
          />
        </div>

        <div className="max-w-[640px]">
          <SectionHeading
            title={"Jewelry that balances\nmodern taste and timeless grace"}
            className="max-w-[620px] whitespace-pre-line text-[48px] leading-[0.95] sm:text-[64px]"
          />
          <Copy className="mt-8">
            We shape every piece with a calm editorial sensibility, using elegant curves, polished finishes, and details
            that feel as considered as couture.
          </Copy>
          <Copy className="mt-6">
            The result is a collection that wears beautifully every day while still carrying the emotional weight of a
            future heirloom.
          </Copy>
          <TextArrowLink href="/collection" label="Explore Collection" className="mt-10" />
        </div>
      </div>
    </section>
  );
}

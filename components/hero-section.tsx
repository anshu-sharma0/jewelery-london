import { Copy, FramedImage, SectionHeading, TextArrowLink } from "@/components/ui";

const avatarImages = [
  "/assets/images/avatar-1.webp",
  "/assets/images/avatar-2.webp",
  "/assets/images/avatar-3.webp"
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-14 pt-10 sm:px-10 lg:px-16 lg:pb-20 lg:pt-14">
      <div className="pointer-events-none absolute inset-x-[8%] top-0 h-px bg-gradient-to-r from-transparent via-[#cdbd8f] to-transparent" />
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1.1fr_0.95fr] lg:items-start">
        <div className="space-y-8 lg:pt-16">
          <SectionHeading title={"Modern Heirlooms\nfor Everyday Elegance"} className="max-w-[420px] whitespace-pre-line" />
          <FramedImage
            src="/assets/images/hero-hand.webp"
            alt="Hand wearing a square ring"
            className="rounded-arch-right image-shadow mx-auto aspect-[0.72] w-[210px] sm:mx-0 sm:w-[255px]"
            priority
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="outline-sweep relative w-full max-w-[420px]">
            <FramedImage
              src="/assets/images/hero-main.webp"
              alt="Jewellery portrait"
              className="rounded-arch-right image-shadow aspect-[0.72] w-full"
              priority
            />
            <span className="absolute right-[-12px] top-[22%] text-[34px] leading-none text-[#1a1a1a]">*</span>
            <div className="absolute bottom-7 left-[-40px] flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-[0_12px_26px_rgba(0,0,0,0.08)]">
              <div className="circle-text absolute inset-0 rounded-full border border-dashed border-[#1c1c1c]/45" />
              <div className="absolute inset-[10px] rounded-full bg-white" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="ml-1 size-0 border-y-[10px] border-l-[14px] border-y-transparent border-l-[#151515]" />
              </div>
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
                <defs>
                  <path id="circlePath" d="M50,50 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0" />
                </defs>
                <text className="fill-[#1a1a1a] text-[8px] font-semibold uppercase tracking-[3px]">
                  <textPath href="#circlePath" startOffset="0%">
                    Watch Brand Film - Watch Brand Film -
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
          <TextArrowLink href="/collection" label="Explore Signature Collection" className="mt-10 self-start sm:ml-6" />
        </div>

        <div className="space-y-8 lg:pt-4">
          <FramedImage
            src="/assets/images/hero-bracelet.webp"
            alt="Pearl bracelet close-up"
            className="rounded-arch image-shadow ml-auto aspect-[0.7] w-[210px] sm:w-[250px]"
            priority
          />
          <SectionHeading
            title={"Fine Jewellery\nCurated for\nModern Icons"}
            className="max-w-[330px] whitespace-pre-line text-center text-[52px] leading-[0.95] sm:text-left sm:text-[68px] lg:ml-2"
          />
        </div>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.72fr_0.72fr] lg:items-center lg:gap-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="flex shrink-0 -space-x-4">
            {avatarImages.map((src, index) => (
              <div
                key={src}
                className="relative size-20 overflow-hidden rounded-full border-[4px] border-[#fffdfa] bg-[#efe8de] shadow-[0_10px_26px_rgba(0,0,0,0.08)]"
                style={{ zIndex: avatarImages.length - index }}
              >
                <FramedImage src={src} alt={`Client avatar ${index + 1}`} className="size-full rounded-full" sizes="80px" />
              </div>
            ))}
          </div>
          <Copy className="max-w-[470px] text-[18px] leading-9 text-[#272727]">
            Discover sculptural rings, luminous necklaces, and investment-worthy essentials designed with refined
            silhouettes, precious materials, and effortless sophistication.
          </Copy>
        </div>

        <Stat value="1.5K+" label="Private Consultations" />
        <Stat value="2.0K+" label="Signature Pieces" />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-[var(--line)] pt-6 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
      <div className="text-[42px] font-extrabold tracking-tight text-[#141414] sm:text-[52px]">{value}</div>
      <div className="display mt-2 text-[18px] text-[#333] sm:text-[21px]">{label}</div>
    </div>
  );
}

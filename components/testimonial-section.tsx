"use client";

import { useEffect, useState } from "react";
import { Copy, SectionHeading } from "@/components/ui";

const testimonials = [
  {
    name: "Ananya Singh",
    city: "Kolkata",
    title: "Amazing Piece Of History",
    quote:
      "I bought this pendant from Aurelia House and I am very happy with both quality and pricing. Delivery was right on time and packaging felt truly premium.",
    rating: 5
  },
  {
    name: "Ranjana Shrivastav",
    city: "Mumbai",
    title: "Fabulous Craftsmanship",
    quote:
      "The designer jewellery is genuinely beautiful. I purchased a pair of diamond earrings and I am completely satisfied with the finish, shine, and overall experience.",
    rating: 5
  },
  {
    name: "Shweta Tripathi",
    city: "Delhi",
    title: "Great Service Experience",
    quote:
      "I needed an urgent gift delivery and the team handled it within hours. Smooth coordination, elegant packaging, and the ring looked even better in person.",
    rating: 5
  },
  {
    name: "Aisha Mehra",
    city: "Bengaluru",
    title: "Loved The Bridal Edit",
    quote:
      "I wanted a modern bridal set that did not feel heavy. Their styling recommendations were spot on and I can keep wearing those pieces long after the wedding.",
    rating: 5
  }
];

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => setActiveIndex((value) => (value + 1) % testimonials.length);
  const goPrev = () => setActiveIndex((value) => (value - 1 + testimonials.length) % testimonials.length);

  const visibleCards = [0, 1, 2].map((offset) => testimonials[(activeIndex + offset) % testimonials.length]);

  useEffect(() => {
    const timer = window.setInterval(goNext, 5500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="testimonial" className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[760px] text-center">
        <SectionHeading title="Customer Reviews" className="text-[50px] sm:text-[62px]" />
        <p className="mt-5 text-[14px] uppercase tracking-[0.24em] text-[#6e6755]">A note from our buyers</p>
      </div>

      <div className="mx-auto mt-14 max-w-[1180px]">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleCards.map((item) => (
            <article
              key={`${item.name}-${item.title}`}
              className="soft-card rounded-[30px] border border-[#171717]/12 bg-white/72 p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center text-[#b79652]" aria-label={`${item.rating} out of 5 stars`}>
                {[...Array(item.rating)].map((_, index) => (
                  <span key={`${item.name}-${index}`} className="text-[18px] leading-none">
                    ★
                  </span>
                ))}
              </div>

              <h3 className="display mt-4 text-center text-[34px] leading-[0.95] text-[#151515]">{item.title}</h3>

              <div className="mt-5 rounded-[22px] border border-[#171717]/10 bg-white/75 p-5">
                <Copy className="text-center text-[15px] leading-8 text-[#34302a]">{item.quote}</Copy>
              </div>

              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-full border border-[#1a1a1a]/20 bg-[#f7f2e4] text-[11px] font-bold uppercase tracking-[0.12em] text-[#1d1b16]">
                  {item.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <div className="text-center">
                  <p className="text-[15px] font-bold text-[#181612]">{item.name}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6b6557]">{item.city}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={goPrev}
            className="flex size-12 items-center justify-center rounded-full border border-[#1a1a1a] text-[#1a1a1a] transition-transform duration-300 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.6">
              <path d="M21 12H3" />
              <path d="M11 5l-7 7 7 7" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-12 bg-[#171717]" : "w-5 bg-[#d7d4cb]"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={goNext}
            className="flex size-14 items-center justify-center rounded-full bg-[#1a1a1a] text-white transition-transform duration-300 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.6">
              <path d="M3 12h18" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="section-line mt-8" />

        <p className="mt-6 text-center text-[12px] uppercase tracking-[0.22em] text-[#7a7363]">
          Trusted by modern jewellery collectors across India
        </p>
      </div>
    </section>
  );
}

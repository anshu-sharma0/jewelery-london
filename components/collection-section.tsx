"use client";

import { useMemo, useState } from "react";
import { FramedImage, TextArrowLink } from "@/components/ui";
import { collectionItems } from "@/data/site";

const categories = ["All Pieces", "Necklaces", "Bracelets", "Rings", "Earrings"];

export function CollectionSection() {
  const [activeCategory, setActiveCategory] = useState("All Pieces");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All Pieces") {
      return collectionItems;
    }
    return collectionItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="collection" className="px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.15fr] lg:items-start">
        <div className="max-w-[500px] lg:sticky lg:top-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6d6858]">Signature Edit</p>
          <h2 className="display mt-4 text-[52px] leading-[0.93] text-[#151515] sm:text-[70px]">The Signature Collection</h2>
          <p className="mt-7 text-[16px] leading-8 text-[#38342d]">
            Curated silhouettes for day-to-night wear, balancing softness, architectural lines, and luminous finishes.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                    isActive
                      ? "border-[#171717] bg-[#171717] text-white"
                      : "border-[#1b1b1b]/18 bg-white/75 text-[#26231d] hover:-translate-y-0.5"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="soft-card mt-8 rounded-[28px] p-6">
            <p className="text-[13px] leading-7 text-[#444037]">
              Every piece is designed in limited runs with private styling support for bridal, gifting, and personal
              signature edits.
            </p>
            <TextArrowLink href="/collection" label="View Full Collection" className="mt-7" />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {filteredItems.slice(0, 4).map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[30px] border border-[#1a1a1a]/10 bg-white/75 p-4 shadow-[0_18px_40px_rgba(17,15,10,0.06)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden rounded-[24px]">
                <FramedImage
                  src={item.image}
                  alt={item.title}
                  className="aspect-[0.88] w-full rounded-[24px]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#181818]">
                  {item.category}
                </div>
              </div>
              <div className="px-2 pb-2 pt-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="display text-[30px] leading-none text-[#141414]">{item.title}</h3>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#1a1a1a]">{item.price}</p>
                </div>
                <p className="mt-3 text-[14px] leading-7 text-[#5a554a]">{item.accent}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { business } from "@/data/site";

export function MapSection() {
  return (
    <section className="px-6 pb-20 pt-8 sm:px-10 lg:px-16 lg:pb-24 lg:pt-12">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#6a6556]">Visit The Studio</p>
          <h2 className="display mt-4 text-[44px] leading-[0.95] text-[#151515] sm:text-[62px]">
            Find Us In Kolkata
          </h2>
        </div>
        <div className="soft-card rounded-[22px] px-5 py-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6a6556]">Address</p>
          <p className="mt-2 max-w-[280px] text-[14px] leading-7 text-[#2a2823]">{business.address}</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-[32px] border border-[#1a1a1a]/12 bg-white/70 p-3 shadow-[0_22px_54px_rgba(17,15,10,0.08)] sm:p-4">
        <div className="overflow-hidden rounded-[26px]">
          <iframe
            title={`${business.name} location map`}
            src={business.mapEmbedUrl}
            className="h-[320px] w-full border-0 sm:h-[400px] lg:h-[480px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-5 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
      <div className="ambient-orb ambient-orb-left" />
      <div className="ambient-orb ambient-orb-right" />
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel relative overflow-hidden px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--accent)]">{eyebrow}</p>
            <h1 className="font-[family:var(--font-display)] text-4xl leading-[0.95] text-[var(--text)] sm:text-5xl lg:text-7xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[var(--text-soft)] sm:text-lg">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

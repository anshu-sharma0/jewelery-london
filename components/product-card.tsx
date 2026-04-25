import Image from "next/image";

type ProductCardProps = {
  title: string;
  price: string;
  category: string;
  image: string;
  accent: string;
};

export function ProductCard({ title, price, category, image, accent }: ProductCardProps) {
  return (
    <article className="group luxury-card overflow-hidden">
      <div className="relative aspect-[0.82] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute inset-x-4 bottom-4 translate-y-3 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          Quick View
        </div>
        <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-white backdrop-blur-md">
          {category}
        </div>
      </div>
      <div className="space-y-3 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-[family:var(--font-display)] text-2xl text-[var(--text)]">{title}</h2>
          <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">{price}</p>
        </div>
        <p className="text-sm leading-7 text-[var(--text-soft)]">{accent}</p>
      </div>
    </article>
  );
}

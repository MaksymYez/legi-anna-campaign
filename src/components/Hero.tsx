import { t, DISCOUNT } from "@/lib/content";
import Photo from "./Photo";
import { IconArrow, IconTag } from "./icons";

export default function Hero() {
  const h = t.hero;
  const pct = Math.round(DISCOUNT * 100);

  return (
    <section id="top" className="relative bg-white text-ink overflow-hidden">
      {/* light grey grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(33,30,30,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(33,30,30,.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* soft red corner glow */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96"
        style={{ background: "radial-gradient(circle, rgba(167,31,39,.08), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-24 pb-12 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28">
        <div className="grid md:grid-cols-2 md:grid-rows-[auto_auto] gap-x-10 lg:gap-x-12 gap-y-6 md:gap-y-7 items-start">
          {/* Headline (mobile: 1st · desktop: top-left) */}
          <div className="animate-fadeUp order-1 md:col-start-1 md:row-start-1">
            <span className="inline-flex items-center gap-2 border border-stone-200 bg-stone-50 px-3 py-1.5 text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider text-red">
              <span className="h-1.5 w-1.5 bg-red" />
              {h.badge}
            </span>

            <p className="mt-5 eyebrow text-stone-500">{h.eyebrow}</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-ink">
              {h.title}
            </h1>
            <div className="red-rule mt-4 w-24 sm:w-28" />
            <p className="mt-4 text-lg sm:text-2xl font-bold text-ink">{h.subtitle}</p>
          </div>

          {/* Photo (mobile: 2nd · desktop: full-height right column) */}
          <div className="relative animate-fadeUp [animation-delay:120ms] order-2 md:col-start-2 md:row-start-1 md:row-span-2 md:self-stretch">
            <div className="relative aspect-[4/5] md:aspect-auto md:h-full md:min-h-[640px] overflow-hidden shadow-lift ring-1 ring-stone-200">
              <Photo photo={h.photo} sizes="(max-width: 768px) 100vw, 50vw" priority position="50% 0%" />
              <div className="hidden md:block absolute bottom-4 left-4 bg-ink/80 backdrop-blur px-3 py-2 text-xs font-semibold text-white">
                {h.photoCaption}
              </div>

              {/* Mobile CTA — overlaps the bottom of the hero shot */}
              <a
                href="#pricing"
                className="md:hidden absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-red px-6 pt-4 pb-5 text-base font-bold uppercase tracking-wide text-white shadow-[0_-10px_30px_rgba(0,0,0,0.25)]"
              >
                <IconTag className="h-4 w-4" />
                {h.ctaSecondary}
              </a>
            </div>

            {/* discount chip */}
            <div className="absolute -top-5 -left-2 sm:-left-4 -rotate-3 bg-red px-5 py-3 text-center shadow-lift">
              <div className="font-latin text-4xl leading-none text-white">−{pct}%</div>
              <div className="mt-1 text-xs font-bold text-white/90">{h.discountChip}</div>
            </div>
          </div>

          {/* Details (mobile: 3rd · desktop: bottom-left) */}
          <div className="animate-fadeUp order-3 md:col-start-1 md:row-start-2">
            <p className="max-w-lg text-base sm:text-lg text-stone-600 leading-relaxed">{h.lead}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-red px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-bold uppercase tracking-wide text-white shadow-lift hover:bg-red-dark transition-colors"
              >
                {h.ctaPrimary}
                <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#pricing"
                className="hidden md:inline-flex items-center gap-2 border border-stone-300 px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base font-bold uppercase tracking-wide text-ink hover:border-ink hover:bg-stone-50 transition-colors"
              >
                <IconTag className="h-4 w-4 text-red" />
                {h.ctaSecondary}
              </a>
            </div>

            {/* the three pavers at a glance */}
            <ul className="mt-8 flex max-w-md flex-wrap gap-x-5 gap-y-2 border-t border-stone-200 pt-6 text-sm font-semibold text-stone-600">
              {t.pricing.products.map((p) => (
                <li key={p.name} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-red" aria-hidden />
                  {p.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

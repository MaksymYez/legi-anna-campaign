import { t, DISCOUNT, discounted, formatPrice } from "@/lib/content";
import Photo from "./Photo";
import { IconArrow, IconCheck, IconClock } from "./icons";

export default function Pricing() {
  const p = t.pricing;
  const pct = Math.round(DISCOUNT * 100);

  return (
    <section id="pricing" className="bg-stone-50 py-14 sm:py-20 lg:py-28 border-y border-stone-200">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-red">{p.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            {p.title}
          </h2>
          <p className="mt-4 text-stone-600 leading-relaxed">{p.text}</p>
        </div>

        {/* Limited-time promotion banner */}
        <div className="mt-6 flex items-center gap-3 bg-gradient-to-r from-red to-red-dark px-5 py-3.5 text-white shadow-lift ring-1 ring-red-dark/20 sm:gap-3.5">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-white animate-livePulse" aria-hidden />
          <IconClock className="h-5 w-5 shrink-0" />
          <p className="text-sm font-bold leading-snug tracking-tight sm:text-base">{p.promoNote}</p>
        </div>

        <div id="products" className="mt-10 grid gap-5 md:grid-cols-3 scroll-mt-20">
          {p.products.map((prod) => {
            const save = formatPrice(prod.regular * DISCOUNT);
            return (
              <article
                key={prod.name}
                className="group flex flex-col border border-stone-200 bg-white shadow-soft transition-all hover:-translate-y-0.5 hover:border-red/40 hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Photo photo={prod.photo} sizes="(max-width: 768px) 100vw, 33vw" />
                  <span className="absolute top-3 right-3 bg-red px-3 py-1.5 font-latin text-lg leading-none text-white shadow-lift">
                    −{pct}%
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-extrabold text-ink">
                    {prod.name} <span className="text-stone-400">·</span> {prod.color}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-stone-500">{prod.spec}</p>
                  <p className="mt-3 text-sm leading-relaxed text-stone-500">{prod.text}</p>

                  <div className="mt-auto pt-6">
                    <div className="grid grid-cols-2 gap-3 border-t border-stone-200 pt-5">
                      <div>
                        <div className="text-[0.7rem] font-semibold uppercase tracking-wide text-stone-500">
                          {p.regular}
                        </div>
                        <div className="mt-1.5 text-stone-400">
                          <s className="text-xl font-bold decoration-red decoration-2">{formatPrice(prod.regular)}</s>
                          <span className="ml-1 text-xs">{p.unit}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-[0.7rem] font-semibold uppercase tracking-wide text-red">
                          {p.campaign}
                        </div>
                        <div className="mt-1">
                          <span className="text-3xl font-extrabold text-ink">{discounted(prod.regular)}</span>
                          <span className="ml-1 text-xs text-stone-500">{p.unit}</span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-red">
                      {p.save} {save} {p.unit}
                    </p>

                    <a
                      href="#contact"
                      className="mt-5 flex items-center justify-center gap-1.5 bg-ink px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-red"
                    >
                      {p.cta}
                      <IconArrow className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6 flex items-start gap-2 text-sm text-stone-500">
          <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-red" />
          {p.note}
        </p>
      </div>
    </section>
  );
}

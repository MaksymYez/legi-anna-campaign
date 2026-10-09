import { t } from "@/lib/content";
import Photo from "./Photo";
import { IconArrow, IconCheck, IconClock, IconFlame } from "./icons";

export default function FirePit() {
  const f = t.firepit;
  const [main, alt] = f.photos;
  const { price } = f;
  const pct = Math.round((1 - price.campaign / price.regular) * 100);
  const save = price.regular - price.campaign;

  return (
    <section id="firepit" className="bg-concrete text-white py-14 sm:py-20 lg:py-28 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-center">
          {/* Photos: large warm-tone shot + smaller grey variant overlapping its corner */}
          <div className="relative lg:col-span-6 sm:pr-16 sm:pb-16">
            <div className="relative aspect-[4/5] overflow-hidden ring-1 ring-white/10 shadow-lift">
              <Photo photo={main} sizes="(max-width: 1024px) 100vw, 50vw" tone="dark" position={main.position} />
              <div className="absolute bottom-4 left-4 bg-ink/80 backdrop-blur px-3 py-2 text-xs font-semibold text-white">
                {main.caption}
              </div>
            </div>

            <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden ring-1 ring-white/10 shadow-lift sm:absolute sm:bottom-0 sm:right-0 sm:mt-0 sm:w-[46%] sm:ring-4 sm:ring-ink">
              <Photo photo={alt} sizes="(max-width: 640px) 100vw, 25vw" tone="dark" position={alt.position} />
              <div className="absolute bottom-3 left-3 bg-ink/80 backdrop-blur px-2.5 py-1.5 text-[0.7rem] font-semibold text-white">
                {alt.caption}
              </div>
            </div>

            {/* flame badge */}
            <div className="absolute -top-5 -left-2 sm:-left-4 -rotate-3 flex h-16 w-16 items-center justify-center bg-red text-white shadow-lift">
              <IconFlame className="h-8 w-8" />
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-6">
            <p className="eyebrow text-red-light">{f.eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
              {f.title}
            </h2>
            <div className="red-rule mt-4 w-24" />
            <p className="mt-5 max-w-lg text-stone-300 leading-relaxed">{f.text}</p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {f.points.map((pt, i) => (
                <li key={pt.title} className="flex gap-4 border-l-2 border-red pl-4">
                  <span className="font-latin text-2xl leading-none text-red-light">0{i + 1}</span>
                  <div>
                    <h3 className="font-extrabold">{pt.title}</h3>
                    <p className="mt-1 text-sm text-stone-300 leading-relaxed">{pt.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Price card */}
            <div className="relative mt-8 max-w-md bg-white text-ink shadow-lift">
              <span className="absolute -top-4 right-4 bg-red px-3 py-1.5 font-latin text-xl leading-none text-white shadow-lift">
                −{pct}%
              </span>
              <div className="p-6">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red">
                  <IconClock className="h-4 w-4" />
                  {price.limited}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 border-t border-stone-200 pt-4">
                  <div>
                    <div className="text-[0.7rem] font-semibold uppercase tracking-wide text-stone-500">
                      {price.regularLabel}
                    </div>
                    <div className="mt-1.5 text-stone-400">
                      <s className="text-xl font-bold decoration-red decoration-2">{price.regular}</s>
                      <span className="ml-1 text-xs">{price.unit}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[0.7rem] font-semibold uppercase tracking-wide text-red">
                      {price.campaignLabel}
                    </div>
                    <div className="mt-1">
                      <span className="text-3xl font-extrabold text-ink">{price.campaign}</span>
                      <span className="ml-1 text-sm text-stone-500">{price.unit}</span>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm font-semibold text-red">
                  {price.save} {save} {price.unit}
                </p>
                <p className="mt-3 flex items-start gap-2 text-sm text-stone-500">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-red" />
                  {price.includes}
                </p>
                <a
                  href="#contact"
                  className="group mt-5 flex items-center justify-center gap-2 bg-red px-5 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-dark"
                >
                  {price.cta}
                  <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

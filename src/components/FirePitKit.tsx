import { t } from "@/lib/content";
import KitVideo from "./KitVideo";
import { IconArrow, IconCheck } from "./icons";

export default function FirePitKit() {
  const k = t.kit;

  return (
    <section id="kit" className="bg-white py-14 sm:py-20 lg:py-28 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Mobile: intro → video → parts. Desktop: copy left, video spanning both rows on the right. */}
        <div className="grid gap-8 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-x-14 lg:gap-y-8">
          <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
            <p className="eyebrow text-red">{k.eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
              {k.title}
            </h2>
            <div className="red-rule mt-4 w-24" />
            <p className="mt-5 max-w-xl text-stone-600 leading-relaxed">{k.text}</p>
          </div>

          {/* Exploded-view animation (portrait) */}
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 lg:self-center">
            <KitVideo
              src={k.video.src}
              poster={k.video.poster}
              label={k.video.label}
              caption={k.video.caption}
              playLabel={k.video.play}
              replayLabel={k.video.replay}
            />
          </div>

          <div className="lg:col-span-7 lg:col-start-1 lg:row-start-2">
            <ol className="grid gap-5 sm:grid-cols-2">
              {k.parts.map((part, i) => (
                <li key={part.title} className="flex flex-col border border-stone-200 bg-stone-50 p-6 shadow-soft">
                  <span className="font-latin text-2xl leading-none text-red">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-extrabold text-ink">{part.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-500">{part.text}</p>
                  <ul className="mt-4 flex flex-wrap gap-2 border-t border-stone-200 pt-4">
                    {part.specs.map((spec) => (
                      <li
                        key={spec}
                        className="bg-white px-2.5 py-1 text-xs font-bold text-ink ring-1 ring-stone-200"
                      >
                        {spec}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            <p className="mt-6 flex items-start gap-2 text-sm font-semibold text-stone-600">
              <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-red" />
              {k.includes}
            </p>

            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 bg-red px-6 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-dark"
            >
              {k.cta}
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { t } from "@/lib/content";
import GalleryGrid from "./GalleryGrid";

export default function Gallery() {
  const g = t.gallery;

  return (
    <section id="ana" className="bg-stone-50 py-10 sm:py-20 lg:py-28 border-b border-stone-200">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-red">{g.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            {g.title}
          </h2>
          <p className="mt-4 text-stone-600 leading-relaxed">{g.text}</p>
        </div>

        <GalleryGrid photos={g.photos} labels={g.lightbox} />
      </div>
    </section>
  );
}

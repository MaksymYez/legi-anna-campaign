import { t } from "@/lib/content";
import Photo from "./Photo";

export default function Gallery() {
  const g = t.gallery;

  return (
    <section id="ana" className="bg-stone-50 py-14 sm:py-20 lg:py-28 border-b border-stone-200">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-red">{g.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            {g.title}
          </h2>
          <p className="mt-4 text-stone-600 leading-relaxed">{g.text}</p>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
          {g.photos.map((photo, i) => (
            <li
              key={photo.src}
              className={`relative overflow-hidden shadow-soft ring-1 ring-stone-200 ${
                photo.landscape ? "aspect-[4/3]" : "aspect-[3/4]"
              } ${i === 0 || i === g.photos.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <Photo
                photo={photo}
                sizes="(max-width: 640px) 100vw, (max-width: 1152px) 33vw, 384px"
                position={photo.position}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

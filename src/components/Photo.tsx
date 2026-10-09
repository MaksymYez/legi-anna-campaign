import Image from "next/image";
import type { Photo as PhotoData } from "@/lib/content";

/**
 * Fills its (relatively positioned) parent. Renders the real photo when `src`
 * is set, otherwise a labelled placeholder so layout can be reviewed first.
 */
export default function Photo({
  photo,
  sizes,
  priority = false,
  tone = "light",
  position,
}: {
  photo: PhotoData;
  sizes: string;
  priority?: boolean;
  tone?: "light" | "dark";
  /** CSS object-position for the cover crop, e.g. "50% 20%" to favour the top. */
  position?: string;
}) {
  if (photo.src) {
    return (
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
        style={position ? { objectPosition: position } : undefined}
        draggable={false}
      />
    );
  }

  const dark = tone === "dark";
  return (
    <div
      role="img"
      aria-label={photo.alt}
      className={`absolute inset-0 flex items-center justify-center ${
        dark ? "bg-stone-600 text-white/70" : "bg-stone-200 text-stone-500"
      }`}
      style={{
        backgroundImage: `repeating-linear-gradient(-45deg, ${
          dark ? "rgba(255,255,255,.05)" : "rgba(33,30,30,.045)"
        } 0 14px, transparent 14px 28px)`,
      }}
    >
      <span className="flex flex-col items-center gap-2 px-4 text-center">
        <svg className="h-8 w-8 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="1" />
          <circle cx="8.5" cy="10" r="1.6" />
          <path d="M21 16l-5-5-9 8" />
        </svg>
        <span className="text-xs font-semibold uppercase tracking-wider">{photo.alt}</span>
      </span>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { t } from "@/lib/content";
import Photo from "./Photo";
import { IconClose } from "./icons";

type GalleryPhoto = (typeof t.gallery.photos)[number];

/**
 * Gallery tiles that open a full-screen lightbox on tap, with previous/next,
 * swipe and keyboard navigation.
 */
export default function GalleryGrid({
  photos,
  labels,
}: {
  photos: GalleryPhoto[];
  labels: { open: string; close: string; prev: string; next: string };
}) {
  const [active, setActive] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);
  const count = photos.length;

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((i) => (i === null ? i : (i + dir + count) % count)),
    [count],
  );

  // Keyboard navigation and scroll lock while open
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active, close, step]);

  const photo = active === null ? null : photos[active];

  return (
    <>
      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
        {photos.map((p, i) => (
          <li
            key={p.src}
            className={`relative overflow-hidden shadow-soft ring-1 ring-stone-200 ${
              p.landscape
                ? "aspect-square sm:aspect-[4/3]"
                : "aspect-square sm:aspect-[3/4]"
            }`}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${labels.open}: ${p.alt}`}
              className="group absolute inset-0 cursor-zoom-in"
            >
              <Photo
                photo={p}
                sizes="(max-width: 640px) 50vw, (max-width: 1152px) 33vw, 384px"
                position={p.position}
              />
              <span className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/10" />
            </button>
          </li>
        ))}
      </ul>

      {photo && photo.src && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={photo.alt}
          className="fixed inset-0 z-[100] flex flex-col bg-ink/95 text-white"
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
          }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-3 text-sm font-semibold">
            <span className="font-latin text-base">
              {active! + 1} / {count}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label={labels.close}
              className="flex h-10 w-10 items-center justify-center bg-white/10 transition-colors hover:bg-red"
            >
              <IconClose className="h-5 w-5" />
            </button>
          </div>

          {/* Photo */}
          <div className="relative flex-1" onClick={(e) => e.stopPropagation()}>
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="100vw"
              className="object-contain"
              draggable={false}
              priority
            />
          </div>

          {/* Caption + prev/next */}
          <div className="flex items-center justify-between gap-3 px-4 py-3">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label={labels.prev}
              className="flex h-11 w-11 shrink-0 items-center justify-center bg-white/10 transition-colors hover:bg-red"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <p className="min-w-0 flex-1 truncate text-center text-xs text-stone-300 sm:text-sm">
              {photo.alt}
            </p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label={labels.next}
              className="flex h-11 w-11 shrink-0 items-center justify-center bg-white/10 transition-colors hover:bg-red"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

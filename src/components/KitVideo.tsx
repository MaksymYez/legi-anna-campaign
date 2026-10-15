"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { IconPlay, IconReplay } from "./icons";

type State = "idle" | "playing" | "ended";

const REDUCED = "(prefers-reduced-motion: reduce)";
const subscribeReduced = (cb: () => void) => {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const usePrefersReducedMotion = () =>
  useSyncExternalStore(subscribeReduced, () => window.matchMedia(REDUCED).matches, () => false);

/**
 * Muted product animation that plays once when scrolled into view and then
 * holds its last frame (the dimensioned exploded view), with a replay button.
 * Visitors who prefer reduced motion get the poster and a play button instead.
 */
export default function KitVideo({
  src,
  poster,
  label,
  caption,
  playLabel,
  replayLabel,
}: {
  src: string;
  poster: string;
  label: string;
  caption: string;
  playLabel: string;
  replayLabel: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<State>("idle");
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const video = ref.current;
    if (!video || reducedMotion) return;

    // Start the one-off playback the first time the video is on screen.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        play();
      },
      { threshold: 0.35 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [reducedMotion]);

  function play() {
    const video = ref.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().then(() => setState("playing")).catch(() => setState("idle"));
  }

  const showButton = state === "ended" || (state === "idle" && reducedMotion);

  return (
    <div className="mx-auto w-full max-w-[20rem] lg:max-w-none bg-white ring-1 ring-stone-200 shadow-lift">
      <video
        ref={ref}
        className="block aspect-[9/16] w-full object-cover"
        src={src}
        poster={poster}
        aria-label={label}
        muted
        playsInline
        preload="metadata"
        disablePictureInPicture
        onEnded={() => setState("ended")}
      />
      {/* Caption + replay strip, kept outside the frame so nothing covers the dimension labels */}
      <div className="flex min-h-12 items-center justify-between gap-3 bg-ink px-4 py-2 text-xs font-semibold text-white">
        <span>{caption}</span>
        {showButton && (
        <button
          type="button"
          onClick={play}
          className="group -mr-2 flex shrink-0 items-center gap-2 bg-red px-3 py-2 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-dark"
        >
          {state === "ended" ? (
            <IconReplay className="h-4 w-4 transition-transform group-hover:-rotate-45" />
          ) : (
            <IconPlay className="h-4 w-4" />
          )}
          {state === "ended" ? replayLabel : playLabel}
        </button>
        )}
      </div>
    </div>
  );
}

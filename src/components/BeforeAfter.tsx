"use client";

import { useRef, useState } from "react";
import { t } from "@/lib/content";
import Photo from "./Photo";

type Pair = (typeof t.transformation.pairs)[number];

export default function BeforeAfter() {
  const b = t.transformation;
  const [active, setActive] = useState(0);
  const pair = b.pairs[active];

  return (
    <section id="result" className="bg-white py-14 sm:py-20 lg:py-28 border-y border-stone-200">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-red">{b.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            {b.title}
          </h2>
          <p className="mt-4 text-stone-600 leading-relaxed">{b.text}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist">
          {b.pairs.map((p, i) => (
            <button
              key={p.label}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`px-4 py-2 text-sm font-bold uppercase tracking-wide transition-colors ${
                i === active
                  ? "bg-ink text-white"
                  : "border border-stone-300 text-stone-600 hover:border-red hover:text-red"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* key resets the handle to the middle when switching pairs */}
        <Slider key={active} pair={pair} />
      </div>
    </section>
  );
}

function Slider({ pair }: { pair: Pair }) {
  const b = t.transformation;
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);

  function moveTo(clientX: number) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }

  return (
    <div
      ref={ref}
      className="relative mt-5 aspect-[4/5] sm:aspect-[16/9] select-none overflow-hidden shadow-lift ring-1 ring-stone-200 touch-pan-y cursor-ew-resize"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        moveTo(e.clientX);
      }}
      onPointerMove={(e) => {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) moveTo(e.clientX);
      }}
    >
      {/* After = base layer; Before = clipped layer on top */}
      <Photo photo={pair.after} sizes="(max-width: 1152px) 100vw, 1152px" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Photo photo={pair.before} sizes="(max-width: 1152px) 100vw, 1152px" tone="dark" />
      </div>

      <span className="pointer-events-none absolute top-4 left-4 bg-ink/85 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
        {b.before}
      </span>
      <span className="pointer-events-none absolute top-4 right-4 bg-red px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
        {b.after}
      </span>

      {/* Divider + handle */}
      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,.35)]" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-red text-white shadow-lift">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </span>
      </div>

      {/* Keyboard / screen-reader control */}
      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`${b.before} / ${b.after} — ${pair.label}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0 pointer-events-none focus-visible:pointer-events-auto"
      />
    </div>
  );
}

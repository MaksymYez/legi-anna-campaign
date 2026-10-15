"use client";

import { useState } from "react";

/**
 * Collapses its children behind a "more" toggle on phones to keep long
 * sections short; from the `sm` breakpoint up the content is always shown.
 */
export default function MobileCollapse({
  moreLabel,
  lessLabel,
  className = "",
  children,
}: {
  moreLabel: string;
  lessLabel: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`${open ? "" : "hidden"} sm:block ${className}`}>{children}</div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-red sm:hidden"
      >
        {open ? lessLabel : moreLabel}
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </>
  );
}

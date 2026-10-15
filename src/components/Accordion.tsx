"use client";

import { useId, useState } from "react";

/**
 * Collapsible card: the heading row is the toggle, the body is hidden until
 * opened. Used for optional detail that should not lengthen the page.
 */
export default function Accordion({
  title,
  children,
  className = "",
  headerClassName = "p-6",
  bodyClassName = "px-6 pb-6",
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        className={`flex w-full items-center justify-between gap-4 text-left ${headerClassName}`}
      >
        {title}
        <svg
          className={`h-5 w-5 shrink-0 text-red transition-transform ${open ? "rotate-180" : ""}`}
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
      <div id={id} hidden={!open} className={bodyClassName}>
        {children}
      </div>
    </div>
  );
}

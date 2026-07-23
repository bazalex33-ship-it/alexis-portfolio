"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { spotmeDemo } from "@/data/portfolio";
import { SpotmeGrid } from "./SpotmeGrid";
import { SpotmeGuide } from "./SpotmeGuide";

/**
 * The interactive SpotMe demo shown inside the case study.
 *
 * The guide reads inline; the playable grid — the busiest part, with its
 * simulated users — opens on demand behind a button, so the case study stays
 * proportionate to the two projects below it.
 */
export function SpotmeDemo() {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    // Send focus back where it came from, as any dialog should.
    opener.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab") return;

      // Keep focus inside the dialog while it is open.
      const focusable = panel.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    panel.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <div className="rounded-2xl border border-[var(--line)] bg-[var(--background)] p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl">
        <p className="eyebrow">{spotmeDemo.eyebrow}</p>
        <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl leading-tight text-[var(--foreground)] sm:text-3xl">
          {spotmeDemo.title}
        </h3>
        <p className="mt-3 leading-relaxed text-[var(--muted)]">
          {spotmeDemo.intro}
        </p>
      </div>

      <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-[1fr_auto]">
        <SpotmeGuide />

        <div className="flex flex-col justify-center rounded-2xl border border-dashed border-[var(--line-strong)] p-6 text-center lg:w-[16rem]">
          <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--subtle)]">
            {spotmeDemo.tryHint}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            {spotmeDemo.grid.rule}
          </p>
          <button
            ref={opener}
            type="button"
            onClick={() => setOpen(true)}
            className="group mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[var(--accent)]"
          >
            {spotmeDemo.tryLabel}
            <svg
              viewBox="0 0 16 16"
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-[var(--subtle)]">
        {spotmeDemo.disclaimer}
      </p>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[var(--foreground)]/25 p-4 backdrop-blur-[3px]"
          onClick={close}
        >
          <div
            ref={panel}
            role="dialog"
            aria-modal="true"
            aria-label={spotmeDemo.grid.heading}
            tabIndex={-1}
            onClick={(event) => event.stopPropagation()}
            className="my-auto w-full max-w-md outline-none"
          >
            <div className="relative">
              <SpotmeGrid />
              <button
                type="button"
                onClick={close}
                aria-label={spotmeDemo.closeLabel}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--surface)] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5">
                  <path
                    d="M4 4l8 8M12 4l-8 8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

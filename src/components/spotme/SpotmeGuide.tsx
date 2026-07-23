"use client";

import { useState } from "react";
import { spotmeDemo } from "@/data/portfolio";
import { SPOT_COLOURS } from "./palette";

/**
 * The in-product guide, rebuilt for the portfolio: no animation library and no
 * icon package — CSS transitions and inline SVG only. Sits directly in the page
 * rather than in a modal, and advances on "Next".
 */

const C = SPOT_COLOURS;

/** Step 01 — an empty grid becomes a filled one. */
function ConceptVisual() {
  const filled: Record<number, string> = {
    0: C.violet,
    1: C.violet,
    3: C.blue,
    8: C.pink,
    9: C.pink,
    14: C.green,
    19: C.orange,
    20: C.orange,
    22: C.amber,
  };

  const frame = (cells: (i: number) => string | undefined, caption: string) => (
    <div className="flex flex-col items-center gap-2">
      <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--subtle)]">
        {caption}
      </span>
      <div
        className="grid gap-[2px] rounded-lg border border-[var(--line)] bg-[var(--surface)] p-1.5 sm:gap-[3px] sm:p-2"
        style={{ gridTemplateColumns: "repeat(6, 1fr)" }}
      >
        {Array.from({ length: 24 }, (_, i) => (
          <div
            key={i}
            className="h-[11px] w-[11px] rounded-[3px] sm:h-[15px] sm:w-[15px]"
            style={{ background: cells(i) ?? "var(--surface-muted)" }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      {frame(() => undefined, "Profile")}
      <svg
        viewBox="0 0 16 16"
        aria-hidden="true"
        className="h-3.5 w-3.5 shrink-0 text-[var(--subtle)]"
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
      {frame((i) => filled[i], "After")}
    </div>
  );
}

/** Step 02 — a limited allowance, mostly spent. */
function ScarcityVisual() {
  const spent = 5;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-1.5">
        {Array.from({ length: 8 }, (_, i) => (
          <span
            key={i}
            className="h-2.5 w-2.5 rounded-full"
            style={{
              background: i < spent ? "var(--line-strong)" : C.blue,
            }}
          />
        ))}
      </div>
      <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--subtle)]">
        limited · refills slowly
      </p>
      <div className="grid gap-[3px]" style={{ gridTemplateColumns: "repeat(6, 1fr)" }}>
        {Array.from({ length: 18 }, (_, i) => (
          <div
            key={i}
            className="h-[16px] w-[16px] rounded-[3px]"
            style={{
              background:
                i === 7
                  ? "var(--surface-muted)"
                  : [2, 9, 14].includes(i)
                    ? C.pink
                    : "var(--surface-muted)",
              boxShadow: i === 7 ? "inset 0 0 0 1.5px var(--accent)" : undefined,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/** Step 03 — a newer spot replacing an older one. */
function OverwriteVisual() {
  const frame = (highlight: boolean, caption: string) => (
    <div className="flex flex-col items-center gap-2">
      <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--subtle)]">
        {caption}
      </span>
      <div
        className="grid gap-[2px] rounded-lg border border-[var(--line)] bg-[var(--surface)] p-1.5 sm:gap-[3px] sm:p-2"
        style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
      >
        {Array.from({ length: 16 }, (_, i) => {
          const before: Record<number, string> = { 1: C.green, 5: C.green, 6: C.amber, 10: C.pink };
          const after: Record<number, string> = { ...before, 5: C.blue, 6: C.blue, 1: C.green };
          const map = highlight ? after : before;
          return (
            <div
              key={i}
              className="h-[14px] w-[14px] rounded-[3px] transition-colors sm:h-[17px] sm:w-[17px]"
              style={{
                background: map[i] ?? "var(--surface-muted)",
                boxShadow:
                  highlight && (i === 5 || i === 6)
                    ? "0 0 0 1.5px var(--accent)"
                    : undefined,
              }}
            />
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      {frame(false, "Before")}
      <svg
        viewBox="0 0 16 16"
        aria-hidden="true"
        className="h-3.5 w-3.5 shrink-0 text-[var(--subtle)]"
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
      {frame(true, "After")}
    </div>
  );
}

/** Step 04 — honest project status. */
function StatusVisual() {
  const milestones = [
    { label: "Concept & product design", done: true },
    { label: "Build & iteration", done: true },
    { label: "Public launch", done: false },
  ];

  return (
    <ol className="flex w-full max-w-[230px] flex-col gap-3">
      {milestones.map((milestone) => (
        <li key={milestone.label} className="flex items-center gap-3">
          <span
            className="h-2.5 w-2.5 shrink-0 rounded-full"
            style={{
              background: milestone.done ? C.blue : "transparent",
              boxShadow: milestone.done
                ? undefined
                : "inset 0 0 0 1.5px var(--line-strong)",
            }}
          />
          <span
            className={`text-xs ${
              milestone.done ? "text-[var(--foreground)]" : "text-[var(--subtle)]"
            }`}
          >
            {milestone.label}
          </span>
        </li>
      ))}
    </ol>
  );
}

const VISUALS = {
  concept: ConceptVisual,
  scarcity: ScarcityVisual,
  overwrite: OverwriteVisual,
  status: StatusVisual,
};

export function SpotmeGuide() {
  const { guide } = spotmeDemo;
  const [step, setStep] = useState(0);

  const current = guide.steps[step];
  const Visual = VISUALS[current.visual];
  const isLast = step === guide.steps.length - 1;

  return (
    <section
      aria-label={guide.heading}
      className="flex h-full flex-col rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-6"
    >
      <header className="flex items-baseline justify-between gap-4">
        <h4 className="text-sm font-semibold text-[var(--foreground)]">
          {guide.heading}
        </h4>
        <p className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--subtle)]">
          {guide.stepLabel} {step + 1}/{guide.steps.length}
        </p>
      </header>
      <p className="mt-1 text-sm text-[var(--muted)]">{guide.subheading}</p>

      {/* Visual area — fixed height so the card never jumps between steps. */}
      <div className="mt-5 flex h-[180px] items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--background)] px-4">
        <div key={step} className="animate-[fadeIn_240ms_ease-out]">
          <Visual />
        </div>
      </div>

      <div key={`text-${step}`} className="mt-5 animate-[fadeIn_240ms_ease-out]">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--subtle)]">
          {current.label}
        </p>
        <h5 className="mt-2 text-xl font-semibold tracking-tight text-[var(--foreground)]">
          {current.title}
        </h5>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
          {current.description}
        </p>
      </div>

      <footer className="mt-auto flex items-center justify-between gap-4 pt-6">
        <div className="flex items-center gap-1.5">
          {guide.steps.map((item, index) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setStep(index)}
              aria-label={`${guide.stepLabel} ${index + 1}: ${item.title}`}
              aria-current={index === step ? "true" : undefined}
              className="h-1.5 rounded-full transition-all duration-200"
              style={{
                width: index === step ? 18 : 6,
                background:
                  index === step ? "var(--accent)" : "var(--line-strong)",
              }}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setStep(isLast ? 0 : step + 1)}
          className="group inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-[var(--accent)]"
        >
          {isLast ? guide.restartLabel : guide.nextLabel}
          <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
          >
            <path
              d={isLast ? "M13 8A5 5 0 113 8m0 0V4m0 4h4" : "M3 8h10M9 4l4 4-4 4"}
              stroke="currentColor"
              strokeWidth="1.6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </footer>
    </section>
  );
}

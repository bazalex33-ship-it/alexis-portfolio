"use client";

import { useEffect, useRef, useState } from "react";
import { spotmeDemo } from "@/data/portfolio";
import { pointsToAttr } from "./SpotContent";

/**
 * Freehand drawing surface, shown as an overlay on top of the grid so nothing
 * below it shifts while drawing.
 *
 * Drawn large, stored as vector strokes in a 0–100 coordinate space, then
 * rendered back into a small grid cell. Drawing big and displaying small is
 * what keeps a finger-drawn stroke legible once it lands on the grid.
 */
export function DrawingPad({
  colour,
  onCancel,
  onConfirm,
}: {
  colour: string;
  onCancel: () => void;
  onConfirm: (strokes: number[][]) => void;
}) {
  const copy = spotmeDemo.grid;
  const surface = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const drawing = useRef(false);
  const [strokes, setStrokes] = useState<number[][]>([]);

  // Escape closes the overlay, as any layer above the page should.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCancel();
    };
    window.addEventListener("keydown", onKey);
    panel.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [onCancel]);

  /** Converts a pointer position into 0–100 pad coordinates. */
  const toPadSpace = (event: React.PointerEvent) => {
    const box = surface.current?.getBoundingClientRect();
    if (!box) return null;
    return {
      x: Math.min(100, Math.max(0, ((event.clientX - box.left) / box.width) * 100)),
      y: Math.min(100, Math.max(0, ((event.clientY - box.top) / box.height) * 100)),
    };
  };

  const start = (event: React.PointerEvent) => {
    const point = toPadSpace(event);
    if (!point) return;
    drawing.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    setStrokes((previous) => [...previous, [point.x, point.y]]);
  };

  const extend = (event: React.PointerEvent) => {
    if (!drawing.current) return;
    const point = toPadSpace(event);
    if (!point) return;

    setStrokes((previous) => {
      const next = [...previous];
      const current = next[next.length - 1];
      // Skip points that barely moved: fewer points means a lighter payload
      // and a smoother line once smoothed by strokeLinejoin.
      const lastX = current[current.length - 2];
      const lastY = current[current.length - 1];
      if (Math.hypot(point.x - lastX, point.y - lastY) < 2.5) return previous;
      next[next.length - 1] = [...current, point.x, point.y];
      return next;
    });
  };

  const end = () => {
    drawing.current = false;
  };

  const isEmpty = strokes.every((stroke) => stroke.length <= 2);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={copy.drawingHeading}
      className="absolute inset-0 z-20 flex items-center justify-center rounded-lg bg-[var(--background)]/80 backdrop-blur-[2px]"
    >
      <div
        ref={panel}
        tabIndex={-1}
        className="w-full rounded-xl border border-[var(--line-strong)] bg-[var(--surface)] p-3 shadow-[var(--shadow-lift)] outline-none"
      >
        <p className="text-[11px] font-medium text-[var(--foreground)]">
          {copy.drawingHeading}
        </p>

        <div
          ref={surface}
          onPointerDown={start}
          onPointerMove={extend}
          onPointerUp={end}
          onPointerCancel={end}
          // touch-none keeps a finger drag as a drawing gesture, not a scroll.
          className="mx-auto mt-2 aspect-square w-full max-w-[170px] touch-none rounded-lg"
          style={{ background: colour, cursor: "crosshair" }}
        >
          <svg viewBox="0 0 100 100" className="h-full w-full">
            {strokes.map((points, index) => (
              <polyline
                key={index}
                points={pointsToAttr(points)}
                fill="none"
                stroke="white"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
          </svg>
        </div>

        <div className="mt-2.5 flex items-center justify-between gap-1">
          <button
            type="button"
            onClick={() => setStrokes([])}
            className="rounded-full px-2 py-1 text-[11px] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            {copy.clearLabel}
          </button>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={onCancel}
              className="rounded-full border border-[var(--line-strong)] px-2.5 py-1 text-[11px] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {copy.cancelLabel}
            </button>
            <button
              type="button"
              disabled={isEmpty}
              onClick={() => onConfirm(strokes.filter((s) => s.length > 2))}
              className="rounded-full bg-[var(--foreground)] px-3 py-1 text-[11px] font-medium text-white transition-colors enabled:hover:bg-[var(--accent)] disabled:opacity-35"
            >
              {copy.placeLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

/**
 * The hero's abstract background: a light grid, a soft blue wash and a hairline.
 *
 * The blue wash drifts on its own, and follows the pointer while it is over the
 * hero. The follow is eased rather than locked to the cursor — the glow trails
 * behind and settles, which reads as atmosphere rather than as a cursor effect.
 *
 * Position is written straight to the DOM inside a rAF loop, so moving the
 * pointer never triggers a React render. The loop only runs while there is
 * something to animate, and never runs at all for visitors who asked for
 * reduced motion — they keep the static backdrop.
 */
export function HeroBackdrop() {
  const area = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const zone = area.current;
    const node = glow.current;
    if (!zone || !node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Touch-only devices have no hovering pointer to follow.
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    let running = false;
    /** Where the glow sits when the pointer is elsewhere. */
    let rest = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const eased = { x: 0, y: 0 };
    let started = false;

    const measure = () => {
      const box = zone.getBoundingClientRect();
      rest = { x: box.width / 2, y: 176 };
      if (!started) {
        target.x = rest.x;
        target.y = rest.y;
        eased.x = rest.x;
        eased.y = rest.y;
        node.style.transform = `translate3d(calc(${rest.x}px - 50%), calc(${rest.y}px - 50%), 0)`;
        started = true;
      }
    };

    const tick = () => {
      // Low factor = long, soft trail behind the pointer.
      eased.x += (target.x - eased.x) * 0.045;
      eased.y += (target.y - eased.y) * 0.045;

      node.style.transform = `translate3d(calc(${eased.x}px - 50%), calc(${eased.y}px - 50%), 0)`;

      const settled =
        Math.abs(target.x - eased.x) < 0.4 && Math.abs(target.y - eased.y) < 0.4;

      if (settled) {
        running = false;
        frame = 0;
        return;
      }
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      frame = requestAnimationFrame(tick);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      const box = zone.getBoundingClientRect();
      const inside =
        event.clientX >= box.left &&
        event.clientX <= box.right &&
        event.clientY >= box.top &&
        event.clientY <= box.bottom;

      // Outside the hero, the glow eases back to where it rests.
      target.x = inside ? event.clientX - box.left : rest.x;
      target.y = inside ? event.clientY - box.top : rest.y;
      start();
    };

    const onLeave = () => {
      target.x = rest.x;
      target.y = rest.y;
      start();
    };

    measure();
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", measure);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={area}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={{
        // The section clips its background, which would otherwise leave a hard
        // horizontal seam where the hero ends. Everything inside fades out
        // before reaching that edge — grid and glow alike.
        maskImage:
          "linear-gradient(to bottom, #000 0%, #000 45%, rgba(0,0,0,0.6) 72%, transparent 96%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, #000 0%, #000 45%, rgba(0,0,0,0.6) 72%, transparent 96%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(80% 60% at 50% 30%, #000 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(80% 60% at 50% 30%, #000 0%, transparent 100%)",
        }}
      />

      {/*
        Two layers on purpose: the outer one is moved by the pointer, the inner
        one keeps its own slow drift. Sharing a single element would mean the
        two transforms overwriting each other.
      */}
      <div
        ref={glow}
        className="absolute left-0 top-0 h-[42rem] w-[52rem] will-change-transform"
        style={{
          transform: "translate3d(calc(50% - 50%), calc(176px - 50%), 0)",
        }}
      >
        <div
          className="hero-aurora h-full w-full rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(31,69,200,0.13), rgba(31,69,200,0.03) 60%, transparent 100%)",
          }}
        />
      </div>

      <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-[var(--line)] to-transparent" />
    </div>
  );
}

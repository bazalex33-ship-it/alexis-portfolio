"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { spotmeDemo } from "@/data/portfolio";
import { DrawingPad } from "./DrawingPad";
import { PICKABLE_COLOURS, SPOT_COLOURS } from "./palette";
import { SpotVisual, describeContent, type Glyph, type SpotContent } from "./SpotContent";

/**
 * A playable, scaled-down profile grid in phone proportions.
 *
 * One cell is one spot. Placing on a spot replaces whatever was there before —
 * the rule the whole product is built on, and the reason simulated users
 * overwriting your word is the most useful thing this demo shows.
 *
 * Everything runs in memory: no network call, no storage, no real data. The
 * users below are invented. 54 cells are plain elements — no canvas library is
 * needed at this scale.
 */

const COLS = 6;
const ROWS = 9;

type Spot = {
  colour: string;
  content: SpotContent;
  /** Fictional author, announced to screen readers. */
  author: string;
  /** Bumped on every placement so the arrival animation replays. */
  version: number;
};

type Board = Record<string, Spot>;

const key = (x: number, y: number) => `${x},${y}`;
const randomInt = (max: number) => Math.floor(Math.random() * max);

const glyph = (name: Glyph): SpotContent => ({ kind: "glyph", glyph: name });
const word = (text: string): SpotContent => ({ kind: "text", text });

/**
 * The grid as other people left it, before the visitor arrives.
 * Kept sparse on purpose: a mostly empty grid reads as an invitation, and keeps
 * the demo quiet next to the rest of the page.
 */
const SEED: Board = {
  [key(1, 0)]: { colour: SPOT_COLOURS.pink, content: glyph("heart"), author: "mara", version: 0 },
  [key(4, 1)]: { colour: SPOT_COLOURS.amber, content: word("hi"), author: "juno", version: 0 },
  [key(0, 3)]: { colour: SPOT_COLOURS.blue, content: glyph("cross"), author: "leo", version: 0 },
  [key(3, 4)]: { colour: SPOT_COLOURS.green, content: glyph("star"), author: "iris", version: 0 },
  [key(5, 6)]: { colour: SPOT_COLOURS.violet, content: { kind: "colour" }, author: "sam", version: 0 },
  [key(2, 7)]: { colour: SPOT_COLOURS.orange, content: word("yo"), author: "noa", version: 0 },
};

/** Invented users whose cursors move across the grid while you watch. */
const LIVE_USERS = [
  { id: "noa", name: "noa", colour: SPOT_COLOURS.amber },
  { id: "leo", name: "leo", colour: SPOT_COLOURS.blue },
  { id: "iris", name: "iris", colour: SPOT_COLOURS.green },
];

/** What a simulated user can drop into a spot. */
const BOT_CONTENT: SpotContent[] = [
  glyph("heart"),
  glyph("cross"),
  glyph("star"),
  glyph("smile"),
  glyph("bolt"),
  word("hi"),
  word("yo"),
  word("ok"),
  { kind: "colour" },
];

type Cursor = {
  userId: string;
  colour: string;
  x: number;
  y: number;
  name: string;
};

export function SpotmeGrid() {
  const copy = spotmeDemo.grid;

  const [board, setBoard] = useState<Board>(SEED);
  const [selected, setSelected] = useState<string | null>(null);
  const [colour, setColour] = useState<string>(PICKABLE_COLOURS[0].value);
  const [text, setText] = useState("");
  const [drawing, setDrawing] = useState(false);
  const [spent, setSpent] = useState(0);
  const [focus, setFocus] = useState({ x: 0, y: 0 });
  const [status, setStatus] = useState("");
  const [cursor, setCursor] = useState<Cursor | null>(null);
  const [live, setLive] = useState(false);

  const cellRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const remaining = copy.budget - spent;

  const commit = useCallback(
    (content: SpotContent) => {
      if (!selected) {
        setStatus(copy.emptyState);
        return;
      }
      if (remaining <= 0) {
        setStatus(copy.noBudget);
        return;
      }

      setBoard((previous) => ({
        ...previous,
        [selected]: {
          colour,
          content,
          author: "you",
          version: (previous[selected]?.version ?? 0) + 1,
        },
      }));
      setSpent((n) => n + 1);
      setSelected(null);
      setText("");
      setDrawing(false);
      setStatus(
        `Spot placed with ${describeContent(content)}. ${remaining - 1} ${copy.budgetLabel}.`,
      );
    },
    [selected, remaining, colour, copy],
  );

  const reset = useCallback(() => {
    setBoard(SEED);
    setSelected(null);
    setText("");
    setDrawing(false);
    setSpent(0);
    setStatus("Grid reset.");
  }, []);

  /**
   * Simulated activity.
   *
   * The grid is only mounted once the visitor has opened it, so this simply
   * runs for as long as it exists — no visibility test to get wrong. It still
   * pauses when the tab is hidden, and never starts at all for visitors who
   * asked for reduced motion.
   */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const schedule = (fn: () => void, delay: number) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (!cancelled) fn();
      }, delay);
    };

    const step = () => {
      if (cancelled) return;
      if (document.hidden) {
        // Try again shortly rather than stalling for good.
        schedule(step, 1500);
        return;
      }

      const user = LIVE_USERS[randomInt(LIVE_USERS.length)];
      const content = BOT_CONTENT[randomInt(BOT_CONTENT.length)];
      const x = randomInt(COLS);
      const y = randomInt(ROWS);

      // 1. The cursor glides to the spot they are about to take.
      setCursor({ userId: user.id, colour: user.colour, x, y, name: user.name });

      // 2. On arrival, their spot replaces whatever was there.
      schedule(() => {
        setBoard((previous) => ({
          ...previous,
          [key(x, y)]: {
            colour: user.colour,
            content,
            author: user.name,
            version: (previous[key(x, y)]?.version ?? 0) + 1,
          },
        }));

        // 3. Pause, then someone else takes a turn.
        schedule(() => {
          setCursor(null);
          schedule(step, 3200 + randomInt(3600));
        }, 1000);
      }, 900);
    };

    // Short enough that the first placement is seen, not missed.
    schedule(() => {
      setLive(true);
      step();
    }, 1100);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  const onKeyDown = (event: React.KeyboardEvent) => {
    const moves: Record<string, { x: number; y: number }> = {
      ArrowRight: { x: 1, y: 0 },
      ArrowLeft: { x: -1, y: 0 },
      ArrowDown: { x: 0, y: 1 },
      ArrowUp: { x: 0, y: -1 },
    };

    if (moves[event.key]) {
      event.preventDefault();
      const next = {
        x: Math.min(COLS - 1, Math.max(0, focus.x + moves[event.key].x)),
        y: Math.min(ROWS - 1, Math.max(0, focus.y + moves[event.key].y)),
      };
      setFocus(next);
      cellRefs.current[next.y * COLS + next.x]?.focus();
      return;
    }

    if (event.key === " ") {
      event.preventDefault();
      setSelected(key(focus.x, focus.y));
    }
  };

  return (
    <section
      aria-label={copy.heading}
      className="flex h-full flex-col rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-6"
    >
      <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h4 className="text-sm font-semibold text-[var(--foreground)]">
          {copy.heading}
        </h4>
        <p className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--subtle)]">
          <span
            className={remaining === 0 ? "text-[var(--accent)]" : "text-[var(--foreground)]"}
          >
            {remaining}
          </span>{" "}
          {copy.budgetLabel}
        </p>
      </header>

      <div className="mt-1 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <p className="text-sm text-[var(--muted)]">{copy.subheading}</p>

        {/* Presence: uniform avatars, tinted per user. */}
        <div className="flex items-center gap-2">
          <span className="flex -space-x-1.5">
            {LIVE_USERS.map((user) => (
              <span
                key={user.id}
                title={user.name}
                className="flex h-5 w-5 items-center justify-center rounded-full ring-2 ring-[var(--surface)] transition-transform duration-300"
                style={{
                  background: user.colour,
                  transform: cursor?.userId === user.id ? "scale(1.2)" : undefined,
                }}
              >
                <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3 w-3 text-white">
                  <circle cx="8" cy="5.6" r="2.6" fill="currentColor" />
                  <path d="M2.8 14c0-2.9 2.3-5 5.2-5s5.2 2.1 5.2 5" fill="currentColor" />
                </svg>
              </span>
            ))}
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-[var(--subtle)]">
            <span
              className="h-1.5 w-1.5 rounded-full transition-colors duration-300"
              style={{ background: live ? SPOT_COLOURS.green : "var(--line-strong)" }}
            />
            {/* Naming who is acting makes the simulated activity unmistakable. */}
            {cursor ? (
              <span style={{ color: cursor.colour }}>
                {cursor.name} is placing…
              </span>
            ) : (
              copy.liveLabel
            )}
          </span>
        </div>
      </div>

      {/* Phone-shaped grid: one cell is one spot. */}
      <div className="mx-auto mt-5 w-full max-w-[228px]">
        <div className="relative">
          <div
            role="grid"
            aria-label={copy.heading}
            onKeyDown={onKeyDown}
            className="grid gap-[3px]"
            style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
          >
            {Array.from({ length: ROWS }, (_, y) => (
              <div key={y} role="row" style={{ display: "contents" }}>
                {Array.from({ length: COLS }, (_, x) => {
                  const id = key(x, y);
                  const spot = board[id];
                  const isSelected = selected === id;
                  const isFocus = focus.x === x && focus.y === y;

                  return (
                    <button
                      key={x}
                      ref={(node) => {
                        cellRefs.current[y * COLS + x] = node;
                      }}
                      type="button"
                      role="gridcell"
                      aria-selected={isSelected}
                      aria-label={
                        spot
                          ? `Spot ${x + 1}, ${y + 1}: ${describeContent(spot.content)} by ${spot.author}`
                          : `Spot ${x + 1}, ${y + 1}, empty`
                      }
                      tabIndex={isFocus ? 0 : -1}
                      onFocus={() => setFocus({ x, y })}
                      onClick={() => setSelected(isSelected ? null : id)}
                      className="relative aspect-square overflow-hidden rounded-[4px] transition-[box-shadow,transform] duration-200 hover:z-10 hover:scale-[1.08] motion-reduce:hover:transform-none"
                      style={{
                        background: spot?.colour ?? "var(--surface-muted)",
                        boxShadow: isSelected
                          ? "inset 0 0 0 2px var(--accent), 0 0 0 3px var(--accent-soft)"
                          : undefined,
                      }}
                    >
                      {spot ? (
                        <span
                          key={spot.version}
                          className="absolute inset-[15%] block animate-[fadeIn_320ms_ease-out]"
                        >
                          <SpotVisual content={spot.content} />
                        </span>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Someone else's cursor gliding to their next spot. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            {/* Halo marking the target, so the arrival is impossible to miss. */}
            <span
              className="absolute block rounded-full transition-all duration-[900ms] ease-out"
              style={{
                left: `${(((cursor?.x ?? 0) + 0.5) / COLS) * 100}%`,
                top: `${(((cursor?.y ?? 0) + 0.5) / ROWS) * 100}%`,
                height: 30,
                width: 30,
                background: cursor?.colour ?? "transparent",
                opacity: cursor ? 0.22 : 0,
                transform: "translate(-50%, -50%)",
              }}
            />
            <span
              className="absolute block h-3 w-3 rounded-full ring-2 ring-[var(--surface)] transition-all duration-[900ms] ease-out"
              style={{
                left: `${(((cursor?.x ?? 0) + 0.5) / COLS) * 100}%`,
                top: `${(((cursor?.y ?? 0) + 0.5) / ROWS) * 100}%`,
                background: cursor?.colour ?? "transparent",
                opacity: cursor ? 1 : 0,
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>

          {/* Drawing sits over the grid so nothing below it shifts. */}
          {drawing ? (
            <DrawingPad
              colour={colour}
              onCancel={() => setDrawing(false)}
              onConfirm={(strokes) => commit({ kind: "drawing", strokes })}
            />
          ) : null}
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-[var(--subtle)]">{copy.rule}</p>

      {/* Controls — inert until a spot is selected. */}
      <div className="mt-auto pt-5">
        <div className="flex flex-wrap items-center gap-2.5">
          <fieldset className="flex items-center gap-1.5">
            <legend className="sr-only">{copy.colourLabel}</legend>
            {PICKABLE_COLOURS.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setColour(option.value)}
                aria-label={option.name}
                aria-pressed={colour === option.value}
                className="h-6 w-6 rounded-full transition-transform duration-150 hover:scale-110 motion-reduce:hover:transform-none"
                style={{
                  background: option.value,
                  boxShadow:
                    colour === option.value
                      ? "0 0 0 2px var(--surface), 0 0 0 4px var(--foreground)"
                      : "0 0 0 1px var(--line-strong)",
                }}
              />
            ))}
          </fieldset>

          <button
            type="button"
            onClick={reset}
            className="ml-auto rounded-full border border-[var(--line-strong)] px-3.5 py-2 text-sm text-[var(--muted)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {copy.resetLabel}
          </button>
        </div>

        <div className="mt-2.5 flex flex-wrap items-center gap-2">
          <label className="sr-only" htmlFor="spot-text">
            {copy.textLabel}
          </label>
          <input
            id="spot-text"
            type="text"
            value={text}
            maxLength={4}
            placeholder={copy.textPlaceholder}
            onChange={(event) => setText(event.target.value)}
            disabled={!selected || remaining <= 0}
            className="w-[5.5rem] rounded-full border border-[var(--line-strong)] bg-[var(--surface)] px-3.5 py-2 text-sm text-[var(--foreground)] placeholder:text-[var(--subtle)] disabled:opacity-40"
          />

          <button
            type="button"
            onClick={() => setDrawing(true)}
            disabled={!selected || remaining <= 0}
            className="rounded-full border border-[var(--line-strong)] px-3.5 py-2 text-sm text-[var(--muted)] transition-colors duration-200 enabled:hover:border-[var(--accent)] enabled:hover:text-[var(--accent)] disabled:opacity-40"
          >
            {copy.drawLabel}
          </button>

          <button
            type="button"
            onClick={() =>
              commit(text.trim() ? { kind: "text", text: text.trim() } : { kind: "colour" })
            }
            disabled={!selected || remaining <= 0}
            className="ml-auto rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-medium text-white transition-colors duration-200 enabled:hover:bg-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-35"
          >
            {copy.placeLabel}
          </button>
        </div>

        <p className="mt-3 text-xs text-[var(--subtle)]">{copy.hint}</p>
      </div>

      {/* Announced to screen readers only. */}
      <p aria-live="polite" className="sr-only">
        {status}
      </p>
      <p className="sr-only">{copy.keyboardHint}</p>
    </section>
  );
}

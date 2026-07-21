/**
 * What lives inside a single spot.
 *
 * Everything is drawn in a 100 × 100 SVG viewBox, so the exact same content
 * stays crisp whether it is rendered in a 45 px grid cell or in the large
 * drawing pad. That is what lets a visitor draw big and have the result read
 * clearly once it is scaled down.
 */

export type Glyph = "heart" | "cross" | "star" | "smile" | "bolt";

export type SpotContent =
  | { kind: "colour" }
  | { kind: "text"; text: string }
  | { kind: "glyph"; glyph: Glyph }
  /** Freehand strokes, each a flat list of x,y pairs in 0–100 coordinates. */
  | { kind: "drawing"; strokes: number[][] };

const GLYPH_PATHS: Record<Glyph, string> = {
  heart:
    "M50 78C24 60 18 46 24 36c5-9 18-10 26-1 8-9 21-8 26 1 6 10 0 24-26 42z",
  cross: "M30 30l40 40M70 30L30 70",
  star: "M50 22l9 19 21 3-15 15 4 21-19-10-19 10 4-21-15-15 21-3z",
  smile: "M36 42v5M64 42v5M33 58c5 8 12 12 17 12s12-4 17-12",
  bolt: "M56 20L30 56h16l-4 26 26-38H52z",
};

/** Glyphs that are outlines rather than filled shapes. */
const STROKED: Glyph[] = ["cross", "smile"];

export function SpotVisual({ content }: { content: SpotContent }) {
  if (content.kind === "colour") return null;

  if (content.kind === "text") {
    // Font size steps down as the word grows, so 1 to 4 characters all fill
    // the spot without ever overflowing it.
    const sizes: Record<number, number> = { 1: 58, 2: 44, 3: 33, 4: 26 };
    const size = sizes[Math.min(4, Math.max(1, content.text.length))] ?? 26;

    return (
      <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={size}
          fontWeight="700"
          fill="white"
        >
          {content.text}
        </text>
      </svg>
    );
  }

  if (content.kind === "glyph") {
    const stroked = STROKED.includes(content.glyph);
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
        <path
          d={GLYPH_PATHS[content.glyph]}
          fill={stroked ? "none" : "white"}
          stroke={stroked ? "white" : "none"}
          strokeWidth={stroked ? 9 : 0}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
      {content.strokes.map((points, index) => (
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
  );
}

/** Turns [x1,y1,x2,y2,…] into the "x1,y1 x2,y2" form SVG expects. */
export function pointsToAttr(points: number[]): string {
  const pairs: string[] = [];
  for (let i = 0; i < points.length; i += 2) {
    pairs.push(`${points[i]},${points[i + 1]}`);
  }
  return pairs.join(" ");
}

/** Describes a spot for screen readers. */
export function describeContent(content: SpotContent): string {
  switch (content.kind) {
    case "text":
      return `the word ${content.text}`;
    case "glyph":
      return `a ${content.glyph}`;
    case "drawing":
      return "a drawing";
    default:
      return "a colour";
  }
}

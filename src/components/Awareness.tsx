import type { Content } from "@/data";
import { Reveal } from "./ui/Reveal";

/**
 * A short band between Skills and Experience.
 *
 * Kept deliberately light: no cards, no grid, a smaller heading than the
 * sections on either side, and the areas listed as plain text rather than
 * tags. It should read as a note in the margin, not as a sixth chapter.
 */
export function Awareness({ c }: { c: Content }) {
  const { awareness } = c;
  return (
    <section
      id="awareness"
      aria-labelledby="awareness-title"
      className="scroll-mt-24 border-t border-[var(--line)] py-14 lg:py-16"
    >
      <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">{awareness.eyebrow}</p>
          </Reveal>
          <Reveal delay={70}>
            <h2
              id="awareness-title"
              className="mt-4 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl"
            >
              {awareness.title}
            </h2>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="max-w-2xl leading-relaxed text-[var(--muted)]">
              {awareness.text}
            </p>
          </Reveal>

          <Reveal delay={90}>
            <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--subtle)]">
              {awareness.areas.map((area, index) => (
                <li key={area} className="flex items-center gap-5">
                  {/* A hairline separator instead of pills — quieter on the page. */}
                  {index > 0 ? (
                    <span
                      aria-hidden="true"
                      className="hidden h-3 w-px bg-[var(--line-strong)] sm:block"
                    />
                  ) : null}
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

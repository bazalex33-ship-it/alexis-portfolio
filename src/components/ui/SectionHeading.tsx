import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  /** Heading level rendered — keeps the document outline correct. */
  id?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={80}>
        <h2
          id={id}
          className="mt-5 font-[family-name:var(--font-display)] text-4xl leading-[1.08] text-[var(--foreground)] sm:text-5xl lg:text-6xl"
        >
          {title}
        </h2>
      </Reveal>
      {intro ? (
        <Reveal delay={140}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

/** Thin rule used to separate major sections. */
export function Rule() {
  return <hr className="border-0 border-t border-[var(--line)]" />;
}

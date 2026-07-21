import { about } from "@/data/portfolio";
import { Reveal } from "./ui/Reveal";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-24 border-t border-[var(--line)] py-20 lg:py-28"
    >
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">{about.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              id="about-title"
              className="mt-5 font-[family-name:var(--font-display)] text-4xl leading-[1.08] text-[var(--foreground)] sm:text-5xl"
            >
              {about.title}
            </h2>
          </Reveal>
        </div>

        <div>
          <div className="space-y-6">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 70}>
                <p
                  className={
                    index === 0
                      ? "text-xl leading-relaxed text-[var(--foreground)]"
                      : "text-lg leading-relaxed text-[var(--muted)]"
                  }
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3">
            {about.principles.map((principle, index) => (
              <Reveal
                as="li"
                key={principle.title}
                delay={index * 80}
                className="bg-[var(--surface)] px-6 py-7"
              >
                <h3 className="text-sm font-semibold text-[var(--foreground)]">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {principle.description}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

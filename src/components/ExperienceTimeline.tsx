import type { Content } from "@/data";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function ExperienceTimeline({ c }: { c: Content }) {
  const { experience } = c;
  const { education } = experience;

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="scroll-mt-24 border-t border-[var(--line)] py-20 lg:py-28"
    >
      <div className="container-page">
        <SectionHeading
          id="experience-title"
          eyebrow={experience.eyebrow}
          title={experience.title}
        />

        <ol className="mt-16 border-l border-[var(--line)]">
          {experience.items.map((item, index) => (
            <Reveal
              as="li"
              key={`${item.organisation}-${item.period}`}
              delay={index * 60}
              className="relative pb-12 pl-8 last:pb-0 sm:pl-12"
            >
              <span
                aria-hidden="true"
                className={`absolute -left-[4.5px] top-2 h-2 w-2 rounded-full ring-4 ring-[var(--background)] ${
                  item.current
                    ? "bg-[var(--accent)]"
                    : "bg-[var(--line-strong)]"
                }`}
              />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-[var(--subtle)]">
                  {item.period}
                </p>
                {item.current ? (
                  <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 text-[0.7rem] font-medium text-[var(--accent)]">
                    Current
                  </span>
                ) : null}
              </div>

              <h3 className="mt-2.5 text-xl font-semibold tracking-tight text-[var(--foreground)] sm:text-2xl">
                {item.role}
              </h3>

              <p className="mt-1 text-[var(--foreground)]">
                {item.organisation}
                {item.location ? (
                  <span className="text-[var(--subtle)]">
                    {" "}
                    · {item.location}
                  </span>
                ) : null}
              </p>

              <p className="mt-3 max-w-2xl leading-relaxed text-[var(--muted)]">
                {item.summary}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <div className="mt-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8 lg:p-10">
            <p className="eyebrow">{education.title}</p>
            <div className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
                {education.programme}
              </h3>
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-[var(--subtle)]">
                {education.period}
              </p>
            </div>
            <p className="mt-1 text-[var(--foreground)]">
              {education.school}
              <span className="text-[var(--subtle)]"> · {education.location}</span>
            </p>
            <p className="mt-3 max-w-2xl leading-relaxed text-[var(--muted)]">
              {education.details} {education.international}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

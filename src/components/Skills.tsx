import { skills } from "@/data/portfolio";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="scroll-mt-24 border-t border-[var(--line)] py-20 lg:py-28"
    >
      <div className="container-page">
        <SectionHeading
          id="skills-title"
          eyebrow={skills.eyebrow}
          title={skills.title}
          intro={skills.intro}
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] lg:grid-cols-3">
          {skills.categories.map((category, index) => (
            <Reveal
              key={category.title}
              delay={index * 90}
              className="flex flex-col bg-[var(--surface)] p-8 lg:p-10"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--subtle)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
                  {category.title}
                </h3>
              </div>

              <ul className="mt-7 space-y-3">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[var(--muted)]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

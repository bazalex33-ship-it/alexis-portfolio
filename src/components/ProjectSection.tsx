import type { Project } from "@/data/portfolio";
import { projects, work } from "@/data/portfolio";
import { ProjectImage } from "./ProjectImage";
import { SpotmeDemo } from "./spotme/SpotmeDemo";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

function StatusPill({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--muted)]">
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
      />
      {children}
    </span>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.14em] text-[var(--subtle)]">
        {label}
      </dt>
      <dd className="mt-1.5 text-sm text-[var(--foreground)]">{value}</dd>
    </div>
  );
}

function Tags({ label, tags }: { label: string; tags: string[] }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-[0.14em] text-[var(--subtle)]">
        {label}
      </h4>
      <ul className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-sm text-[var(--muted)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Contributions({ items }: { items: string[] }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-[0.14em] text-[var(--subtle)]">
        Main contributions
      </h4>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-[var(--muted)] leading-relaxed"
          >
            <span
              aria-hidden="true"
              className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** The featured case study — full width, images, more room to breathe. */
/**
 * How much visual weight a project block carries.
 *  - "cards"     → every project sits on its own white card
 *  - "editorial" → no cards at all, blocks separated by a hairline
 */
export type ProjectVariant = "cards" | "editorial";

const CARD =
  "rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] sm:p-10 lg:p-14";
const EDITORIAL = "border-t border-[var(--line)] pt-10";

function FeaturedProject({
  project,
  variant,
}: {
  project: Project;
  variant: ProjectVariant;
}) {
  return (
    <article
      id={`project-${project.id}`}
      aria-labelledby={`project-${project.id}-title`}
      className={`scroll-mt-28 ${variant === "cards" ? CARD : EDITORIAL}`}
    >
      <Reveal>
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--subtle)]">
            {project.index}
          </span>
          <StatusPill>{project.status}</StatusPill>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <h3
          id={`project-${project.id}-title`}
          className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-3xl leading-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
        >
          {project.name}
        </h3>
      </Reveal>

      <Reveal delay={100}>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
          {project.summary}
        </p>
      </Reveal>

      <Reveal delay={140}>
        <dl className="mt-8 grid gap-6 border-y border-[var(--line)] py-6 sm:grid-cols-3">
          <Meta label="Role" value={project.role} />
          <Meta label="Period" value={project.period} />
          <Meta label="Location" value={project.location ?? "Remote"} />
        </dl>
      </Reveal>

      {project.demo === "spotme" ? (
        <Reveal delay={180}>
          <div className="mt-10">
            <SpotmeDemo />
          </div>
        </Reveal>
      ) : project.images.length > 0 ? (
        <Reveal delay={180}>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {project.images.map((image, index) => (
              <ProjectImage key={image.src} image={image} priority={index === 0} />
            ))}
          </div>
        </Reveal>
      ) : null}

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="space-y-5">
            <h4 className="text-xs uppercase tracking-[0.14em] text-[var(--subtle)]">
              Context
            </h4>
            {project.context.map((paragraph) => (
              <p
                key={paragraph}
                className="leading-relaxed text-[var(--muted)]"
              >
                {paragraph}
              </p>
            ))}
            <Tags label={project.tagsLabel} tags={project.tags} />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <Contributions items={project.contributions} />
        </Reveal>
      </div>

      {project.note ? (
        <Reveal>
          <p className="mt-12 border-l-2 border-[var(--accent)] bg-[var(--accent-soft)] px-5 py-4 text-sm leading-relaxed text-[var(--muted)]">
            {project.note}
          </p>
        </Reveal>
      ) : null}
    </article>
  );
}

/** Secondary case studies — compact, two-column, no images. */
function CompactProject({
  project,
  variant,
}: {
  project: Project;
  variant: ProjectVariant;
}) {
  return (
    <Reveal
      as="article"
      className={`scroll-mt-28 ${variant === "cards" ? CARD : EDITORIAL}`}
    >
      <div
        id={`project-${project.id}`}
        className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
      >
        <div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--subtle)]">
              {project.index}
            </span>
            <StatusPill>{project.status}</StatusPill>
          </div>

          <h3
            id={`project-${project.id}-title`}
            className="mt-5 font-[family-name:var(--font-display)] text-2xl leading-tight text-[var(--foreground)] sm:text-3xl"
          >
            {project.name}
          </h3>

          <dl className="mt-6 space-y-4">
            <Meta label="Role" value={project.role} />
            <Meta label="Period" value={project.period} />
            {project.location ? (
              <Meta label="Location" value={project.location} />
            ) : null}
          </dl>
        </div>

        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-[var(--foreground)]">
            {project.summary}
          </p>
          {project.context.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-[var(--muted)]">
              {paragraph}
            </p>
          ))}
          <Contributions items={project.contributions} />
          <Tags label={project.tagsLabel} tags={project.tags} />
          {project.note ? (
            <p className="border-l-2 border-[var(--line-strong)] px-5 py-1 text-sm leading-relaxed text-[var(--subtle)]">
              {project.note}
            </p>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}

export function ProjectSection({
  variant = "cards",
}: {
  variant?: ProjectVariant;
}) {
  const [featured, ...rest] = projects;

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="scroll-mt-24 py-20 lg:py-28"
    >
      <div className="container-page">
        <SectionHeading
          id="work-title"
          eyebrow={work.eyebrow}
          title={work.title}
          intro={work.intro}
        />

        <div className="mt-16 space-y-16 lg:mt-20">
          {featured ? (
            <FeaturedProject project={featured} variant={variant} />
          ) : null}
          {rest.map((project) => (
            <CompactProject key={project.id} project={project} variant={variant} />
          ))}
        </div>
      </div>
    </section>
  );
}

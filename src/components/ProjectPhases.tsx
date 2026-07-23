import type { ProjectPhase } from "@/data";

/**
 * A quiet strip showing how a long-running project moved, and how the role
 * moved with it.
 *
 * Reads as a horizontal line on wide screens and stacks into a vertical rail on
 * narrow ones. No dates, no figures — the shape of the progression is the point.
 */
export function ProjectPhases({
  label,
  phases,
}: {
  label: string;
  phases: ProjectPhase[];
}) {
  return (
    <section aria-label={label}>
      <h4 className="text-xs uppercase tracking-[0.14em] text-[var(--subtle)]">
        {label}
      </h4>

      <ol className="mt-5 grid gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-6">
        {phases.map((phase, index) => {
          const isCurrent = phase.status === "current";
          const isAhead = phase.status === "ahead";

          return (
            <li key={phase.label} className="relative">
              {/* The rail: horizontal on wide screens, implied by order below. */}
              <div className="flex items-center gap-2" aria-hidden="true">
                <span
                  className={`h-px flex-1 ${
                    index === 0 ? "bg-transparent" : "bg-[var(--line-strong)]"
                  } hidden lg:block`}
                />
                <span
                  className={`relative flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full ${
                    isAhead
                      ? "bg-[var(--background)] ring-1 ring-[var(--line-strong)]"
                      : isCurrent
                        ? "bg-[var(--accent)]"
                        : "bg-[var(--line-strong)]"
                  }`}
                >
                  {isCurrent ? (
                    <span className="absolute h-4 w-4 rounded-full bg-[var(--accent)] opacity-20" />
                  ) : null}
                </span>
                <span
                  className={`h-px flex-1 ${
                    index === phases.length - 1
                      ? "bg-transparent"
                      : "bg-[var(--line-strong)]"
                  } hidden lg:block`}
                />
              </div>

              <div className="mt-3 lg:pr-3">
                <p
                  className={`text-sm font-medium leading-snug ${
                    isAhead ? "text-[var(--subtle)]" : "text-[var(--foreground)]"
                  }`}
                >
                  {phase.label}
                </p>
                {/* Omitted when nothing is confirmed for that phase. */}
                {phase.role ? (
                  <p className="mt-1 text-[11px] uppercase tracking-[0.1em] text-[var(--subtle)]">
                    {phase.role}
                  </p>
                ) : null}
                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                  {phase.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

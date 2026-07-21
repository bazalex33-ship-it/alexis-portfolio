import { spotmeDemo } from "@/data/portfolio";
import { SpotmeGrid } from "./SpotmeGrid";
import { SpotmeGuide } from "./SpotmeGuide";

/**
 * The interactive SpotMe demo shown inside the case study, in place of
 * screenshots: the product guide on one side, a playable profile grid on
 * the other.
 */
export function SpotmeDemo() {
  return (
    <div className="rounded-2xl border border-[var(--line)] bg-[var(--background)] p-5 sm:p-6 lg:p-8">
      <div className="max-w-2xl">
        <p className="eyebrow">{spotmeDemo.eyebrow}</p>
        <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl leading-tight text-[var(--foreground)] sm:text-3xl">
          {spotmeDemo.title}
        </h3>
        <p className="mt-3 leading-relaxed text-[var(--muted)]">
          {spotmeDemo.intro}
        </p>
      </div>

      <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-2">
        <SpotmeGuide />
        <SpotmeGrid />
      </div>

      <p className="mt-5 text-xs leading-relaxed text-[var(--subtle)]">
        {spotmeDemo.disclaimer}
      </p>
    </div>
  );
}

import { hero, personal } from "@/data/portfolio";
import { HeroBackdrop } from "./HeroBackdrop";
import { ArrowIcon, ButtonLink } from "./ui/Button";
import { Reveal } from "./ui/Reveal";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden pt-16 pb-20 sm:pt-24 lg:pt-32 lg:pb-32"
    >
      <HeroBackdrop />

      <div className="container-page">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-[var(--line-strong)] bg-[var(--surface)] px-4 py-1.5 text-xs font-medium text-[var(--muted)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            </span>
            {hero.badge}
          </p>
        </Reveal>

        <Reveal delay={70}>
          <p className="eyebrow mt-10">{hero.eyebrow}</p>
        </Reveal>

        <Reveal delay={120}>
          <h1
            id="hero-heading"
            className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-[2.75rem] leading-[1.03] tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-[5.25rem]"
          >
            {hero.headline}
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            {hero.introduction}
          </p>
        </Reveal>

        <Reveal delay={230}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--subtle)]">
            {hero.availability}
          </p>
        </Reveal>

        <Reveal delay={290}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
              <ArrowIcon />
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.tertiaryCta.href} variant="ghost">
              {hero.tertiaryCta.label}
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={350}>
          <dl className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3">
            {hero.highlights.map((item) => (
              <div key={item.value} className="bg-[var(--surface)] px-6 py-6">
                <dt className="font-[family-name:var(--font-display)] text-2xl text-[var(--foreground)]">
                  {item.value}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <p className="sr-only">
          {personal.name} — {personal.title}. {personal.availability}.
        </p>
      </div>
    </section>
  );
}

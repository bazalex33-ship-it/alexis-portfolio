import type { Content } from "@/data";
import { CopyEmail } from "./CopyEmail";
import { ArrowIcon, ButtonLink } from "./ui/Button";
import { Reveal } from "./ui/Reveal";

export function Contact({ c }: { c: Content }) {
  const { contact, personal } = c;
  // The CV button only exists once a URL is set in src/data/portfolio.ts.
  const hasCv = personal.cvUrl.trim().length > 0;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-24 border-t border-[var(--line)] py-20 lg:py-32"
    >
      <div className="container-page">
        <div className="relative isolate overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] px-6 py-14 shadow-[var(--shadow-soft)] sm:px-12 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 80% at 100% 0%, rgba(31,69,200,0.08), transparent 70%)",
            }}
          />

          <Reveal>
            <p className="eyebrow">{contact.eyebrow}</p>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="contact-title"
              className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl leading-[1.06] text-[var(--foreground)] sm:text-5xl lg:text-6xl"
            >
              {contact.title}
            </h2>
          </Reveal>

          <Reveal delay={130}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
              {contact.text}
            </p>
          </Reveal>

          <Reveal delay={190}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink href={`mailto:${personal.email}`} variant="primary">
                {contact.emailLabel}
                <ArrowIcon />
              </ButtonLink>
              <ButtonLink href={personal.linkedin} variant="secondary">
                {contact.linkedinLabel}
              </ButtonLink>
              {hasCv ? (
                <ButtonLink href={personal.cvUrl} variant="secondary" download>
                  {contact.cvLabel}
                </ButtonLink>
              ) : null}
              <CopyEmail
                email={personal.email}
                label={contact.copyLabel}
                copiedLabel={contact.copiedLabel}
              />
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[var(--line)] pt-8 text-sm">
              <p className="inline-flex items-center gap-2.5 text-[var(--muted)]">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                />
                {personal.availability}
              </p>
              <a
                href={`mailto:${personal.email}`}
                className="text-[var(--foreground)] underline decoration-[var(--line-strong)] underline-offset-4 transition-colors hover:decoration-[var(--accent)] hover:text-[var(--accent)]"
              >
                {personal.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

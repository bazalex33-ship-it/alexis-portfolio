import { footer, navigation, personal } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  const hasCv = personal.cvUrl.trim().length > 0;

  return (
    <footer className="mt-auto border-t border-[var(--line)] py-12">
      <div className="container-page flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <p className="text-sm font-medium text-[var(--foreground)]">
            {personal.name}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
            {footer.text}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              >
                LinkedIn
              </a>
            </li>
            {hasCv ? (
              <li>
                <a
                  href={personal.cvUrl}
                  download
                  className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  CV
                </a>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>

      <div className="container-page mt-10 border-t border-[var(--line)] pt-6">
        <p className="text-xs text-[var(--subtle)]">
          © {year} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

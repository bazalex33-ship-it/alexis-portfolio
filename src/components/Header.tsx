"use client";

import { useEffect, useState } from "react";
import { navigation, personal } from "@/data/portfolio";
import { ScrollProgress } from "./ScrollProgress";

const sectionIds = navigation.map((item) => item.href.replace("#", ""));

/** Sticky, discreet navigation with an active state driven by scroll position. */
export function Header() {
  const [active, setActive] = useState<string>(sectionIds[0] ?? "");
  const [condensed, setCondensed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Active section: the last section whose top has passed the header line.
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setCondensed(window.scrollY > 24);

      const line = 140;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }

      // Near the bottom of the page, always highlight the final section.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8;
      setActive(atBottom ? sectionIds[sectionIds.length - 1] : current);
    };

    const onScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <ScrollProgress />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[var(--foreground)] focus:px-5 focus:py-2.5 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={`sticky top-0 z-40 transition-colors duration-300 ${
          condensed
            ? "border-b border-[var(--line)] bg-[var(--background)]/85 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between gap-6 lg:h-20">
          <a
            href="#top"
            className="text-sm font-medium tracking-tight text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
          >
            {personal.name}
            <span className="ml-2 hidden text-[var(--subtle)] sm:inline">
              — {personal.title}
            </span>
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = active === id;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative rounded-full px-3.5 py-2 text-sm transition-colors duration-200 ${
                        isActive
                          ? "text-[var(--foreground)]"
                          : "text-[var(--muted)] hover:text-[var(--foreground)]"
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-[var(--accent)] transition-transform duration-300 ease-out ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-4 py-2 text-sm text-[var(--foreground)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Get in touch
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line-strong)] text-[var(--foreground)] md:hidden"
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>
            <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
              {menuOpen ? (
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6h14M3 13h14"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {menuOpen ? (
          <nav
            id="mobile-nav"
            aria-label="Primary mobile"
            className="border-t border-[var(--line)] bg-[var(--background)] md:hidden"
          >
            <ul className="container-page flex flex-col py-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block border-b border-[var(--line)] py-3.5 text-base last:border-0 ${
                      active === item.href.replace("#", "")
                        ? "text-[var(--accent)]"
                        : "text-[var(--foreground)]"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </header>
    </>
  );
}

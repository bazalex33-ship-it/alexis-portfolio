/**
 * ---------------------------------------------------------------------------
 * CONTENT ENTRY POINT
 * ---------------------------------------------------------------------------
 * `getContent(locale)` merges the translated text with the values shared by
 * both languages, and is the only thing components need.
 *
 * To edit the site:
 *   fr.ts      → every French string
 *   en.ts      → every English string
 *   shared.ts  → email, LinkedIn, CV link, photo, site URL
 * ---------------------------------------------------------------------------
 */

import { en } from "./en";
import { fr } from "./fr";
import { shared, type Locale } from "./shared";
import type { Content } from "./types";

const byLocale = { fr, en } as const;

export function getContent(locale: Locale): Content {
  const text = byLocale[locale];

  return {
    ...text,
    locale,
    url: shared.url,
    personal: {
      ...text.personal,
      name: shared.name,
      email: shared.email,
      linkedin: shared.linkedin,
      cvUrl: shared.cvUrl,
      photo: { src: shared.photoSrc, alt: text.personal.photoAlt },
    },
  };
}

/** The address of the other language, for the header switcher. */
export function otherLocale(locale: Locale): { locale: Locale; href: string } {
  return locale === "fr"
    ? { locale: "en", href: "/en" }
    : { locale: "fr", href: "/" };
}

export { shared, locales, defaultLocale, localePath } from "./shared";
export type { Locale } from "./shared";
export type * from "./types";

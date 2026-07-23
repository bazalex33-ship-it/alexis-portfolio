/**
 * ---------------------------------------------------------------------------
 * SHARED VALUES — identical in every language
 * ---------------------------------------------------------------------------
 * Anything that must never differ between the French and English versions
 * lives here and only here: contact details, links, file paths.
 *
 * Translatable text lives in `en.ts` and `fr.ts`.
 * ---------------------------------------------------------------------------
 */

export const shared = {
  /** Used for absolute Open Graph URLs. Update after your first deploy. */
  url: "https://alexis-portfolio-sand.vercel.app",
  name: "Alexis Bazire",
  email: "bazalex33@gmail.com",
  linkedin: "https://www.linkedin.com/in/alexis-bazire-off/",
  /** Optional — leave empty if there is no X/Twitter account. */
  twitterHandle: "",
  /**
   * Portrait shown in the About section.
   * Set to "" to hide the photo everywhere; the layout adapts on its own.
   * Replace the file in /public and keep a portrait 4:5 ratio, ~1100 px wide.
   */
  photoSrc: "/alexis-bazire.jpg",
  /**
   * Leave empty ("") until the CV is available.
   * When empty, every "Download CV" button is hidden automatically.
   * Example once ready: "/alexis-bazire-cv.pdf" (file placed in /public).
   */
  cvUrl: "",
};

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

/** French is the default: the site targets opportunities in Paris. */
export const defaultLocale: Locale = "fr";

/** Where each language lives. The default locale sits at the root. */
export const localePath: Record<Locale, string> = {
  fr: "/",
  en: "/en",
};

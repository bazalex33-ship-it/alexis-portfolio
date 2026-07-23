import type { Metadata } from "next";
import { getContent, shared, type Locale } from "@/data";

/**
 * Metadata for one language.
 *
 * `alternates.languages` emits the hreflang tags that tell search engines the
 * two pages are the same content in different languages, so they rank together
 * instead of competing.
 */
export function buildMetadata(locale: Locale): Metadata {
  const c = getContent(locale);
  const path = locale === "fr" ? "/" : "/en";

  return {
    metadataBase: new URL(shared.url),
    title: c.site.title,
    description: c.site.description,
    applicationName: c.personal.name,
    authors: [{ name: c.personal.name, url: c.personal.linkedin }],
    creator: c.personal.name,
    keywords: [
      c.personal.name,
      "product management",
      "digital projects",
      "growth marketing",
      "AI",
      "portfolio",
      "Paris",
    ],
    alternates: {
      canonical: path,
      languages: { fr: "/", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      locale: c.ogLocale,
      url: path,
      siteName: c.personal.name,
      title: c.site.title,
      description: c.site.shareDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: c.site.title,
      description: c.site.shareDescription,
      ...(shared.twitterHandle ? { creator: shared.twitterHandle } : {}),
    },
    robots: { index: true, follow: true },
  };
}

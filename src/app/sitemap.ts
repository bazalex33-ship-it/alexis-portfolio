import type { MetadataRoute } from "next";
import { shared } from "@/data";

/** Both languages are listed so each can be indexed on its own. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: shared.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { fr: shared.url, en: `${shared.url}/en` } },
    },
    {
      url: `${shared.url}/en`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}

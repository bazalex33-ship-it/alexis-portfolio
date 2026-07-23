import { About } from "@/components/About";
import { Awareness } from "@/components/Awareness";
import { Contact } from "@/components/Contact";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectSection } from "@/components/ProjectSection";
import { Skills } from "@/components/Skills";
import { otherLocale, type Content } from "@/data";

/** Structured data so search engines understand who the page is about. */
function PersonJsonLd({ c }: { c: Content }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: c.personal.name,
    jobTitle: c.personal.title,
    description: c.site.description,
    email: `mailto:${c.personal.email}`,
    url: c.url,
    sameAs: [c.personal.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
  };

  return (
    <script
      type="application/ld+json"
      // Content is static and authored in src/data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * The whole page, in whichever language it is handed.
 * `/` renders it in French, `/en` in English — same components, same layout.
 */
export function Portfolio({ c }: { c: Content }) {
  const other = otherLocale(c.locale);

  return (
    <>
      <PersonJsonLd c={c} />
      <Header c={c} otherHref={other.href} />
      <main id="main">
        <Hero c={c} />
        <ProjectSection c={c} />
        <About c={c} />
        <Skills c={c} />
        <Awareness c={c} />
        <ExperienceTimeline c={c} />
        <Contact c={c} />
      </main>
      <Footer c={c} />
    </>
  );
}

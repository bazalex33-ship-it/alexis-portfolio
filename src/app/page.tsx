import { About } from "@/components/About";
import { Awareness } from "@/components/Awareness";
import { Contact } from "@/components/Contact";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectSection } from "@/components/ProjectSection";
import { Skills } from "@/components/Skills";
import { personal, site } from "@/data/portfolio";

/** Structured data so search engines understand who the page is about. */
function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    jobTitle: personal.title,
    description: site.description,
    email: `mailto:${personal.email}`,
    url: site.url,
    sameAs: [personal.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
  };

  return (
    <script
      type="application/ld+json"
      // Content is static and authored in src/data/portfolio.ts.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Page() {
  return (
    <>
      <PersonJsonLd />
      <Header />
      <main id="main">
        <Hero />
        <ProjectSection />
        <About />
        <Skills />
        <Awareness />
        <ExperienceTimeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

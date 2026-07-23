/**
 * ---------------------------------------------------------------------------
 * CONTENT SHAPE
 * ---------------------------------------------------------------------------
 * `en.ts` and `fr.ts` must both satisfy `LocaleContent`. If you add a field to
 * one language and forget the other, the build fails — which is exactly what
 * stops the two versions from drifting apart.
 * ---------------------------------------------------------------------------
 */

export type ProjectImage = {
  /** Path inside /public — e.g. "/projects/spotme-01.webp" */
  src: string;
  /** Meaningful alternative text, used by screen readers. */
  alt: string;
  /** Short caption shown under the placeholder while the image is missing. */
  caption?: string;
};

export type ProjectPhase = {
  /** Two or three words. Kept generic: no names, dates or figures. */
  label: string;
  /** How the role shifted during that phase. Empty hides the line. */
  role: string;
  /** One short line. */
  description: string;
  status: "done" | "current" | "ahead";
};

export type Project = {
  /** Used for the anchor id and React keys. Keep it identical across languages. */
  id: string;
  /** Display index, e.g. "01". */
  index: string;
  name: string;
  role: string;
  period: string;
  location?: string;
  status: string;
  summary: string;
  /** One or more paragraphs of context. */
  context: string[];
  contributions: string[];
  /** Label above the tag list. */
  tagsLabel: string;
  tags: string[];
  images: ProjectImage[];
  /** Optional strip showing how a long-running project evolved. */
  phasesLabel?: string;
  phases?: ProjectPhase[];
  /** Renders the interactive SpotMe demo in place of the image slots. */
  demo?: "spotme";
  /** Optional closing note (confidentiality, launch status…). */
  note?: string;
  /** The first project is rendered as the main, most prominent case study. */
  featured?: boolean;
};

export type Experience = {
  role: string;
  organisation: string;
  location?: string;
  period: string;
  summary: string;
  /** Adds a subtle "current" marker on the timeline. */
  current?: boolean;
};

export type LocaleContent = {
  /** Value for the <html lang> attribute. */
  htmlLang: string;
  /** Value for og:locale. */
  ogLocale: string;

  site: {
    title: string;
    /** Google truncates around 155 characters. */
    description: string;
    /** Social previews cut around 125 characters. */
    shareDescription: string;
    /** Shown on the generated sharing image. */
    ogTagline: string;
  };

  personal: {
    title: string;
    location: string;
    availability: string;
    photoAlt: string;
  };

  /** Shown in the header to reach the other language. */
  languageSwitch: {
    /** Accessible label, e.g. "Switch to English". */
    label: string;
    /** Two-letter code shown in the button. */
    short: string;
  };

  navigation: { label: string; href: string }[];

  /** Interface labels that are not tied to a section. */
  ui: {
    skipToContent: string;
    getInTouch: string;
    openMenu: string;
    closeMenu: string;
  };

  hero: {
    eyebrow: string;
    headline: string;
    introduction: string;
    availability: string;
    badge: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    tertiaryCta: { label: string; href: string };
    highlights: { value: string; label: string }[];
  };

  work: { eyebrow: string; title: string; intro: string };

  projects: Project[];

  spotmeDemo: {
    eyebrow: string;
    title: string;
    intro: string;
    disclaimer: string;
    tryLabel: string;
    tryHint: string;
    closeLabel: string;
    guide: {
      heading: string;
      subheading: string;
      nextLabel: string;
      restartLabel: string;
      stepLabel: string;
      steps: {
        label: string;
        title: string;
        description: string;
        visual: "concept" | "scarcity" | "overwrite" | "status";
      }[];
      /** Labels drawn inside the small illustrations. */
      visuals: {
        profile: string;
        after: string;
        before: string;
        scarcity: string;
        milestones: string[];
      };
    };
    grid: {
      heading: string;
      subheading: string;
      /** How many spots the visitor can place in total. */
      budget: number;
      budgetLabel: string;
      liveLabel: string;
      placingLabel: string;
      colourLabel: string;
      textLabel: string;
      textPlaceholder: string;
      drawLabel: string;
      drawingHeading: string;
      clearLabel: string;
      cancelLabel: string;
      placeLabel: string;
      resetLabel: string;
      hint: string;
      rule: string;
      emptyState: string;
      noBudget: string;
      keyboardHint: string;
      /** Spoken descriptions of what sits in a spot. */
      contentNames: {
        colour: string;
        drawing: string;
        word: string;
        heart: string;
        cross: string;
        star: string;
        smile: string;
        bolt: string;
      };
    };
  };

  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    principles: { title: string; description: string }[];
  };

  skills: {
    eyebrow: string;
    title: string;
    intro: string;
    categories: { title: string; items: string[] }[];
  };

  awareness: {
    eyebrow: string;
    title: string;
    text: string;
    areas: string[];
  };

  experience: {
    eyebrow: string;
    title: string;
    items: Experience[];
    education: {
      title: string;
      programme: string;
      school: string;
      location: string;
      period: string;
      details: string;
      international: string;
    };
  };

  contact: {
    eyebrow: string;
    title: string;
    text: string;
    emailLabel: string;
    linkedinLabel: string;
    cvLabel: string;
    copyLabel: string;
    copiedLabel: string;
  };

  footer: { text: string; rights: string };
};

/** What components actually receive: translated text plus the shared values. */
export type Content = LocaleContent & {
  locale: "fr" | "en";
  url: string;
  personal: LocaleContent["personal"] & {
    name: string;
    email: string;
    linkedin: string;
    cvUrl: string;
    photo: { src: string; alt: string };
  };
};

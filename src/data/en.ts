/**
 * ---------------------------------------------------------------------------
 * ENGLISH CONTENT
 * ---------------------------------------------------------------------------
 * Every English string on the site. Its French counterpart is `fr.ts`, and
 * both must keep the same shape — TypeScript enforces it, so a field added
 * here has to be added there too.
 *
 * Contact details, links and file paths are NOT here: they live once in
 * `shared.ts` so the two languages can never disagree.
 * ---------------------------------------------------------------------------
 */

import { shared } from "./shared";
import type { LocaleContent } from "./types";

export const en: LocaleContent = {
  htmlLang: "en",
  ogLocale: "en_US",

  site: {
    title: "Alexis Bazire · Product, Digital Projects & AI",
    description:
      "Alexis Bazire combines product thinking, project coordination and AI to design, structure and ship practical projects. Open to opportunities in Paris.",
    shareDescription:
      "Turning ideas into concrete projects across product, digital projects and AI. Open to opportunities in Paris.",
    ogTagline: "Product · Digital Projects · Marketing · AI",
  },

  personal: {
    title: "Product, Digital Projects & AI",
    location: "Paris, France",
    availability: "Open to opportunities in Paris",
    photoAlt: "Portrait of Alexis Bazire.",
  },

  languageSwitch: { label: "Voir en français", short: "FR" },

  navigation: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],

  ui: {
    skipToContent: "Skip to content",
    getInTouch: "Get in touch",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  hero: {
    eyebrow: "Product · Digital Projects · Marketing · AI",
    headline: "I turn ideas into concrete projects.",
    introduction:
      "I combine product thinking, project coordination, marketing and artificial intelligence to design, structure and develop practical solutions.",
    availability:
      "Open to Product, digital project management, Growth Marketing and AI-enabled opportunities in Paris.",
    badge: "Open to opportunities in Paris",
    primaryCta: { label: "Explore my work", href: "#work" },
    secondaryCta: { label: "LinkedIn", href: shared.linkedin },
    tertiaryCta: { label: "Contact me", href: "#contact" },
    highlights: [
      { value: "Product", label: "Strategy, UX & roadmapping" },
      { value: "Projects", label: "Coordination & stakeholder management" },
      { value: "AI", label: "AI-assisted design & development" },
    ],
  },

  work: {
    eyebrow: "Selected Work",
    title: "Three projects, three ways of building.",
    intro:
      "A product I lead end to end, an international development project I help coordinate, and a marketing role where I learned to measure what I build.",
  },

  projects: [
    {
      id: "spotme",
      index: "01",
      name: "SpotMe",
      role: "Founder & Product Lead",
      period: "July 2025 – Present",
      status: "Social application currently in active development",
      summary:
        "SpotMe is a social application focused on profile discovery, user interaction and community engagement. I have led the project from its initial concept, combining product strategy, user experience design, project management and AI-assisted development.",
      context: [
        "SpotMe explores new ways for users to discover profiles, interact and engage within a digital community.",
      ],
      contributions: [
        "Defined the product vision, core concept and development roadmap.",
        "Designed the main features, user journeys and navigation structure.",
        "Translated product ideas into clear functional specifications.",
        "Led AI-assisted development from specifications to implementation.",
        "Designed engagement, retention and social interaction mechanics.",
        "Tested and improved the product through regular iterations.",
        "Contributed to deployment preparation, product security and performance optimisation.",
      ],
      tagsLabel: "Tools",
      tags: ["Claude", "Antigravity", "Next.js", "Supabase", "Vercel", "Generative AI"],
      images: [],
      demo: "spotme",
      note: "SpotMe is currently in active development and has not yet been publicly launched. Selected screens and product elements may be intentionally withheld until launch.",
      featured: true,
    },
    {
      id: "hospitality",
      index: "02",
      name: "High-end Hospitality & Wellness Development Project",
      role: "Strategic Development & Partner Outreach",
      period: "May 2025 – Present",
      location: "Saint-Martin",
      status: "International project currently in development",
      summary:
        "Contribution to the strategic development and coordination of a high-end hospitality and wellness project based in Saint-Martin.",
      context: [
        "The project involves international partners, investors and decision-makers. My role focuses on supporting coordination, strategic communication and the preparation of materials used during key discussions.",
      ],
      contributions: [
        "Coordinated stakeholders and monitored project progress.",
        "Prepared strategic presentations for partners, investors and decision-makers.",
        "Supported communication between the project's different contributors.",
        "Participated in strategic discussions and international partner relations.",
        "Helped structure the information and materials required for project development.",
        "Identified potential investors, hotel operators and strategic partners, prepared opportunity materials and facilitated introductions with the property owner.",
      ],
      tagsLabel: "Skills used",
      tags: [
        "Project coordination",
        "Stakeholder management",
        "Strategic communication",
        "Presentation design",
        "International collaboration",
      ],
      images: [],
      phasesLabel: "How the project evolved",
      phases: [
        {
          label: "Wellness concept",
          role: "Marketing & concept",
          description: "Positioning, guest experience and service design.",
          status: "done",
        },
        {
          label: "Destination strategy",
          role: "Strategy",
          description: "A broader premium offer built around recovery and nutrition.",
          status: "done",
        },
        {
          label: "Asset repositioning",
          role: "Coordination",
          description: "Scope widened to renovation, brand and operator search.",
          status: "done",
        },
        {
          label: "Funding options",
          role: "Structuring",
          description: "Organising project information and materials for discussions.",
          status: "done",
        },
        {
          label: "Partner introductions",
          role: "Business development",
          description: "Connecting investors, operators and hospitality brands.",
          status: "current",
        },
        {
          label: "Potential future involvement",
          role: "",
          description:
            "Longer-term involvement may be considered as the project advances.",
          status: "ahead",
        },
      ],
      note: "The project and property names are not publicly disclosed while the development process is ongoing.",
    },
    {
      id: "dauphin-telecom",
      index: "03",
      name: "Dauphin Telecom",
      role: "Marketing Assistant",
      period: "May 2025 – August 2025",
      location: "Saint-Martin",
      status: "Marketing internship",
      summary:
        "Contribution to marketing campaigns, digital communication and commercial events for a telecommunications company operating in Saint-Martin.",
      context: [],
      contributions: [
        "Contributed to the preparation and deployment of marketing campaigns.",
        "Created content and communication materials for social media.",
        "Supported promotional operations and commercial events.",
        "Conducted competitor and local market analysis.",
        "Monitored marketing performance indicators.",
        "Prepared reports and recommendations based on campaign results.",
      ],
      tagsLabel: "Skills used",
      tags: [
        "Digital marketing",
        "Content creation",
        "Competitive analysis",
        "KPI reporting",
        "Event marketing",
      ],
      images: [],
    },
  ],

  spotmeDemo: {
    eyebrow: "Interactive demo",
    title: "A social network where your profile is shaped by others.",
    intro:
      "On SpotMe, a profile is not a page you control. It is a grid anyone can write on. Read the guide new users get, then place a few spots yourself.",
    disclaimer:
      "Simplified reproduction built for this portfolio. The other users are simulated, and nothing is saved or shared: everything resets when the page reloads.",
    tryLabel: "Try the mechanic",
    tryHint: "Interactive · opens in place",
    closeLabel: "Close",

    guide: {
      heading: "Product decisions",
      subheading: "Four choices that shaped the product, and why.",
      nextLabel: "Next",
      restartLabel: "Start over",
      stepLabel: "Step",
      steps: [
        {
          label: "01 · The concept",
          title: "A profile nobody fully controls",
          description:
            "Most social products let you curate a flawless page. Here your profile is a surface other people write on. Giving up that control is the point: it turns a profile into a conversation instead of a showcase.",
          visual: "concept",
        },
        {
          label: "02 · The constraint",
          title: "Scarcity is what makes it matter",
          description:
            "Contributing is deliberately limited. If anyone could fill a profile at will, grids would become noise and nothing left there would carry weight. Rationing forces a choice: where, and on whom.",
          visual: "scarcity",
        },
        {
          label: "03 · The rule",
          title: "Nothing placed is permanent",
          description:
            "A newer spot covers an older one. It keeps profiles alive rather than archived, and makes presence something you maintain instead of something you own. Try it on the grid.",
          visual: "overwrite",
        },
        {
          label: "04 · Where it stands",
          title: "Designed, built, not yet launched",
          description:
            "The product is in active development. What you see here is a simplified reproduction: the full interface and its social mechanics stay withheld until launch.",
          visual: "status",
        },
      ],
      visuals: {
        profile: "Profile",
        after: "After",
        before: "Before",
        scarcity: "limited · refills slowly",
        milestones: ["Concept & product design", "Build & iteration", "Public launch"],
      },
    },

    grid: {
      heading: "A profile grid",
      subheading: "Someone else's profile, and they are on it right now.",
      budget: 12,
      budgetLabel: "spots left",
      liveLabel: "live",
      placingLabel: "is placing…",
      colourLabel: "Colour",
      textLabel: "Write",
      textPlaceholder: "4 max",
      drawLabel: "Draw",
      drawingHeading: "Draw your spot",
      clearLabel: "Clear",
      cancelLabel: "Cancel",
      placeLabel: "Place spot",
      resetLabel: "Reset",
      hint: "Pick a spot on the grid, then leave a colour, a word or a drawing.",
      rule: "Last placement wins: your spot replaces whatever was there before.",
      emptyState: "Select a spot on the grid first.",
      noBudget: "No spots left. Reset the grid to try again.",
      keyboardHint:
        "Keyboard: arrow keys to move between spots, Space to select one, then use the controls below. Drawing requires a pointer.",
      contentNames: {
        colour: "a colour",
        drawing: "a drawing",
        word: "the word",
        heart: "a heart",
        cross: "a cross",
        star: "a star",
        smile: "a smiley",
        bolt: "a bolt",
      },
    },
  },

  about: {
    eyebrow: "About",
    title: "About me",
    paragraphs: [
      "I recently completed a Bachelor in Business Administration at INSEEC BBA, with experience in marketing, project coordination and international business environments.",
      "Through my professional experiences and personal projects, I developed a strong interest in product creation, digital project management and artificial intelligence.",
      "I particularly enjoy understanding a problem, structuring a solution and turning an initial idea into something concrete. My approach combines curiosity, organisation, experimentation and continuous improvement.",
      "I am currently looking for an opportunity in Paris where I can contribute to meaningful projects, learn quickly and create measurable value.",
    ],
    principles: [
      {
        title: "Understand first",
        description:
          "Start from the problem and the people it affects, not from the solution.",
      },
      {
        title: "Structure the work",
        description:
          "Turn a broad idea into a scope, a roadmap and specifications everyone can follow.",
      },
      {
        title: "Ship and iterate",
        description:
          "Build something concrete quickly, test it, then improve it step by step.",
      },
    ],
  },

  skills: {
    eyebrow: "Skills & Tools",
    title: "What I bring to a team.",
    intro:
      "A mix of product and project structure, marketing sensibility, and hands-on use of AI to move faster.",
    categories: [
      {
        title: "Product & Project Management",
        items: [
          "Product strategy",
          "Product roadmapping",
          "Functional specifications",
          "User journeys",
          "User experience",
          "Feature prioritisation",
          "Project coordination",
          "Stakeholder management",
          "Continuous improvement",
        ],
      },
      {
        title: "Marketing & Growth",
        items: [
          "Digital marketing",
          "Content creation",
          "Competitive analysis",
          "KPI reporting",
          "User engagement",
          "Retention thinking",
          "Social media marketing",
          "Event marketing",
          "Partner relations",
          "Negotiation",
        ],
      },
      {
        title: "AI & Technology",
        items: [
          "Generative AI",
          "Prompt engineering",
          "AI-assisted development",
          "Product prototyping",
          "Claude",
          "Antigravity",
          "Next.js",
          "Supabase",
          "Vercel",
        ],
      },
    ],
  },

  awareness: {
    eyebrow: "Perspective",
    title: "Business & Market Awareness",
    text: "I maintain an active interest in financial markets, business models and major geopolitical developments. This broader perspective helps me consider budget constraints, understand the economic environment and account for external risks when developing projects.",
    areas: [
      "Financial literacy",
      "Budget awareness",
      "Economic & market awareness",
      "Geopolitical monitoring",
      "Business model understanding",
    ],
  },

  experience: {
    eyebrow: "Experience",
    title: "How I got here.",
    items: [
      {
        role: "Marketing Assistant",
        organisation: "Wallace Myers International",
        location: "Dublin, Ireland",
        period: "February 2026 – August 2026",
        summary:
          "Supporting recruitment, digital content creation, candidate sourcing and data management using LinkedIn Recruiter, IrishJobs, Bullhorn and AI tools.",
        current: true,
      },
      {
        role: "Founder & Product Lead",
        organisation: "SpotMe",
        period: "July 2025 – Present",
        summary:
          "Leading product strategy, user experience design and AI-assisted development for a social application currently in preparation for launch.",
        current: true,
      },
      {
        role: "Strategic Development Officer",
        organisation: "High-end Hospitality & Wellness Development Project",
        location: "Saint-Martin",
        period: "May 2025 – Present",
        summary:
          "Supporting stakeholder coordination, strategic communication and international partner relations for a project currently in development.",
        current: true,
      },
      {
        role: "Marketing Assistant",
        organisation: "Dauphin Telecom",
        location: "Saint-Martin",
        period: "May 2025 – August 2025",
        summary:
          "Contributed to marketing campaigns, digital content, competitor analysis, reporting and promotional events.",
      },
      {
        role: "Sales & Event Assistant",
        organisation: "Unite Events",
        location: "Malta",
        period: "April 2024 – July 2024",
        summary:
          "Supported event logistics, client relations, commercial proposals, supplier selection and partner negotiations.",
      },
    ],
    education: {
      title: "Education",
      programme: "Bachelor in Business Administration",
      school: "INSEEC BBA",
      location: "Bordeaux, France",
      period: "2022 – 2026",
      details: "Marketing, strategy, project management and business development.",
      international: "Academic semester in London.",
    },
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's build something meaningful.",
    text: "I am currently open to Product, digital project management, Growth Marketing and AI-enabled opportunities in Paris.",
    emailLabel: "Email me",
    linkedinLabel: "View LinkedIn",
    cvLabel: "Download my CV",
    copyLabel: "Copy email address",
    copiedLabel: "Email copied",
  },

  footer: {
    text: "Designed and built to present the work, projects and experience of Alexis Bazire.",
    rights: "All rights reserved.",
  },
};

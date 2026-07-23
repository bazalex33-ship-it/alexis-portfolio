/**
 * ---------------------------------------------------------------------------
 * PORTFOLIO CONTENT — SINGLE SOURCE OF TRUTH
 * ---------------------------------------------------------------------------
 * Every piece of text, link and image path used on the site lives in this file.
 * Edit here and the whole page updates. You should never need to open a
 * component file to change wording, ordering or links.
 *
 * Quick reference:
 *   site        → SEO, page title, meta description, social sharing
 *   personal    → name, title, location, email, LinkedIn, CV link
 *   navigation  → sticky nav items (must match section ids below)
 *   hero        → top of the page
 *   projects    → "Selected Work" case studies (first one is the featured one)
 *   about       → About section
 *   skills      → three skill categories
 *   experience  → chronological timeline + education
 *   contact     → closing section
 *   footer      → footer line
 *
 * NOTE: leave `personal.cvUrl` as an empty string until the CV is online.
 * An empty value automatically hides every "Download CV" button.
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

export type Project = {
  /** Used for the anchor id and React keys. */
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
  /** Label above the tag list — "Tools" or "Skills used". */
  tagsLabel: string;
  tags: string[];
  images: ProjectImage[];
  /**
   * Renders the interactive SpotMe demo in place of the image slots.
   * Remove this line and fill `images` to show screenshots instead.
   */
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

export const site = {
  /** Used for absolute Open Graph URLs. Update after your first deploy. */
  url: "https://alexis-portfolio-sand.vercel.app",
  title: "Alexis Bazire — Product, Digital Projects & AI",
  description:
    "Alexis Bazire combines product thinking, project coordination, marketing and artificial intelligence to design, structure and develop practical solutions. Open to opportunities in Paris.",
  /** Shown on the generated social sharing image. */
  ogTagline: "Product · Digital Projects · Marketing · AI",
  locale: "en_US",
  /** Optional — leave empty if there is no X/Twitter account. */
  twitterHandle: "",
};

export const personal = {
  name: "Alexis Bazire",
  title: "Product, Digital Projects & AI",
  location: "Paris, France",
  availability: "Open to opportunities in Paris",
  email: "bazalex33@gmail.com",
  linkedin: "https://www.linkedin.com/in/alexis-bazire-off/",
  /**
   * Portrait shown in the About section.
   * Set `src` to "" to hide the photo everywhere — the layout adapts on its own.
   * Replace the file in /public and keep a portrait 4:5 ratio, ~1100 px wide.
   */
  photo: {
    src: "/alexis-bazire.jpg",
    alt: "Portrait of Alexis Bazire.",
  },
  /**
   * Leave empty ("") until the CV is available.
   * When empty, all "Download CV" buttons are hidden automatically.
   * Example once ready: "/alexis-bazire-cv.pdf" (file placed in /public).
   */
  cvUrl: "",
};

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Product · Digital Projects · Marketing · AI",
  headline: "I turn ideas into concrete projects.",
  introduction:
    "I combine product thinking, project coordination, marketing and artificial intelligence to design, structure and develop practical solutions.",
  availability:
    "Open to Product, digital project management, Growth Marketing and AI-enabled opportunities in Paris.",
  badge: "Open to opportunities in Paris",
  primaryCta: { label: "Explore my work", href: "#work" },
  secondaryCta: { label: "LinkedIn", href: personal.linkedin },
  tertiaryCta: { label: "Contact me", href: "#contact" },
  /** Small facts displayed under the hero. Keep them factual and short. */
  highlights: [
    { value: "Product", label: "Strategy, UX & roadmapping" },
    { value: "Projects", label: "Coordination & stakeholder management" },
    { value: "AI", label: "AI-assisted design & development" },
  ],
};

export const work = {
  eyebrow: "Selected Work",
  title: "Three projects, three ways of building.",
  intro:
    "A product I lead end to end, an international development project I help coordinate, and a marketing role where I learned to measure what I build.",
};

export const projects: Project[] = [
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
      "I have led the project from its initial concept, combining product strategy, user experience design, project management and AI-assisted development.",
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
    tags: [
      "Claude",
      "Antigravity",
      "Next.js",
      "Supabase",
      "Vercel",
      "Generative AI",
    ],
    // The interactive demo replaces the screenshot slots. To go back to images,
    // delete `demo` below and add entries to this array (see README).
    images: [],
    demo: "spotme",
    note: "SpotMe is currently in active development and has not yet been publicly launched. Selected screens and product elements may be intentionally withheld until launch.",
    featured: true,
  },
  {
    id: "hospitality",
    index: "02",
    name: "High-end Hospitality & Wellness Development Project",
    role: "Strategic Development Officer",
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
];

/**
 * ---------------------------------------------------------------------------
 * INTERACTIVE SPOTME DEMO
 * ---------------------------------------------------------------------------
 * Text for the two frames shown inside the SpotMe case study: the product
 * guide (left) and the playable profile grid (right).
 *
 * Nothing here is connected to the real SpotMe app: no account, no server,
 * no data is sent or stored. It is a stylised reproduction built for the
 * portfolio, with invented users.
 * ---------------------------------------------------------------------------
 */
export const spotmeDemo = {
  eyebrow: "Interactive demo",
  title: "A social network where your image is not yours.",
  intro:
    "On SpotMe, a profile is not a page you control — it is a grid anyone can write on. Read the guide new users get, then place a few spots yourself.",
  disclaimer:
    "Simplified reproduction built for this portfolio. The other users are simulated, and nothing is saved or shared: everything resets when the page reloads.",
  /** The grid opens on demand, so the case study stays compact by default. */
  tryLabel: "Try the mechanic",
  tryHint: "Interactive · opens in place",
  closeLabel: "Close",

  /**
   * Written for a recruiter, not for a future user: each step pairs a product
   * decision with the reasoning behind it. Deliberately describes the tensions
   * that were arbitrated rather than the exact mechanics, which stay unreleased.
   */
  guide: {
    heading: "Product decisions",
    subheading: "Four choices that shaped the product, and why.",
    nextLabel: "Next",
    restartLabel: "Start over",
    stepLabel: "Step",
    steps: [
      {
        label: "01 — The concept",
        title: "A profile nobody fully controls",
        description:
          "Most social products let you curate a flawless page. Here your profile is a surface other people write on. Giving up that control is the point: it turns a profile into a conversation instead of a showcase.",
        visual: "concept" as const,
      },
      {
        label: "02 — The constraint",
        title: "Scarcity is what makes it matter",
        description:
          "Contributing is deliberately limited. If anyone could fill a profile at will, grids would become noise and nothing left there would carry weight. Rationing forces a choice: where, and on whom.",
        visual: "scarcity" as const,
      },
      {
        label: "03 — The rule",
        title: "Nothing placed is permanent",
        description:
          "A newer spot covers an older one. It keeps profiles alive rather than archived, and makes presence something you maintain instead of something you own. Try it on the grid.",
        visual: "overwrite" as const,
      },
      {
        label: "04 — Where it stands",
        title: "Designed, built, not yet launched",
        description:
          "The product is in active development. What you see here is a simplified reproduction — the full interface and its social mechanics stay withheld until launch.",
        visual: "status" as const,
      },
    ],
  },

  grid: {
    heading: "A profile grid",
    subheading: "Someone else's profile — and they are on it right now.",
    /** How many spots the visitor can place in total. */
    budget: 12,
    budgetLabel: "spots left",
    liveLabel: "live",
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
  },
};

export const about = {
  eyebrow: "About",
  title: "About me",
  paragraphs: [
    "I recently completed a Bachelor in Business Administration at INSEEC BBA, with experience in marketing, project coordination and international business environments.",
    "Through my professional experiences and personal projects, I developed a strong interest in product creation, digital project management and artificial intelligence.",
    "I particularly enjoy understanding a problem, structuring a solution and turning an initial idea into something concrete. My approach combines curiosity, organisation, experimentation and continuous improvement.",
    "I am currently looking for an opportunity in Paris where I can contribute to meaningful projects, learn quickly and create measurable value.",
  ],
  /** Short "how I work" points shown beside the text. */
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
};

export const skills = {
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
};

export const experience = {
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
  ] satisfies Experience[],
  education: {
    title: "Education",
    programme: "Bachelor in Business Administration",
    school: "INSEEC BBA",
    location: "Bordeaux, France",
    period: "2022 – 2026",
    details:
      "Marketing, strategy, project management and business development.",
    international: "Academic semester in London.",
  },
};

export const contact = {
  eyebrow: "Contact",
  title: "Let's build something meaningful.",
  text: "I am currently open to Product, digital project management, Growth Marketing and AI-enabled opportunities in Paris.",
  emailLabel: "Email me",
  linkedinLabel: "View LinkedIn",
  cvLabel: "Download my CV",
  copyLabel: "Copy email address",
  copiedLabel: "Email copied",
};

export const footer = {
  text: "Designed and built to present the work, projects and experience of Alexis Bazire.",
};

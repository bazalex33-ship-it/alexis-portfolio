/**
 * ---------------------------------------------------------------------------
 * CONTENU FRANÇAIS
 * ---------------------------------------------------------------------------
 * Tous les textes français du site. Sa contrepartie anglaise est `en.ts`, et
 * les deux fichiers partagent la même structure : TypeScript le vérifie, donc
 * un champ ajouté ici doit l'être là aussi.
 *
 * Les coordonnées, liens et chemins de fichiers ne sont PAS ici : ils vivent
 * une seule fois dans `shared.ts`, pour que les deux langues ne puissent
 * jamais diverger.
 * ---------------------------------------------------------------------------
 */

import { shared } from "./shared";
import type { LocaleContent } from "./types";

export const fr: LocaleContent = {
  htmlLang: "fr",
  ogLocale: "fr_FR",

  site: {
    title: "Alexis Bazire · Produit, Projets digitaux & IA",
    description:
      "Alexis Bazire associe vision produit, coordination de projet et IA pour concevoir, structurer et concrétiser des projets. Ouvert aux opportunités à Paris.",
    shareDescription:
      "Transformer les idées en projets concrets : produit, projets digitaux et IA. Ouvert aux opportunités à Paris.",
    ogTagline: "Produit · Projets digitaux · Marketing · IA",
  },

  personal: {
    title: "Produit, Projets digitaux & IA",
    location: "Paris, France",
    availability: "Ouvert aux opportunités à Paris",
    photoAlt: "Portrait d'Alexis Bazire.",
  },

  languageSwitch: { label: "View in English", short: "EN" },

  navigation: [
    { label: "Projets", href: "#work" },
    { label: "À propos", href: "#about" },
    { label: "Compétences", href: "#skills" },
    { label: "Parcours", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],

  ui: {
    skipToContent: "Aller au contenu",
    getInTouch: "Me contacter",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },

  hero: {
    eyebrow: "Produit · Projets digitaux · Marketing · IA",
    headline: "Je transforme les idées en projets concrets.",
    introduction:
      "J'associe vision produit, coordination de projet, marketing et intelligence artificielle pour concevoir, structurer et développer des solutions concrètes.",
    availability:
      "Ouvert à des opportunités en produit, gestion de projet digital, Growth Marketing et métiers liés à l'IA, à Paris.",
    badge: "Ouvert aux opportunités à Paris",
    primaryCta: { label: "Découvrir mes projets", href: "#work" },
    secondaryCta: { label: "LinkedIn", href: shared.linkedin },
    tertiaryCta: { label: "Me contacter", href: "#contact" },
    highlights: [
      { value: "Produit", label: "Stratégie, UX et roadmap" },
      { value: "Projets", label: "Coordination et gestion des parties prenantes" },
      { value: "IA", label: "Conception et développement assistés par IA" },
    ],
  },

  work: {
    eyebrow: "Projets sélectionnés",
    title: "Trois projets, trois façons de construire.",
    intro:
      "Un produit que je mène de bout en bout, un projet de développement international que j'aide à coordonner, et un poste marketing où j'ai appris à mesurer ce que je construis.",
  },

  projects: [
    {
      id: "spotme",
      index: "01",
      name: "SpotMe",
      role: "Fondateur & Product Lead",
      period: "Juillet 2025 – Aujourd'hui",
      status: "Application sociale en développement actif",
      summary:
        "SpotMe est une application sociale centrée sur la découverte de profils, l'interaction entre utilisateurs et l'engagement communautaire. J'ai mené le projet depuis son concept initial, en combinant stratégie produit, design d'expérience utilisateur, gestion de projet et développement assisté par IA.",
      context: [
        "SpotMe explore de nouvelles façons de découvrir des profils, d'interagir et de s'engager au sein d'une communauté numérique.",
      ],
      contributions: [
        "Défini la vision produit, le concept central et la feuille de route.",
        "Conçu les fonctionnalités principales, les parcours utilisateurs et la navigation.",
        "Traduit les idées produit en spécifications fonctionnelles claires.",
        "Piloté le développement assisté par IA, des spécifications à la mise en œuvre.",
        "Conçu les mécaniques d'engagement, de rétention et d'interaction sociale.",
        "Testé et amélioré le produit au fil d'itérations régulières.",
        "Contribué à la préparation du déploiement, à la sécurité et à l'optimisation des performances.",
      ],
      tagsLabel: "Outils",
      tags: ["Claude", "Antigravity", "Next.js", "Supabase", "Vercel", "IA générative"],
      images: [],
      demo: "spotme",
      note: "SpotMe est en développement actif et n'a pas encore été lancé publiquement. Certains écrans et éléments produit sont volontairement réservés jusqu'au lancement.",
      featured: true,
    },
    {
      id: "hospitality",
      index: "02",
      name: "Projet de développement hôtelier et bien-être haut de gamme",
      role: "Développement stratégique & relations partenaires",
      period: "Mai 2025 – Aujourd'hui",
      location: "Saint-Martin",
      status: "Projet international en cours de développement",
      summary:
        "Contribution au développement stratégique et à la coordination d'un projet hôtelier et bien-être haut de gamme situé à Saint-Martin.",
      context: [
        "Le projet réunit des partenaires internationaux, des investisseurs et des décideurs. Mon rôle porte sur la coordination, la communication stratégique et la préparation des supports utilisés lors des échanges clés.",
      ],
      contributions: [
        "Coordonné les parties prenantes et suivi l'avancement du projet.",
        "Préparé des présentations stratégiques pour les partenaires, investisseurs et décideurs.",
        "Facilité la communication entre les différents contributeurs du projet.",
        "Participé aux discussions stratégiques et aux relations avec les partenaires internationaux.",
        "Contribué à structurer les informations et supports nécessaires au développement.",
        "Identifié des investisseurs, opérateurs hôteliers et partenaires stratégiques potentiels, préparé les supports de présentation et facilité les mises en relation avec le propriétaire.",
      ],
      tagsLabel: "Compétences mobilisées",
      tags: [
        "Coordination de projet",
        "Gestion des parties prenantes",
        "Communication stratégique",
        "Conception de présentations",
        "Collaboration internationale",
      ],
      images: [],
      phasesLabel: "L'évolution du projet",
      phases: [
        {
          label: "Concept bien-être",
          role: "Marketing & concept",
          description: "Positionnement, expérience client et design des services.",
          status: "done",
        },
        {
          label: "Stratégie de destination",
          role: "Stratégie",
          description:
            "Une offre premium élargie, construite autour de la récupération et de la nutrition.",
          status: "done",
        },
        {
          label: "Repositionnement de l'actif",
          role: "Coordination",
          description:
            "Périmètre élargi à la rénovation, à la marque et à la recherche d'opérateur.",
          status: "done",
        },
        {
          label: "Pistes de financement",
          role: "Structuration",
          description:
            "Organisation des informations et des supports destinés aux échanges.",
          status: "done",
        },
        {
          label: "Mise en relation",
          role: "Développement commercial",
          description:
            "Rapprochement d'investisseurs, d'opérateurs et de marques hôtelières.",
          status: "current",
        },
        {
          label: "Implication future possible",
          role: "",
          description:
            "Une implication à plus long terme pourra être envisagée à mesure que le projet avance.",
          status: "ahead",
        },
      ],
      note: "Les noms du projet et de l'établissement ne sont pas rendus publics tant que le développement est en cours.",
    },
    {
      id: "dauphin-telecom",
      index: "03",
      name: "Dauphin Telecom",
      role: "Assistant marketing",
      period: "Mai 2025 – Août 2025",
      location: "Saint-Martin",
      status: "Stage marketing",
      summary:
        "Contribution aux campagnes marketing, à la communication digitale et aux événements commerciaux d'un opérateur télécom implanté à Saint-Martin.",
      context: [],
      contributions: [
        "Contribué à la préparation et au déploiement des campagnes marketing.",
        "Créé des contenus et supports de communication pour les réseaux sociaux.",
        "Accompagné les opérations promotionnelles et les événements commerciaux.",
        "Réalisé des analyses concurrentielles et du marché local.",
        "Suivi les indicateurs de performance marketing.",
        "Préparé des rapports et recommandations à partir des résultats de campagne.",
      ],
      tagsLabel: "Compétences mobilisées",
      tags: [
        "Marketing digital",
        "Création de contenu",
        "Analyse concurrentielle",
        "Reporting KPI",
        "Marketing événementiel",
      ],
      images: [],
    },
  ],

  spotmeDemo: {
    eyebrow: "Démo interactive",
    title: "Un réseau social où votre profil est façonné par les autres.",
    intro:
      "Sur SpotMe, un profil n'est pas une page que vous contrôlez. C'est une grille sur laquelle chacun peut écrire. Parcourez le guide destiné aux nouveaux utilisateurs, puis placez vous-même quelques spots.",
    disclaimer:
      "Reproduction simplifiée réalisée pour ce portfolio. Les autres utilisateurs sont simulés et rien n'est enregistré ni partagé : tout repart à zéro au rechargement de la page.",
    tryLabel: "Essayer la mécanique",
    tryHint: "Interactif · s'ouvre sur place",
    closeLabel: "Fermer",

    guide: {
      heading: "Décisions produit",
      subheading: "Quatre choix qui ont façonné le produit, et pourquoi.",
      nextLabel: "Suivant",
      restartLabel: "Recommencer",
      stepLabel: "Étape",
      steps: [
        {
          label: "01 · Le concept",
          title: "Un profil que personne ne contrôle vraiment",
          description:
            "La plupart des réseaux sociaux permettent de soigner une page parfaite. Ici, votre profil est une surface sur laquelle les autres écrivent. Renoncer à ce contrôle est justement le principe : le profil devient une conversation plutôt qu'une vitrine.",
          visual: "concept",
        },
        {
          label: "02 · La contrainte",
          title: "C'est la rareté qui donne du poids",
          description:
            "Contribuer est volontairement limité. Si chacun pouvait remplir un profil à volonté, les grilles deviendraient du bruit et rien de ce qui y est déposé n'aurait de valeur. Le rationnement impose un choix : où, et chez qui.",
          visual: "scarcity",
        },
        {
          label: "03 · La règle",
          title: "Rien de ce qui est placé n'est définitif",
          description:
            "Un spot récent recouvre un spot plus ancien. Les profils restent vivants au lieu de s'archiver, et la présence devient quelque chose que l'on entretient plutôt que l'on possède. Essayez sur la grille.",
          visual: "overwrite",
        },
        {
          label: "04 · Où en est le projet",
          title: "Conçu, développé, pas encore lancé",
          description:
            "Le produit est en développement actif. Ce que vous voyez ici est une reproduction simplifiée : l'interface complète et ses mécaniques sociales restent réservées jusqu'au lancement.",
          visual: "status",
        },
      ],
      visuals: {
        profile: "Profil",
        after: "Après",
        before: "Avant",
        scarcity: "limité · se recharge lentement",
        milestones: ["Concept et design produit", "Développement et itérations", "Lancement public"],
      },
    },

    grid: {
      heading: "Une grille de profil",
      subheading: "Le profil de quelqu'un d'autre, et il y est en ce moment même.",
      budget: 12,
      budgetLabel: "spots restants",
      liveLabel: "en direct",
      placingLabel: "place un spot…",
      colourLabel: "Couleur",
      textLabel: "Écrire",
      textPlaceholder: "4 max",
      drawLabel: "Dessiner",
      drawingHeading: "Dessinez votre spot",
      clearLabel: "Effacer",
      cancelLabel: "Annuler",
      placeLabel: "Placer le spot",
      resetLabel: "Réinitialiser",
      hint: "Choisissez un spot sur la grille, puis laissez une couleur, un mot ou un dessin.",
      rule: "Le dernier placement l'emporte : votre spot remplace ce qui s'y trouvait.",
      emptyState: "Sélectionnez d'abord un spot sur la grille.",
      noBudget: "Plus de spots disponibles. Réinitialisez la grille pour réessayer.",
      keyboardHint:
        "Clavier : les flèches pour se déplacer entre les spots, Espace pour en sélectionner un, puis les contrôles ci-dessous. Le dessin nécessite une souris ou un écran tactile.",
      contentNames: {
        colour: "une couleur",
        drawing: "un dessin",
        word: "le mot",
        heart: "un cœur",
        cross: "une croix",
        star: "une étoile",
        smile: "un sourire",
        bolt: "un éclair",
      },
    },
  },

  about: {
    eyebrow: "À propos",
    title: "À propos de moi",
    paragraphs: [
      "Je viens de terminer un Bachelor in Business Administration à l'INSEEC BBA, avec des expériences en marketing, en coordination de projet et en environnement international.",
      "À travers mes expériences professionnelles et mes projets personnels, j'ai développé un fort intérêt pour la création de produits, la gestion de projets digitaux et l'intelligence artificielle.",
      "J'aime particulièrement comprendre un problème, structurer une solution et transformer une idée initiale en quelque chose de concret. Mon approche mêle curiosité, organisation, expérimentation et amélioration continue.",
      "Je recherche aujourd'hui une opportunité à Paris pour contribuer à des projets qui ont du sens, apprendre vite et créer de la valeur mesurable.",
    ],
    principles: [
      {
        title: "Comprendre d'abord",
        description:
          "Partir du problème et des personnes concernées, pas de la solution.",
      },
      {
        title: "Structurer le travail",
        description:
          "Transformer une idée large en périmètre, feuille de route et spécifications que chacun peut suivre.",
      },
      {
        title: "Livrer et itérer",
        description:
          "Construire vite quelque chose de concret, le tester, puis l'améliorer étape par étape.",
      },
    ],
  },

  skills: {
    eyebrow: "Compétences & outils",
    title: "Ce que j'apporte à une équipe.",
    intro:
      "Un mélange de structure produit et projet, de sensibilité marketing et d'usage concret de l'IA pour avancer plus vite.",
    categories: [
      {
        title: "Produit & gestion de projet",
        items: [
          "Stratégie produit",
          "Feuille de route produit",
          "Spécifications fonctionnelles",
          "Parcours utilisateurs",
          "Expérience utilisateur",
          "Priorisation des fonctionnalités",
          "Coordination de projet",
          "Gestion des parties prenantes",
          "Amélioration continue",
        ],
      },
      {
        title: "Marketing & growth",
        items: [
          "Marketing digital",
          "Création de contenu",
          "Analyse concurrentielle",
          "Reporting KPI",
          "Engagement utilisateurs",
          "Logique de rétention",
          "Marketing sur les réseaux sociaux",
          "Marketing événementiel",
          "Relations partenaires",
          "Négociation",
        ],
      },
      {
        title: "IA & technologie",
        items: [
          "IA générative",
          "Prompt engineering",
          "Développement assisté par IA",
          "Prototypage produit",
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
    title: "Culture économique et marchés",
    text: "Je suis avec attention les marchés financiers, les modèles économiques et les grandes évolutions géopolitiques. Ce recul m'aide à tenir compte des contraintes budgétaires, à comprendre l'environnement économique et à anticiper les risques externes dans le développement de projets.",
    areas: [
      "Culture financière",
      "Sensibilité budgétaire",
      "Veille économique et marchés",
      "Veille géopolitique",
      "Compréhension des modèles économiques",
    ],
  },

  experience: {
    eyebrow: "Parcours",
    title: "Mon parcours.",
    items: [
      {
        role: "Assistant marketing",
        organisation: "Wallace Myers International",
        location: "Dublin, Irlande",
        period: "Février 2026 – Août 2026",
        summary:
          "Appui au recrutement, à la création de contenu digital, au sourcing de candidats et à la gestion des données via LinkedIn Recruiter, IrishJobs, Bullhorn et des outils d'IA.",
        current: true,
      },
      {
        role: "Fondateur & Product Lead",
        organisation: "SpotMe",
        period: "Juillet 2025 – Aujourd'hui",
        summary:
          "Pilotage de la stratégie produit, du design d'expérience utilisateur et du développement assisté par IA d'une application sociale en préparation de lancement.",
        current: true,
      },
      {
        role: "Chargé de développement stratégique",
        organisation: "Projet de développement hôtelier et bien-être haut de gamme",
        location: "Saint-Martin",
        period: "Mai 2025 – Aujourd'hui",
        summary:
          "Appui à la coordination des parties prenantes, à la communication stratégique et aux relations avec les partenaires internationaux d'un projet en développement.",
        current: true,
      },
      {
        role: "Assistant marketing",
        organisation: "Dauphin Telecom",
        location: "Saint-Martin",
        period: "Mai 2025 – Août 2025",
        summary:
          "Contribution aux campagnes marketing, aux contenus digitaux, à l'analyse concurrentielle, au reporting et aux événements promotionnels.",
      },
      {
        role: "Assistant commercial & événementiel",
        organisation: "Unite Events",
        location: "Malte",
        period: "Avril 2024 – Juillet 2024",
        summary:
          "Appui à la logistique événementielle, à la relation client, aux propositions commerciales, à la sélection de fournisseurs et aux négociations avec les partenaires.",
      },
    ],
    education: {
      title: "Formation",
      programme: "Bachelor in Business Administration",
      school: "INSEEC BBA",
      location: "Bordeaux, France",
      period: "2022 – 2026",
      details: "Marketing, stratégie, gestion de projet et développement commercial.",
      international: "Semestre académique à Londres.",
    },
  },

  contact: {
    eyebrow: "Contact",
    title: "Construisons quelque chose qui compte.",
    text: "Je suis actuellement ouvert à des opportunités en produit, gestion de projet digital, Growth Marketing et métiers liés à l'IA, à Paris.",
    emailLabel: "M'écrire",
    linkedinLabel: "Voir LinkedIn",
    cvLabel: "Télécharger mon CV",
    copyLabel: "Copier l'adresse e-mail",
    copiedLabel: "Adresse copiée",
  },

  footer: {
    text: "Conçu et développé pour présenter le travail, les projets et le parcours d'Alexis Bazire.",
    rights: "Tous droits réservés.",
  },
};

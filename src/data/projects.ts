// src/data/projects.ts

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  demo?: string;      // lien du site en ligne
  github?: string;    // lien du repo
  emoji?: string;     // fallback visuel
  image?: string;     // vignette screenshot (public/images/projects/...)
  status: "online" | "planned";
};

// === Projets en ligne (vedette) ===
export const featuredProjects: Project[] = [
  {
    id: "shop-swisspanda",
    title: "Shop SwissPanda",
    description: "Marketplace e-commerce généraliste avec intégration Stripe et Supabase.",
    tags: ["React", "TypeScript", "Tailwind", "Stripe", "Supabase"],
    demo: "https://shop-swisspanda.ch",
    github: "https://github.com/Florent-Gorski",
    image: "/images/projects/shop-swisspanda.png",
    status: "online",
  },
  {
    id: "limpid-helvetic",
    title: "Limpid Helvetic",
    description: "Site vitrine + formulaire Netlify + email Zoho SMTP.",
    tags: ["React", "TypeScript", "Tailwind", "Netlify"],
    demo: "https://limpid-helvetic.ch",
    image: "/images/projects/limpid-helvetic.png",
    status: "online",
  },
  {
    id: "la-perle-de-velours",
    title: "La Perle de Velours",
    description: "Beauté & bien-être — services, SEO, mobile-first.",
    tags: ["React", "TypeScript", "Tailwind"],
    demo: "https://la-perle-de-velours.netlify.app",
    image: "/images/projects/laperledevelours.png",
    status: "online",
  },
  {
    id: "piliarium-app",
    title: "Piliarium App",
    description: "Application d’apprentissage interactive avec quiz et modules ludiques.",
    tags: ["React", "TypeScript", "Tailwind", "Netlify"],
    demo: "https://piliarium-app.netlify.app",
    image: "/images/projects/piliarium.png",
    status: "online",
  },
  {
    id: "promethemis",
    title: "ProméThémis",
    description: "Plateforme financière suisse — simulateurs AVS, LPP, hypothèque, 3e pilier.",
    tags: ["React", "TypeScript", "Tailwind", "Supabase"],
    demo: "https://promethemis.ch",
    image: "/images/projects/promethemis.png",
    status: "online",
  },
  {
    id: "calc-2025",
    title: "Calculateur Financier Suisse 2025",
    description: "Bundle de calculateurs (AVS, LPP, 3e pilier, hypothèques) avec paramètres 2025.",
    tags: ["React", "TypeScript", "Vite", "Netlify"],
    demo: "https://calculateur-financier-suisse-2025.netlify.app",
    image: "/images/projects/calc-2025.png",
    status: "online",
  },
];

// === Projets à venir ===
export const upcomingProjects: Project[] = [
  {
    id: "volt-nomade",
    title: "Volt-Nomade",
    description: "Catalogue batteries & accessoires mobilité urbaine.",
    tags: ["React", "TypeScript", "Tailwind", "E-commerce"],
    emoji: "🔋",
    status: "planned",
  },
  {
    id: "alfavita",
    title: "AlfaVita",
    description: "Plateforme santé & bien-être, suivi et conseils personnalisés.",
    tags: ["Next.js", "Tailwind", "Supabase"],
    emoji: "💚",
    status: "planned",
  },
  {
    id: "helvetiakids",
    title: "HelvetiaKids",
    description: "Apprentissage ludique pour enfants, contenu interactif et éducatif.",
    tags: ["React", "TypeScript", "Gamification"],
    emoji: "🎨",
    status: "planned",
  },
  {
    id: "humania",
    title: "HumanIA",
    description: "Écosystème d’IA multi-agents pour orchestrer projets et tâches.",
    tags: ["AI", "Agents", "TypeScript"],
    emoji: "🤖",
    status: "planned",
  },
  {
    id: "songlish",
    title: "Songlish",
    description: "Apprentissage de l’anglais à travers les paroles de chansons.",
    tags: ["React", "Tailwind", "Education"],
    emoji: "🎵",
    status: "planned",
  },
  {
    id: "sensoriakids",
    title: "SensoriaKids",
    description: "Jeux sensoriels et éducatifs pour enfants.",
    tags: ["React", "TypeScript", "Gamification"],
    emoji: "🧸",
    status: "planned",
  },
  {
    id: "devia",
    title: "DevIA",
    description: "Suite d’outils IA pour développeurs full-stack.",
    tags: ["AI", "DevTools", "TypeScript"],
    emoji: "💻",
    status: "planned",
  },
  {
    id: "swissbikegear",
    title: "SwissBikeGear",
    description: "E-commerce d’accessoires et équipements vélo en Suisse.",
    tags: ["React", "TypeScript", "E-commerce"],
    emoji: "🚴",
    status: "planned",
  },
];

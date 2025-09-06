export type Project = {
  title: string;
  description: string;
  tags: string[];
  demo?: string;
  github?: string;
  emoji: string; // simple visual instead of image
};

export const projects: Project[] = [
  {
    title: "ProméThémis – simulateurs CH",
    description: "Calculs retraite, 3e pilier, hypothèque, UX claire et rapide.",
    tags: ["React", "TypeScript", "Netlify"],
    demo: "https://promethemis.ch",
    github: "https://github.com/Florent-Gorski",
    emoji: "🛍️",
  },
  {
    title: "Limpid-Helvetic – site beauté",
    description: "Vitrine élégante avec prise de contact et design pastel.",
    tags: ["Vite", "Tailwind", "Netlify"],
    demo: "https://limpid-helvetic.ch",
    github: "https://github.com/Florent-Gorski",
    emoji: "💎",
  },
  {
    title: "SuperLucIA – orchestrations IA",
    description: "Pipeline agents + déploiements rapides (Functions, Supabase).",
    tags: ["TypeScript", "Functions", "Supabase"],
    demo: "https://superlucia.ovh",
    github: "https://github.com/Florent-Gorski",
    emoji: "🤖",
  },
];

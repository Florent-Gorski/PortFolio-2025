export type Project = {
  name: string
  desc: string
  tech: string
  link?: string
  status?: 'online' | 'wip' | 'private' | 'soon'
}

export const projects: Project[] = [
  // 🔷 Projets en ligne (ordre mis en avant)
  {
    name: 'Shop SwissPanda',
    desc: 'Marketplace généraliste reliant fournisseurs et clients en Suisse.',
    tech: 'Supabase, Stripe, React, Node',
    link: 'https://shop-swisspanda.ch',
    status: 'online',
  },
  {
    name: 'Limpid-Helvetic',
    desc: 'Calculateur financier suisse – Netlify + SMTP Zoho.',
    tech: 'React, TypeScript, Vite, Tailwind',
    link: 'https://limpid-helvetic.ch/',
    status: 'online',
  },
  {
    name: 'La Perle de Velours',
    desc: 'Concept créatif haut de gamme, création visuelle et identité.',
    tech: 'Branding, UI/UX, Web',
    link: 'https://la-perle-de-velours.netlify.app/',
    status: 'online',
  },
  {
    name: 'Piliarium-App',
    desc: "Application éducative pour courtiers (3e pilier) avec quiz et graphiques.",
    tech: 'React, TypeScript, Vite',
    link: 'https://piliarium-app.netlify.app/',
    status: 'online',
  },
  {
    name: 'ProméThémis',
    desc: 'Site de conseil financier premium (Suisse), SEO et responsive.',
    tech: 'Next.js, Tailwind, Netlify / OVH',
    link: 'https://promethemis.ch/',
    status: 'online',
  },
  {
    name: 'Calculateur Financier Suisse 2025',
    desc: 'Outil de simulation fiscale et financière (documentation incluse).',
    tech: 'React, TypeScript',
    link: 'https://calculateur-financier-suisse-2025.netlify.app/',
    status: 'online',
  },

  // 🟡 Bientôt (laisse les cartes visibles avec badge)
  {
    name: 'Songlish',
    desc: "Apprentissage de l’anglais par la musique, pipeline IA semi-autonome.",
    tech: 'React, GPT-4o, Vercel',
    status: 'soon',
  },
  {
    name: 'AlphaVital',
    desc: 'Coaching santé & performance personnelle (mobile-first).',
    tech: 'React Native, AI API',
    status: 'soon',
  },
]

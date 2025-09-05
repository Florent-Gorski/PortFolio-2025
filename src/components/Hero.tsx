import { Github, Linkedin, Mail, Sparkles } from 'lucide-react'

export default function Hero()
{
  return (
    <header className="border-b border-neutral-200/60 dark:border-neutral-800 bg-gradient-to-b from-white/60 to-transparent dark:from-neutral-950/60">
      <div className="container py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs px-2.5 py-1 rounded-full border border-neutral-200/60 dark:border-neutral-800">
              <Sparkles className="size-3" />
              <span>Entrepreneur & créateur web/mobile</span>
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
              Flo — Portfolio professionnel
            </h1>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-2xl">
              Je conçois des produits digitaux souverains, performants et élégants : IA, éducation, finance, et outils web.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#projets" className="btn">Voir mes projets</a>
              <a href="#contact" className="btn">Me contacter</a>
            </div>
          </div>
          <nav className="flex items-center gap-3">
            <a className="btn" href="https://github.com/" target="_blank" rel="noreferrer noopener">
              <Github className="size-4" /> GitHub
            </a>
            <a className="btn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer noopener">
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <a className="btn" href="#contact">
              <Mail className="size-4" /> Email
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

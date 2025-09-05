import { Github, Linkedin, Mail, Sparkles } from 'lucide-react'

export default function Hero()
{
  return (
    <header className="flo-header">
      <div className="container flo-header__inner">
        <div>
          <div className="inline-flex items-center gap-2 text-xs px-2.5 py-1 rounded-full border border-white/10">
            <Sparkles className="size-3" />
            <span>Entrepreneur & créateur web/mobile</span>
          </div>
          <h1 className="mt-3 flo-logo">Flo — Portfolio professionnel</h1>
          <p className="flo-tagline mt-2 max-w-2xl">
            Je conçois des produits digitaux souverains, performants et élégants : IA, éducation, finance, et outils web.
          </p>
          <nav className="mt-4 flex flex-wrap gap-3">
            <a href="#projets" className="btn btn--neon-green">Voir mes projets</a>
            <a href="#contact" className="btn btn--neon-pink">Me contacter</a>
          </nav>
        </div>

        <div className="flex items-center gap-5">
          {/* Liens sociaux */}
          <nav className="flo-social">
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

          {/* Avatar avec glow */}
          <div className="flo-avatar-wrap">
            <img
              src="/portrait.jpeg"
              alt="Photo de Florent Gorski"
              className="flo-avatar"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

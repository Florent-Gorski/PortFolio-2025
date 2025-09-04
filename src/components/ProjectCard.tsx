import { ExternalLink, Rocket, Wrench } from 'lucide-react'
import Badge from './Badge'
import type { Project } from '@/data/projects'


export default function ProjectCard({ p }: { p: Project })
{
  return (
    <article className="card p-5 h-full flex flex-col">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
        {p.status === 'online' && <Badge><Rocket className="size-3 mr-1" />En ligne</Badge>}
        {p.status === 'soon' && <Badge><Wrench className="size-3 mr-1" />Bientôt</Badge>}
      </div>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.desc}</p>
      <p className="mt-3 text-xs text-neutral-500">Tech : {p.tech}</p>
      <div className="mt-4 pt-3 border-t border-neutral-200/60 dark:border-neutral-800 flex-1">
        {p.link ? (
          <a
            href={p.link}
            target="_blank"
            rel="noreferrer noopener"
            className="btn"
          >
            <ExternalLink className="size-4" /> Voir le projet
          </a>
        ) : (
          <span className="text-sm text-neutral-500">Lien à venir</span>
        )}
      </div>
    </article>
  )
}
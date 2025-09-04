import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

export default function Projects()
{
  return (
    <section id="projets" className="container py-12">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-bold">Projets</h2>
        <p className="text-sm text-neutral-500">{projects.length} projets</p>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>
    </section>
  )
}

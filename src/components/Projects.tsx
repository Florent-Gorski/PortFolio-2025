import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

export default function Projects()
{
  return (
    <section id="projets" className="flo-section">
      <div className="container">
        <div className="flo-section-head flex items-end justify-between gap-4">
          <h2>Projets</h2>
          <p className="text-sm text-neutral-400">{projects.length} projets</p>
        </div>

        <div className="flo-grid">
          {projects.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

// src/sections/Projects.tsx
import React from "react";
import { featuredProjects, upcomingProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection()
{
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Titre section */}
        <header className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Projets <span className="text-violet-300">mis en ligne</span>
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Sélection de projets déployés (Netlify & GitHub), cohérents avec
              l’identité graphique du portfolio.
            </p>
          </div>
        </header>

        {/* Grille Vedette */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* Projets à venir */}
        <div className="mt-16">
          <h3 className="mb-3 text-2xl font-semibold text-white">
            Projets à venir
          </h3>
          {upcomingProjects.length === 0 ? (
            <p className="text-sm text-zinc-400">
              Tu peux m’envoyer la liste et je les ajouterai ici (titre, courte
              description, stack prévue, image optionnelle).
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

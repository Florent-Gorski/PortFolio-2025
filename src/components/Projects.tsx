import React from "react";
import { featuredProjects, upcomingProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () =>
{
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Projets en ligne */}
        <h2 className="text-3xl font-bold mb-8">Projets mis en ligne</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* Projets à venir */}
        <h2 className="text-3xl font-bold mt-16 mb-8">Projets à venir</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

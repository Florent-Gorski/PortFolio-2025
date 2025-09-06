import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Projects: React.FC = () =>
{
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Projets en vedette</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Quelques projets récents.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

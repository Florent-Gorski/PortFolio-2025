import React from "react";
import type { Project } from "../data/projects";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) =>
{
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg card-hover fade-in transition-colors">
      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
        <span className="text-6xl">{project.emoji}</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((t) => (
            <span key={t} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm dark:bg-blue-900/30 dark:text-blue-300">
              {t}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 font-medium">
              Démo
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 font-medium">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

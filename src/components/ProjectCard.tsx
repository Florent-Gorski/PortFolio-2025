import React from "react";
import type { Project } from "../data/projects";

// Styles badges statut
const statusStyle: Record<Project["status"], string> = {
  online:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  planned:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
};

// Styles badges stack par techno
const stackColors: Record<string, string> = {
  React: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
  TypeScript: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
  Tailwind: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
  Vite: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
  Supabase: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  Stripe: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
  Netlify: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
  AI: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
  DevTools: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100",
  Gamification: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  Education: "bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-300",
};

const defaultStackStyle =
  "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-2.5 py-1 rounded-md text-xs font-medium";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) =>
{
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg card-hover fade-in transition-colors">
      {/* Image vignette OU emoji */}
      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <span className="text-6xl">{project.emoji}</span>
        )}
      </div>

      {/* Contenu carte */}
      <div className="p-6">
        {/* Badge statut */}
        <span
          className={`inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full ${statusStyle[project.status]}`}
        >
          {project.status === "online" ? "En ligne" : "À venir"}
        </span>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        {/* Tags stack */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((t) => (
              <span
                key={t}
                className={`px-2.5 py-1 rounded-md text-xs font-medium ${stackColors[t] || defaultStackStyle
                  }`}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Liens */}
        <div className="flex space-x-4">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Démo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 font-medium"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

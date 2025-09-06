import React from "react";

const About: React.FC = () =>
{
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">À propos</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Développeur web basé en Suisse (Lausanne), je conçois des interfaces sobres, accessibles et rapides.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Stack cœur : React + TypeScript + Vite + Tailwind • Netlify Functions / Supabase • CI/CD & bonnes pratiques Git.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://promethemis.ch" target="_blank" rel="noopener"
                className="text-blue-600 hover:text-blue-800 transition-colors">ProméThémis</a>
              <a href="https://limpid-helvetic.ch" target="_blank" rel="noopener"
                className="text-blue-600 hover:text-blue-800 transition-colors">Limpid-Helvetic</a>
              <a href="https://github.com/Florent-Gorski" target="_blank" rel="noopener"
                className="text-blue-600 hover:text-blue-800 transition-colors">GitHub</a>
            </div>
          </div>

          <div className="fade-in">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
              <div className="flex items-center space-x-6">
                <img src="/images/portrait-about.png" alt="Florent Gorski portrait"
                  className="w-24 h-24 rounded-xl object-cover ring-2 ring-white/50" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">En bref</h3>
                  <p className="text-gray-600 dark:text-gray-300">Lausanne, Suisse • Remote / Présentiel</p>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <div className="flex items-center"><span className="text-2xl mr-3">🎓</span><span className="text-gray-600 dark:text-gray-300">Autodidacte + cursus IT</span></div>
                <div className="flex items-center"><span className="text-2xl mr-3">💼</span><span className="text-gray-600 dark:text-gray-300">Projets web & apps multi-domaines</span></div>
                <div className="flex items-center"><span className="text-2xl mr-3">🚀</span><span className="text-gray-600 dark:text-gray-300">Optimisation perfs & DX</span></div>
                <div className="flex items-center"><span className="text-2xl mr-3">☕</span><span className="text-gray-600 dark:text-gray-300">Café + refactor heureux</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

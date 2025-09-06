import React from "react";

const Hero: React.FC = () =>
{
  return (
    <section id="home" className="py-20 gradient-bg text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        {/* Portrait */}
        <div className="shrink-0">
          <img
            src="/images/portrait-hero.png"
            alt="Florent Gorski"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full ring-4 ring-white/20 shadow-xl object-cover"
            loading="eager"
          />
        </div>

        {/* Texte */}
        <div className="fade-in">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Développeur Web — React · TypeScript · Tailwind
          </h1>
          <p className="mt-4 text-white/90 max-w-2xl">
            Je conçois des interfaces rapides, propres, et prêtes à être déployées.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#projects"
              className="px-5 py-2 rounded-xl bg-white/10 ring-1 ring-white/20 hover:bg-white/20 transition"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-xl bg-white text-gray-900 hover:bg-gray-100 transition"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

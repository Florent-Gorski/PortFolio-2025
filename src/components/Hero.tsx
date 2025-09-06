import React from "react";

const Hero: React.FC = () =>
{
  return (
    <section id="home" className="gradient-bg min-h-[90vh] flex items-center justify-center text-white">
      <div className="text-center px-6">
        <div className="w-32 h-32 mx-auto mb-8 rounded-full ring-4 ring-white/30 overflow-hidden bg-white/10">
          <img src="/images/portrait-hero.png" alt="Florent Gorski" className="w-full h-full object-cover" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">Florent Gorski</h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 fade-in">Développeur web full-stack</p>
        <p className="text-lg mb-12 max-w-2xl mx-auto text-white/80 fade-in">
          Expériences modernes et performantes avec React, TypeScript, Tailwind, Netlify &amp; Supabase.
        </p>

        <div className="space-x-4 fade-in">
          <a href="#projects" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Voir mes projets
          </a>
          <a href="#contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

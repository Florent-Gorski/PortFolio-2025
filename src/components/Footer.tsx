import React from "react";

const Footer: React.FC = () =>
{
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Florent Gorski</h3>
          <p className="text-gray-400 mb-6">Construire le Web, une ligne de code à la fois.</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Florent-Gorski" target="_blank" rel="noopener" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            <a href="mailto:florentgorski@proton.me" className="text-gray-400 hover:text-white transition-colors">Email</a>
            <a href="https://promethemis.ch" target="_blank" rel="noopener" className="text-gray-400 hover:text-white transition-colors">ProméThémis</a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400">© {new Date().getFullYear()} Florent Gorski. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

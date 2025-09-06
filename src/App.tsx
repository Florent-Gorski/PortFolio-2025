import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects"; // ✅ source officielle
import Skills from "./components/skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () =>
{
  const [isDark, setIsDark] = useState<boolean>(() =>
  {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() =>
  {
    const html = document.documentElement;
    if (isDark) html.classList.add("dark");
    else html.classList.remove("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // Active link on scroll
  useEffect(() =>
  {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('nav a[href^="#"]');
    const handler = () =>
    {
      let current = "";
      sections.forEach((sec) =>
      {
        const top = sec.offsetTop;
        if (window.scrollY >= top - 200) current = sec.id;
      });
      navLinks.forEach((link) =>
      {
        link.classList.remove("text-blue-600");
        if (link.getAttribute("href") === `#${current}`) link.classList.add("text-blue-600");
      });
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm dark:bg-gray-900/90 transition-colors">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800 dark:text-white">FG</div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#home" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Accueil</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">À propos</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Projets</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Compétences</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Contact</a>
              <button
                onClick={() => setIsDark((v) => !v)}
                className="ml-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                aria-label="Basculer le thème"
              >
                <span>{isDark ? "☀️" : "🌙"}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <Hero />
        <About />
        <Projects /> {/* ✅ la bonne section */}
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;

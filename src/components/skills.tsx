import React, { useEffect, useRef } from "react";

const SkillBar: React.FC<{ label: string; value: number; className: string }> = ({ label, value, className }) => (
  <div>
    <div className="flex justify-between mb-2">
      <span className="text-gray-700 dark:text-gray-300">{label}</span>
      <span className="text-gray-500 dark:text-gray-400">{value}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
      <div className={`skill-bar h-2 rounded-full ${className}`} style={{ width: 0 }} data-width={`${value}%`} />
    </div>
  </div>
);

const Skills: React.FC = () =>
{
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() =>
  {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) =>
      {
        entries.forEach((e) =>
        {
          if (e.isIntersecting) {
            el.querySelectorAll<HTMLElement>(".skill-bar").forEach((bar) =>
            {
              const width = bar.getAttribute("data-width") || "0%";
              setTimeout(() => (bar.style.width = width), 200);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Compétences & technologies</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Un aperçu synthétique.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="fade-in">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Frontend</h3>
            <div className="space-y-4">
              <SkillBar label="React / Next.js" value={90} className="bg-blue-600" />
              <SkillBar label="JavaScript / TypeScript" value={85} className="bg-green-600" />
              <SkillBar label="CSS / Tailwind" value={88} className="bg-purple-600" />
            </div>
          </div>

          <div className="fade-in">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Backend</h3>
            <div className="space-y-4">
              <SkillBar label="Node.js / Express" value={82} className="bg-yellow-600" />
              <SkillBar label="MongoDB / PostgreSQL" value={78} className="bg-red-600" />
              <SkillBar label="AWS / Docker" value={75} className="bg-indigo-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

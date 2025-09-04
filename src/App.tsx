import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'


export default function App()
{
  return (
    <div className="min-h-screen">
      <Hero />
      <main>
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-neutral-200/60 dark:border-neutral-800">
        <div className="container py-6 text-sm text-neutral-500">© {new Date().getFullYear()} Flo — Tous droits réservés.</div>
      </footer>
    </div>
  )
}
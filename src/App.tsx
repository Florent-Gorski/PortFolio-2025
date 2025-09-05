import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Songlish from '@/components/Songlish'
import Skills from '@/components/skills'
import Footer from '@/components/Footer'
import VerticalLabel from '@/components/VerticaLabel'

export default function App()
{
  return (
    <>
      <VerticalLabel />
      <Hero />
      <Projects />
      <Songlish />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

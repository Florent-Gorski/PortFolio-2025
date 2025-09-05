import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Songlish from '@/components/Songlish'
import Skills from '@/components/skills'
import Footer from '@/components/Footer'

export default function App()
{
  return (
    <>
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

import React from 'react'

type Note = {
  title: string
  desc: string
  href: string
}

const notes: Note[] = [
  {
    title: 'Prononciation & rythme',
    desc: 'Synchroniser syllabes et tempo pour ancrer la mémoire auditive.',
    href: '#',
  },
  {
    title: 'Vocabulaire en contexte',
    desc: 'Comprendre par le refrain : répétition espacée intégrée.',
    href: '#',
  },
  {
    title: 'Phrases utiles',
    desc: 'Construire des phrases à partir des hooks mélodiques.',
    href: '#',
  },
]

export default function Songlish()
{
  return (
    <section id="songlish" className="flo-section">
      <div className="container">
        <header className="flo-section-head">
          <h2>Songlish</h2>
          <p>Des notes, des mots, des cartes courtes — apprends en rythme.</p>
        </header>

        <div className="flo-grid flo-grid--songlish">
          {notes.map((n) => (
            <article key={n.title} className="flo-note">
              <div className="flo-bars" aria-hidden="true">
                <span></span><span></span><span></span><span></span><span></span>
              </div>
              <h3>{n.title}</h3>
              <p>{n.desc}</p>
              <a className="flo-link" href={n.href}>Read More</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

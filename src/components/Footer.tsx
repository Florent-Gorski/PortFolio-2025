import React from 'react'

export default function Footer()
{
  const year = new Date().getFullYear()
  return (
    <footer className="flo-footer" id="contact">
      <div className="container flo-footer__inner">
        <p>© {year} Flo — Tous droits réservés.</p>
        <nav className="flo-footer__links" aria-label="Liens rapides">
          <a href="#projets">Projets</a>
          <a href="#songlish">Songlish</a>
          <a href="#skills">Skills</a>
        </nav>
      </div>
    </footer>
  )
}

import React from 'react'

export default function Skills()
{
  return (
    <section id="skills" className="flo-section">
      <div className="container">
        <header className="flo-section-head">
          <h2>Compétences</h2>
          <p>Stack moderne, composants soignés, performances et accessibilité.</p>
        </header>

        <ul className="flo-skill-grid" role="list">
          <li className="flo-skill"><i className="fa-brands fa-html5" aria-hidden="true"></i><span>HTML5</span></li>
          <li className="flo-skill"><i className="fa-brands fa-css3-alt" aria-hidden="true"></i><span>CSS3</span></li>
          <li className="flo-skill"><i className="fa-brands fa-js" aria-hidden="true"></i><span>JavaScript</span></li>
          <li className="flo-skill"><i className="fa-brands fa-react" aria-hidden="true"></i><span>React</span></li>
          <li className="flo-skill"><i className="fa-solid fa-code" aria-hidden="true"></i><span>TypeScript</span></li>
          <li className="flo-skill"><i className="fa-brands fa-git-alt" aria-hidden="true"></i><span>Git</span></li>
          <li className="flo-skill"><i className="fa-solid fa-cloud-arrow-up" aria-hidden="true"></i><span>Netlify</span></li>
          <li className="flo-skill"><i className="fa-solid fa-gauge" aria-hidden="true"></i><span>Perf/A11y</span></li>
        </ul>
      </div>
    </section>
  )
}

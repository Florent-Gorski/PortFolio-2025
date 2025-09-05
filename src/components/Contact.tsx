export default function Contact()
{
  return (
    <section id="contact" className="flo-section">
      <div className="container">
        <h2>Contact</h2>
        <p className="mt-3 text-neutral-300">
          Envoyez-moi un email à{' '}
          <a className="underline" href="mailto:contact@votredomaine.ch">contact@votredomaine.ch</a> ou via LinkedIn.
        </p>
        <p className="mt-1 text-sm text-neutral-500">(Formulaire Netlify ou SMTP Zoho possible plus tard.)</p>

        <div className="mt-4 flex gap-10">
          <a href="mailto:contact@votredomaine.ch" className="btn btn--neon-green">Écrire un email</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer noopener" className="btn btn--neon-pink">Profil LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

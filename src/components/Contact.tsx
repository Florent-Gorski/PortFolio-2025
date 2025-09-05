export default function Contact()
{
  const email = "florentgorski@proton.me"
  const subject = encodeURIComponent("Contact depuis le Portfolio")
  const body = encodeURIComponent("Bonjour Flo,\n\nJe vous contacte au sujet de ...\n\nCordialement,\n")
  const mailto = `mailto:${email}?subject=${subject}&body=${body}`

  return (
    <section id="contact" className="flo-section">
      <div className="container">
        <h2>Contact</h2>
        <p className="mt-3 text-neutral-300">
          Vous pouvez m’écrire à{" "}
          <a className="underline" href={mailto}>{email}</a>
          {" "}ou via LinkedIn.
        </p>
        <p className="mt-1 text-sm text-neutral-500">(Formulaire Netlify ou SMTP Zoho possible plus tard.)</p>

        <div className="mt-4 flex gap-10">
          <a href={mailto} className="btn btn--neon-green">Écrire un e-mail</a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn--neon-pink"
          >
            Profil LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

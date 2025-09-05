export default function Contact()
{
  return (
    <section id="contact" className="container py-12">
      <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
      <p className="mt-3 text-neutral-700 dark:text-neutral-300">
        Envoyez-moi un email à{' '}
        <a className="underline" href="mailto:contact@votredomaine.ch">contact@votredomaine.ch</a> ou via LinkedIn.
      </p>
      <p className="mt-1 text-sm text-neutral-500">(Formulaire Netlify ou SMTP Zoho possible plus tard.)</p>
    </section>
  )
}

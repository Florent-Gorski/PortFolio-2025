import React, { useState } from "react";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

const Contact: React.FC = () =>
{
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
  {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, string> = {
      "form-name": "contact", // IMPORTANT: doit matcher le name du formulaire
    };
    formData.forEach((v, k) => (payload[k] = String(v)));

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("err");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Travaillons ensemble</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Un email et on démarre.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Colonne infos (la tienne à gauche) ... */}

          <div className="fade-in">
            <form
              name="contact"           // <- nom du formulaire (doit matcher "form-name")
              method="POST"
              data-netlify="true"      // <- active Netlify Forms
              data-netlify-honeypot="bot-field"
              onSubmit={onSubmit}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-colors"
            >
              {/* Champ caché requis par Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              {/* Honeypot anti-bot (caché) */}
              <p className="hidden">
                <label>Ne pas remplir: <input name="bot-field" /></label>
              </p>

              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Nom</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">E-mail</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Parlez-moi de votre projet..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Envoi…" : "Envoyer"}
              </button>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 text-center">
                {status === "idle" && "Formulaire de démonstration – pas d’envoi réel"}
                {status === "ok" && "Merci ! Votre message a bien été envoyé ✅"}
                {status === "err" && "Oups. Une erreur est survenue. Réessayez."}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

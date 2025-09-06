import React from "react";

const Contact: React.FC = () =>
{
  const onSubmit = (e: React.FormEvent) =>
  {
    e.preventDefault();
    alert("Merci pour votre message ! Ceci est un formulaire de démonstration.");
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Travaillons ensemble</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Un email et on démarre.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="fade-in">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 dark:text-blue-400">📧</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">E-mail</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <a href="mailto:florentgorski@proton.me" className="underline hover:no-underline">florentgorski@proton.me</a>
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 dark:text-green-400">🌐</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Site</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <a href="https://promethemis.ch" target="_blank" rel="noopener" className="underline hover:no-underline">promethemis.ch</a>
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 dark:text-purple-400">📍</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Localisation</p>
                  <p className="text-gray-600 dark:text-gray-300">Lausanne, Suisse</p>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in">
            <form onSubmit={onSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-colors">
              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Nom</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Votre nom" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">E-mail</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="votre@email.com" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Parlez-moi de votre projet..."></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Envoyer</button>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 text-center">Formulaire de démo – pas d’envoi réel</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

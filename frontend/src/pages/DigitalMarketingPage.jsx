import React from 'react';

const DigitalMarketingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 transition duration-300 mt-10">
      <h1 className="text-4xl font-bold mb-4">Marketing Digital</h1>
      <p className="text-lg mb-6">
        Te ayudamos a llegar a más clientes mediante estrategias efectivas de marketing digital.
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>Gestión de redes sociales</li>
        <li>Publicidad en línea (Google Ads, Facebook Ads)</li>
        <li>SEO y optimización web</li>
      </ul>
    </div>
  );
};

export default DigitalMarketingPage;
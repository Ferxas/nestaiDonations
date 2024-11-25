import React from 'react';

const AIPage = () => {
  const scrollToForm = () => {
    document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition duration-300">
      {/* Primer Bloque */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-gray-900 text-purple-500">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in-down bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
          Aceleradora de Inteligencia Artificial para ONG
        </h1>
        <p className="text-lg mb-6 animate-fade-in text-white">
          Acompañamos a las entidades sociales para incorporar soluciones tecnológicas y de Inteligencia Artificial a sus estrategias de marketing y fundraising.
        </p>
        <button
          onClick={scrollToForm}
          className="bg-purple-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-purple-700 transition duration-300 "
        >
          Accede al Formulario
        </button>
      </div>

      {/* Segundo Bloque con texto encima del video */}
      <div className="relative p-8 bg-gray-900 text-purple-500">
        <video
          src="../assets/media/videos/3141208-uhd_3840_2160_25fps.mp4" // Cambia la ruta a tu video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[50vh] object-cover rounded-lg shadow-lg"
        ></video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-8">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in-down">AcademAI</h1>
          <p className="text-lg mb-4 animate-fade-in">by NestAI</p>
          <p className="text-lg mb-4 animate-fade-in">
            Ponemos a tu alcance las herramientas de Inteligencia Artificial que mejor se adaptan al ecosistema de tu entidad.
          </p>
          <p className="text-lg mb-4 animate-fade-in">
            La Inteligencia Artificial es una tecnología que ha llegado de manera disruptiva a nuestras vidas. En el tiempo que llevamos desarrollando estrategias innovadoras para ONG, implementando Inteligencia Artificial en el proceso, hemos ido descubriendo las herramientas de IA que se ajustan mejor a la realidad del Tercer Sector y son capaces de potenciar sus procesos.
          </p>
        </div>
      </div>

      {/* Formulario */}
      <div id="form-section" className="p-8 flex flex-col lg:flex-row lg:items-start lg:space-x-8 bg-gray-900 text-gray-100">
        {/* Texto adicional */}
        <div className="flex-1 text-lg space-y-4">
          <h2 className="text-2xl font-bold text-purple-500">
            Desbloquea el poder de la Inteligencia Artificial
          </h2>
          <p>
            Aceleramos las habilidades de los equipos de tu entidad para que seáis capaces de aplicar el potencial de las
            herramientas de Inteligencia Artificial a vuestros procesos de marketing y fundraising.
          </p>
          <p>
            Agenda una reunión con nuestro equipo para que conozcamos vuestras necesidades y podamos hacerte una propuesta a
            la medida de vuestra organización.
          </p>
        </div>

        {/* Formulario */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex-1">
          <h2 className="text-2xl font-bold mb-4">Formulario</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded-lg bg-gray-700 text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-lg bg-gray-700 text-white"
              />
            </div>
            <div>
              <label htmlFor="organization" className="block text-sm font-medium">
                Organización
              </label>
              <input
                type="text"
                id="organization"
                className="w-full p-2 border rounded-lg bg-gray-700 text-white"
              />
            </div>
            <div className="flex items-start">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm">
                Acepto los términos y condiciones
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white p-2 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIPage;


import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import fondoImagen from '../assets/media/image/home.jpg'; // Ajusta la ruta según tu estructura de carpetas

const HomePage = () => {
  const scrollToContent = () => {
    document.getElementById("content").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sección fija con imagen, título y botón */}
      <div
        className="relative h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${fondoImagen})`,
        }}
      >
        {/* Capa de oscurecimiento para mejorar la legibilidad */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Contenido centrado vertical y horizontalmente */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-5xl font-bold text-white mb-8">
            Fundraising 
          </h1>
          <h1 className="text-5xl font-bold text-white mb-8">
            & Marketing
          </h1>
          <h1 className="text-4xl font-bold text-white mb-8">
            para ONG
          </h1>
          <button
            onClick={scrollToContent}
            className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-md flex items-center justify-center space-x-2 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <span>Descubre más</span>
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Sección desplazable con texto centrado */}
      <div
        id="content"
        className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-8 py-16 text-center space-y-6"
      >
              <h1 className="text-6xl font-semibold">
          NestAI
        </h1>
        <h1 className="text-4xl font-semibold">
          Transformamos la Innovación en Impacto Social
        </h1>
        <p className="text-xl">
          Trabajamos junto a las ONG, guiándolas hacia el cumplimiento de sus metas, adaptándonos a su lenguaje y
          maximizando el uso de sus recursos.
        </p>
      </div>
    </div>
  );
};

export default HomePage;




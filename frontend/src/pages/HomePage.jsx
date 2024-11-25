import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { toast } from 'react-toastify';

const HomePage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col justify-center items-center text-center transition duration-300">
      <h1 className="text-5xl font-bold mb-4">¡Bienvenido a la Plataforma de Donaciones!</h1>
      <p className="text-lg mb-6">Gestiona tus donaciones y accede a datos detallados.</p>
      <button
        onClick={() => toast.info("¡Descubre más!")}
        className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-md flex items-center space-x-2 hover:bg-gray-100 transition"
      >
        <span>Descubre más</span>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default HomePage;
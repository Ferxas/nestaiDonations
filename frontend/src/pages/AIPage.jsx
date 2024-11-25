const AIPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 transition duration-300 mt-10">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in-down">
        Servicios de Inteligencia Artificial
      </h1>
      <p className="text-lg mb-6 animate-fade-in">
        Ofrecemos soluciones innovadoras de Inteligencia Artificial para optimizar los procesos de
        tu empresa y mejorar la experiencia del cliente.
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li className="mb-2 animate-fade-in">
          <span className="font-bold">Automatización:</span> Implementamos sistemas de
          automatización personalizados para tus necesidades.
        </li>
        <li className="mb-2 animate-fade-in">
          <span className="font-bold">Análisis de Datos:</span> Generamos insights a partir de tus
          datos con algoritmos avanzados de IA.
        </li>
        <li className="mb-2 animate-fade-in">
          <span className="font-bold">Chatbots:</span> Diseñamos asistentes virtuales que
          interactúan eficientemente con tus clientes.
        </li>
      </ul>
    </div>
  );
};

export default AIPage;
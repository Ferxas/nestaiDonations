import React from 'react';
// Importa la imagen y el video
import backgroundImage from '../assets/media/image/strategy.jpg';
import gifSrc from '../assets/media/videos/strategy.gif';

const DigitalStrategyPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition duration-300">
      {/* Imagen, Título y Subtítulo */}
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center space-y-4">
          <h1 className="text-5xl font-bold text-white">Estrategia Digital</h1>
          <p className="text-lg text-gray-200">
            Llevamos tu negocio al siguiente nivel con estrategias digitales innovadoras.
          </p>
        </div>
      </div>
      {/* Texto Principal */}
      <div className="p-8 mt-10">
        <h1 className="text-4xl font-bold mb-4">Email Marketing para ONGs: Claves para Campañas que Generan Impacto</h1>
        <p className="text-lg mb-6">
          Diseñamos estrategias digitales personalizadas para potenciar tu negocio en el mundo en línea.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Interpretación de métricas para la toma de decisiones estratégicas</li>
          <li>Medición y análisis de resultados</li>
          <li>Transformación digital</li>
          <li>Herramientas de seguimiento y análisis de datos</li>
        </ul>
      </div>

            {/* GIF */}
            <div className="mt-10 flex items-center justify-center">
        <img
          src={gifSrc}
          alt="Analysis Animation"
          className="w-[50%] max-w-md rounded-lg shadow-lg"
        />
      </div>
      
      <div className="p-8 mt-10">
      <h1 className="text-3xl font-bold mb-6">Importancia del email marketing para ONGs</h1>
      <p className="text-lg text-gray-200">
          El email marketing se ha convertido en una herramienta fundamental para las ONGs en la actualidad. A través del correo electrónico, estas organizaciones pueden mantener una comunicación directa y personalizada con sus seguidores, donantes y voluntarios. El email marketing les brinda la oportunidad de difundir su misión, informar sobre proyectos, recaudar fondos y crear conciencia sobre temas importantes. Además, les permite construir y fortalecer relaciones a largo plazo con su audiencia.
          </p>
          <h1 className="text-3xl font-bold mb-6">Beneficios del email marketing en el ámbito de las organizaciones sin fines de lucro</h1>
          <p className="text-lg text-gray-200">
          El email marketing ofrece una serie de beneficios significativos para las ONGs. En primer lugar, les brinda la capacidad de llegar a una audiencia global de manera instantánea y a un costo relativamente bajo en comparación con otros métodos de comunicación y publicidad. Esto les permite amplificar su alcance y aumentar la conciencia sobre sus causas y proyectos.
          </p>
          <p className="text-lg text-gray-200">
          Otro beneficio clave del email marketing para las ONGs es su capacidad para impulsar la recaudación de fondos. Al diseñar campañas efectivas y atractivas, estas organizaciones pueden motivar a los destinatarios a contribuir económicamente a sus proyectos y programas. 
          </p>
          <h1 className="text-3xl font-bold mb-6">Estadísticas relevantes sobre el impacto del email marketing en ONGs</h1>
          <p className="text-lg text-gray-200">
          Según un estudio reciente, el 65% de las ONGs considera al email marketing como la táctica más efectiva para la recaudación de fondos. Además, se estima que el retorno de la inversión (ROI) promedio del email marketing para organizaciones sin fines de lucro es de aproximadamente 38 dólares por cada dólar gastado, lo que resalta su eficacia en la generación de impacto y resultados tangibles.
          </p>
          <p className="text-lg text-gray-200">
          Otra estadística relevante muestra que el 78% de los donantes prefiere recibir actualizaciones y noticias de las ONGs a través de correos electrónicos, lo que subraya la importancia y la relevancia del email marketing en la construcción de relaciones significativas con la audiencia.
          </p>
      </div>


      {/* Texto Largo Generado */}
      <div className="p-8 mt-10">
        <h2 className="text-3xl font-bold mb-6">Biblioteca de Impacto: Archivar y Reutilizar Historias de tu ONG</h2>
        <p className="text-lg mb-4">
        El storytelling se convierte en una herramienta poderosa para transmitir el impacto de las acciones realizadas, generar empatía y conectar con audiencias comprometidas. En este contexto, el archivar historias de impacto se vuelve fundamental para documentar y reutilizar esas narrativas que resuenan con la misión y valores de la ONG. A continuación, exploraremos la importancia del storytelling en las ONGs, los beneficios de archivar historias de impacto y el papel central que juega el storytelling en la comunicación de estas organizaciones.
        </p>
        <p className="text-lg mb-4">
        El storytelling en las ONGs es mucho más que una técnica para comunicar logros y desafíos. Se trata de una herramienta estratégica que permite transmitir la esencia de la organización, conectar con la audiencia y movilizar acciones. Las historias bien contadas tienen el poder de sensibilizar, inspirar y motivar a las personas a involucrarse en la causa de la ONG.
        </p>
        <p className="text-lg">
        El archivo de historias de impacto es un tesoro invaluable para las ONGs. Al documentar y archivar estas historias, las organizaciones pueden preservar el impacto de sus acciones a lo largo del tiempo, construir una biblioteca de narrativas poderosas y reutilizarlas en diversas estrategias de comunicación.
        </p>
        <p className="text-lg">
        Además, el archivo de historias de impacto permite a las ONGs demostrar la efectividad de sus programas, mostrar la evolución de sus iniciativas a lo largo del tiempo y generar confianza en sus donantes, colaboradores y beneficiarios. Estas historias también pueden servir como herramientas de aprendizaje y capacitación interna, inspirando al equipo y reforzando el compromiso con la misión de la organización.
        </p>
      </div>
    </div>
  );
};

export default DigitalStrategyPage;


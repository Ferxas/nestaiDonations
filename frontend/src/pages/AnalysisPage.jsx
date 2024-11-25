import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FaChartBar, FaArrowRight } from 'react-icons/fa';
import api from '../services/api';
import AnalysisTable from '../components/AnalysisTable';
import AgeChart from '../components/AgeChart';
import MonthlyDonationsChart from '../components/MonthlyDonationsChart';
import videoSrc from '../assets/media/videos/analysis.mp4'; // Importa tu video

const AnalysisPage = () => {
    const [analysisData, setAnalysisData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const scrollToContent = () => {
        document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const fetchAnalysisData = async () => {
            try {
                const response = await api.get('/users/analysis');
                setAnalysisData(response.data);
                toast.success('Datos cargados exitosamente.');
            } catch (err) {
                setError('Error al cargar los datos.');
                toast.error('No se pudieron cargar los datos.');
            } finally {
                setLoading(false);
            }
        };

        fetchAnalysisData();
    }, []);

    if (loading) {
        return (
            <div className="text-center text-blue-600 dark:text-blue-400 transition duration-300">
                Cargando análisis...
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-600 dark:text-red-400 transition duration-300">
                {error}
            </div>
        );
    }

    return (
        <div className="relative min-h-screen">
            {/* Video fijo en la parte superior */}
            <div className="fixed top-0 left-0 w-full h-screen z-0">
                <video
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                ></video>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Texto y botón encima del video */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 space-y-4">
                    <h1 className="text-5xl font-bold text-white">
                    Innovación en
                    Fundraising
                    </h1>
                    <p className="text-lg text-gray-200">
                    Te acompañamos en la creación de tu funnel de captación, paso a paso, incorporando estrategias innovadoras a tu alcance.
                    </p>
                    <button
                        onClick={scrollToContent}
                        className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-md flex items-center justify-center space-x-2 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                        <span>Descubre más</span>
                        <FaArrowRight />
                    </button>
                </div>
            </div>

            {/* Contenido desplazable */}
            <div
                id="content"
                className="relative z-10 mt-[100vh] p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition duration-300"
            >
                {/* Título */}
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold mb-2 flex items-center justify-center space-x-2 text-blue-800 dark:text-blue-400">
                        <FaChartBar />
                        <span className="mt-10">Análisis de Donaciones</span>
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300">
                        Consulta los datos detallados de las donaciones.
                    </p>
                </div>

                {/* Tabla de Causas Más Populares */}
                <AnalysisTable
                    popularInterests={analysisData?.causes_count || {}}
                    totalDonated={analysisData?.total_amount_donated || 0}
                />

                {/* Gráfico de Distribución de Edades */}
                <AgeChart ageDistribution={analysisData?.age_distribution || {}} />

                {/* Gráfico de Donaciones Mensuales */}
                <MonthlyDonationsChart monthlyDonations={analysisData?.monthly_donations || {}} />

                {/* Bloque de Preguntas y Respuestas */}
                <div className="mt-12 p-8 bg-gray-200 dark:bg-white text-gray-800 dark:text-gray-900 rounded-lg shadow-lg space-y-6">
                <h2 className="text-2xl font-bold text-center">
                Importancia de la participación comunitaria en las ONGs
                    </h2>
                    <p className="text-xl">La participación comunitaria juega un papel fundamental en el funcionamiento y el impacto de las ONGs y organizaciones sin fines de lucro. Al involucrar a la comunidad en las actividades y decisiones de la organización, se promueve un sentido de pertenencia y se establece una relación de confianza mutua. La participación comunitaria también permite a las ONGs comprender mejor las necesidades reales de la comunidad a la que sirven, lo que a su vez facilita el diseño de programas y proyectos más efectivos y relevantes.</p>
                    <h2 className="text-2xl font-bold text-center">
                    Estrategias de comunicación efectivas para fomentar la participación comunitaria
                    </h2>
                    <p className="text-xl">La implementación de campañas de concientización es una estrategia fundamental para promover la participación comunitaria. A través de la creación de mensajes claros y persuasivos, las organizaciones pueden informar a la comunidad sobre temas relevantes, sensibilizar acerca de problemáticas específicas y movilizar a las personas a tomar acción. Estas campañas pueden abordar temas tan diversos como la salud, el medio ambiente, la educación o la igualdad de género, entre otros. Es crucial utilizar un enfoque estratégico que considere el público objetivo, los canales de difusión más efectivos y la medición de impacto para garantizar que la campaña logre sus objetivos.Además, las campañas de concientización pueden incluir la colaboración con figuras públicas o líderes de opinión, la organización de eventos comunitarios y la distribución de materiales educativos. Al aprovechar diferentes recursos y herramientas, las ONGs pueden aumentar su alcance y generar un impacto significativo en la comunidad.</p>
                    <h2 className="text-2xl font-bold text-center">
                    Impacto de las estrategias de comunicación en la participación comunitaria
                    </h2>
                    <p className="text-xl">Las estrategias de comunicación efectivas juegan un papel crucial en el fomento de la participación comunitaria en las organizaciones sin fines de lucro. Para comprender mejor cómo estas estrategias pueden influir en la participación de la comunidad, es fundamental analizar casos reales en los que se hayan implementado con éxito.</p>
                    <h2 className="text-2xl font-bold text-center">
                    Estudio de casos reales en organizaciones sin fines de lucro
                    </h2>
                    <p className="text-xl">Al analizar casos reales de organizaciones sin fines de lucro que hayan implementado estrategias de comunicación efectivas, es posible observar cómo estas han impactado en la participación activa de la comunidad. Por ejemplo, la organización XYZ implementó una estrategia de comunicación que incluía el uso de redes sociales, campañas de correo electrónico y eventos comunitarios para difundir su mensaje y atraer la participación de voluntarios y donantes. Como resultado, la organización experimentó un aumento significativo en el número de voluntarios y donaciones, lo que demostró el impacto positivo de una estrategia de comunicación bien planificada.</p>
                    <h2 className="text-2xl font-bold text-center">
                    Medición de resultados y métricas relevantes
                    </h2>
                    <p className="text-xl">Una parte crucial de cualquier estrategia de comunicación efectiva es la capacidad de medir su impacto y evaluar su eficacia. En el contexto de fomentar la participación comunitaria, es fundamental identificar y medir las métricas relevantes que reflejen el nivel de participación y compromiso de la comunidad.Algunas métricas clave a considerar incluyen el número de interacciones en redes sociales, la asistencia a eventos comunitarios, el aumento en el número de voluntarios y donantes, y la retroalimentación directa de la comunidad. Estas métricas proporcionan una visión clara del impacto de las estrategias de comunicación en la participación comunitaria, permitiendo a las organizaciones evaluar su desempeño y realizar ajustes según sea necesario.</p>
                    <h2 className="text-2xl font-bold text-center">
                    Preguntas frecuentes
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                question: "¿Qué es la consultoría especializada para ONGs y organizaciones sin fines de lucro?",
                                answer: "La consultoría especializada para ONGs y organizaciones sin fines de lucro es un servicio que ofrece asesoramiento y orientación específicamente diseñados para abordar los desafíos y metas de este tipo de entidades."
                            },
                            {
                                question: "¿En qué consisten las estrategias de comunicación efectivas para ONGs?",
                                answer: "Las estrategias de comunicación efectivas para ONGs se centran en el desarrollo e implementación de planes de comunicación que les permitan alcanzar sus objetivos de manera clara, coherente y persuasiva, tanto hacia su audiencia interna como externa."
                            },
                            {
                                question: "¿Cómo pueden las ONGs fomentar la participación comunitaria?",
                                answer: "Las ONGs pueden fomentar la participación comunitaria a través de la colaboración activa con la comunidad, la creación de espacios de diálogo y la promoción de la participación ciudadana en la toma de decisiones que les afecten."
                            },
                            {
                                question: "¿Cuál es la importancia de la participación comunitaria para las ONGs?",
                                answer: "La participación comunitaria es crucial para que las ONGs puedan comprender las necesidades reales de la comunidad a la que sirven, fortalecer su legitimidad y lograr un impacto sostenible en el tiempo."
                            },
                            {
                                question: "¿Por qué es relevante contar con una consultoría especializada en este ámbito?",
                                answer: "Contar con una consultoría especializada permite a las ONGs aprovechar el conocimiento y la experiencia de profesionales que comprenden los desafíos específicos que enfrentan, y que pueden ofrecer orientación estratégica adaptada a sus necesidades y recursos."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="border-b border-gray-300 dark:border-gray-700 pb-4">
                                <h3 className="text-lg font-semibold">{faq.question}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalysisPage;




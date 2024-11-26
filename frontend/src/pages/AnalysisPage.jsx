import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FaChartBar, FaArrowRight } from 'react-icons/fa';
import api from '../services/api';
import AnalysisTable from '../components/AnalysisTable';
import AgeChart from '../components/AgeChart';
import MonthlyDonationsChart from '../components/MonthlyDonationsChart';
import gifSrc from '../assets/media/videos/analysis.gif'; // Importar el GIF

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
            {/* GIF fijo en la parte superior */}
            <div className="fixed top-0 left-0 w-full h-screen z-0">
                <img
                    src={gifSrc} // Usar el GIF importado
                    alt="Analysis Animation"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Texto y botón encima del GIF */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 space-y-4">
                    <h1 className="text-5xl font-bold text-white">
                        Innovación en Fundraising
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
            </div>
        </div>
    );
};

export default AnalysisPage;

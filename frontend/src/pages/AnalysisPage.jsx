import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FaChartBar } from 'react-icons/fa';
import api from '../services/api';
import AnalysisTable from '../components/AnalysisTable';
import AgeChart from '../components/AgeChart';
import MonthlyDonationsChart from '../components/MonthlyDonationsChart';

const AnalysisPage = () => {
    const [analysisData, setAnalysisData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
        <div className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition duration-300">
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
    );
};

export default AnalysisPage;
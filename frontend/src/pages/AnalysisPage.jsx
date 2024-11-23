import React, { useEffect, useState } from 'react'
import AnalysisTable from '../components/AnalysisTable';
import AgeChart from '../components/AgeChart';
import MonthlyDonationsChart from '../components/MonthlyDonationsChart';
import api from '../services/api';


const AnalysisPage = () => {
    
    
    const [analysisData, setAnalysisData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAnalysisData = async () => {
            try {
                const response = await api.get("/users/analysis");
                setAnalysisData(response.data);
    
            } catch (error) {
                setError(error);
                console.error(error.message);
            } finally {
                setLoading(false); // detener el estado de la carga
            }
        };
        fetchAnalysisData();
    }, []);
    
    
    if (loading) {
        return <div>Cargando análisis</div>
    }
    
    if (error) {
        return <div>{error}</div>
    }

    return (
        <div>
            <h1>Análisis de donaciones</h1>
            <AnalysisTable
                popularInterests={analysisData.popular_interests || {}}
                totalDonated={analysisData.total_amount_donated || 0}
            />
            <AgeChart
                ageDistribution={analysisData.age_distribution}
            />
            <MonthlyDonationsChart
                MonthlyDonations={analysisData.monthly_donations}
            />
        </div>
    )
}

export default AnalysisPage
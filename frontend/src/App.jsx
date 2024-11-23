import {useEffect, useState} from 'react';
import api from './services/api';
import AnalysisTable from './components/AnalysisTable';
import AgeChart from './components/AgeChart';
import MonthlyDonationsChart from './components/MonthlyDonationsChart';


const App = () => {
  const [analysisData, setAnalysisData] = useState(null);
  
  useEffect(() => {
    const fetchAnalysisData = async () => {
      try {
        const response = await api.get('/analysis');
        setAnalysisData(response.data);
      } catch (error) {
        console.error('Error fetching analysis data:', error);
      }
    }

    fetchAnalysisData();
  }, []);

  if (!analysisData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Análisis de donaciones</h1>
      <AnalysisTable
      popularInterests={analysisData.popularInterest}
      totalDonated={analysisData.total_amount_donated}
      />
      <AgeChart ageDistribution={analysisData.age_distribution}/>

      <MonthlyDonationsChart MonthlyDonations={analysisData.monthly_donations} />
    </div>
  )
}

export default App
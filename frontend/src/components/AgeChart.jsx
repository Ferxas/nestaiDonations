import { Bar } from 'react-chartjs-2';

const AgeChart = ({ageDistribution}) => {
    const data = {
        labels: Object.keys(ageDistribution),
        datasets: [
            {
                label: 'Age Distribution',
                data: Object.values(ageDistribution),
                backgroundColor: ['rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)'],
                borderWidth: 1
            }
        ]
    }

  return (
    
    <div>
        <h2>Distribución de edades</h2>
        <Bar data={data} />
    </div>
  )
}

export default AgeChart
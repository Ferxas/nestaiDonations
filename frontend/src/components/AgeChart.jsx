import { Bar } from 'react-chartjs-2';

const AgeChart = ({ ageDistribution }) => {
    if (!ageDistribution || Object.keys(ageDistribution).length === 0) {
        return <p>No hay edades disponibles</p>;
    }

    const data = {
        labels: Object.keys(ageDistribution),
        datasets: [
            {
                label: 'Número de donantes',
                data: Object.values(ageDistribution),
                backgroundColor: ['rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)'],
                borderWidth: 1
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legends: {
                display: true,
            }
        }
    }

    return (

        <div>
            <h2>Distribución de edades</h2>
            <Bar data={data} options={options} />
        </div>
    )
}

export default AgeChart
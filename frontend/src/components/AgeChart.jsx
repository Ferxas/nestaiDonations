import { Bar } from 'react-chartjs-2';

const AgeChart = ({ ageDistribution }) => {
    if (!ageDistribution || Object.keys(ageDistribution).length === 0) {
        return (
            <p className="text-center text-gray-500 mt-4">
                No hay datos de edades disponibles.
            </p>
        );
    }

    // Configuración de los datos
    const data = {
        labels: Object.keys(ageDistribution).map((age) => `${age} años`),
        datasets: [
            {
                label: 'Número de Donantes',
                data: Object.values(ageDistribution),
                backgroundColor: [
                    'rgba(54, 162, 235, 0.8)', // Azul
                    'rgba(255, 99, 132, 0.8)', // Rojo
                    'rgba(255, 206, 86, 0.8)', // Amarillo
                    'rgba(75, 192, 192, 0.8)', // Verde
                    'rgba(153, 102, 255, 0.8)', // Morado
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
                borderRadius: 5, // Esquinas redondeadas
            },
        ],
    };

    // Opciones del gráfico
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: 'rgb(75, 75, 75)', // Texto del gráfico
                    font: {
                        size: 14,
                    },
                },
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) =>
                        `${tooltipItem.label}: ${tooltipItem.raw} donantes`,
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'rgb(75, 75, 75)', // Texto en el eje X
                    font: {
                        size: 12,
                    },
                },
                grid: {
                    display: false, // Sin líneas de cuadrícula
                },
            },
            y: {
                type: 'linear',
                position: 'left',
                ticks: {
                    stepSize: 50, // Incrementos de 50
                    color: 'rgb(75, 75, 75)', // Texto en el eje Y
                    font: {
                        size: 12,
                    },
                },
                grid: {
                    color: 'rgba(200, 200, 200, 0.3)', // Líneas de cuadrícula neutras
                },
                title: {
                    display: true,
                    text: 'Cantidad de Donantes',
                    color: 'rgb(75, 75, 75)', // Título del eje
                    font: {
                        size: 14,
                    },
                },
            },
        },
    };

    return (
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">
                Distribución de Edades
            </h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default AgeChart;

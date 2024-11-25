import React from 'react';
import { Line } from 'react-chartjs-2';

const MonthlyDonationsChart = ({ monthlyDonations = {} }) => {
  // Manejar caso donde no hay datos
  if (!monthlyDonations || Object.keys(monthlyDonations).length === 0) {
    return (
      <p className="text-center text-gray-500 mt-4">
        No hay datos de donaciones mensuales disponibles.
      </p>
    );
  }

  // Configuración de los datos
  const data = {
    labels: Object.keys(monthlyDonations), // Meses
    datasets: [
      {
        label: 'Donaciones Mensuales',
        data: Object.values(monthlyDonations), // Cantidades de donaciones
        borderColor: 'rgba(54, 162, 235, 1)', // Azul vibrante
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Azul claro para el área bajo la línea
        pointBackgroundColor: 'rgba(54, 162, 235, 1)', // Color de los puntos
        pointBorderColor: '#ffffff', // Borde blanco en los puntos
        pointHoverBackgroundColor: '#ffffff', // Fondo blanco al pasar el mouse
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)', // Borde azul vibrante al pasar el mouse
        pointRadius: 4, // Tamaño de los puntos
        pointHoverRadius: 6, // Tamaño de los puntos al pasar el mouse
        borderWidth: 2,
        tension: 0.4, // Suavizado de la línea
        fill: true, // Rellenar debajo de la línea
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
          color: 'rgb(75, 75, 75)', // Color del texto
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            `Donaciones: $${tooltipItem.raw.toLocaleString()}`,
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
        ticks: {
          color: 'rgb(75, 75, 75)', // Texto en el eje Y
          font: {
            size: 12,
          },
          callback: (value) => `$${value.toLocaleString()}`, // Formato de valores
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.3)', // Líneas de cuadrícula suaves
        },
        title: {
          display: true,
          text: 'Cantidad Donada ($)',
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
        Donaciones Mensuales
      </h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default MonthlyDonationsChart;

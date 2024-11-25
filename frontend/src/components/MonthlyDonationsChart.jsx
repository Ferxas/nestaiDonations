import React from 'react';
import { Line } from 'react-chartjs-2';

const MonthlyDonationsChart = ({ monthlyDonations = {} }) => {
  // Manejar caso donde no hay datos
  if (!monthlyDonations || Object.keys(monthlyDonations).length === 0) {
    return <p>No hay datos de donaciones mensuales disponibles.</p>;
  }

  const data = {
    labels: Object.keys(monthlyDonations), // Meses
    datasets: [
      {
        label: 'Donaciones Mensuales',
        data: Object.values(monthlyDonations), // Cantidades de donaciones
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default MonthlyDonationsChart;

import { Line } from 'react-chartjs-2';

const MonthlyDonationsChart = ({MonthlyDonations}) => {
    const data = {
        labels: Object.keys(MonthlyDonations),
        datasets: [
            {
                label: 'Donaciones Mensuales',
                data: Object.values(MonthlyDonations),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false,
            }
        ]
    }

    return (
        <div>
            <h2>Donaciones Mensuales</h2>
            <Line data={data} />
        </div>
    )
}

export default MonthlyDonationsChart
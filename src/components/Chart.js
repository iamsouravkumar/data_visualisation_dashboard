import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const Chart = ({ data }) => {
    if (!data) {
        return <div> No data available</div>;
    }
    // eslint-disable-next-line
    const { country, topic, region, intensity, likelihood, relevance, start_year, end_year, sector, source } = data;

    const chartData = {
        labels: ['Intensity', 'Likelihood', 'Relevance'],
        datasets: [
            {
                data: [intensity, likelihood, relevance],
                backgroundColor: [
                    'rgb(54, 162, 235)',
                    'rgb(255, 99, 132)',
                    'rgb(255, 205, 86)',
                ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        responsive: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `Data for ${country}, ${topic}, ${region}`,
            },
        },
    };

    return (
        <>
            <div className='container'>
                <Pie data={chartData} options={options} height={400} width={550} />
            </div>
            <div className='pie'>
                <ul>
                    <li><b>Country:</b> {!country ? "Not Given" : country} </li>
                    <li><b>Topic:</b> {capitalize(!topic ? "Not Given" : topic)}</li>
                    <li><b>Region:</b> {!region ? "Not Given" : region}</li>
                    {/* <li><b>Sector:</b> {!sector ? "Not Given" : sector}</li>
                <li><b>Source:</b> {!source ? "Not Given" : source}</li> */}
                    <li><b>Start Year:</b> {!start_year ? "Not Given" : start_year}</li>
                    <li><b>End Year:</b> {!end_year ? "Not Given" : end_year}</li>
                </ul>
            </div>
        </>
    );
};

export default Chart;

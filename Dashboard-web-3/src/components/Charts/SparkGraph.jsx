import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale } from "chart.js" 
import { SparklineAreaData } from '../../data/dummy'


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const LineGraph = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top",
            },
            title: {
                display: true,
                text: "Line Graph Representing Data Points",
                font: {
                    size: 16,
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "X Values",
                    font: {
                        size: 14,
                    },
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Y Values",
                    font: {
                        size: 14,
                    },
                },
            },
        },
    };

    const data = {
        labels: SparklineAreaData.map((point) => point.x), // X-axis values
        datasets: [
            {
                label: "Y Values",
                data: lineChartData.map((point) => point.yval), // Y-axis values
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                pointBackgroundColor: "rgb(75, 192, 192)",
                pointBorderColor: "rgb(0, 0, 0)",
                pointRadius: 5,
                borderWidth: 2,
                tension: 0.3, // Smooth line curve
                fill: true,
            },
        ],
    };

    return <Line options={options} data={data} />;
};

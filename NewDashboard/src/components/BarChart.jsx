// components/BarChart.jsx
import React from 'react';
import { useTheme } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';
import { tokens } from '../themes';

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const data = {
    labels: ['USA', 'Germany', 'France', 'UK', 'Canada', 'Nigeria'],
    datasets: [
        {
            label: 'hot dog',
            data: [25, 30, 45, 60, 20, 40],
            backgroundColor: colors.greenAccent[500]
        },
        {
            label: 'burger',
            data: [35, 20, 25, 50, 40, 30],
            backgroundColor: colors.blueAccent[500]
        },
        {
            label: 'sandwich',
            data: [40, 35, 30, 25, 45, 50],
            backgroundColor: colors.redAccent[500]
        },
        {
            label: 'kebab',
            data: [20, 25, 20, 30, 35, 25],
            backgroundColor: colors.yellowAccent?.[500] || '#eed312'
        },
        {
            label: 'fries',
            data: [50, 40, 60, 45, 55, 35],
            backgroundColor: colors.indigoAccent?.[500] || '#3f51b5'
        },
        {
            label: 'donut',
            data: [30, 45, 35, 40, 25, 30],
            backgroundColor: colors.pinkAccent?.[500] || '#e91e63'
        }
    ]
  };

  const options = {
        responsive: true,
        plugins: {
        legend: {
            labels: {
            color: colors.gray[100]
        }
      }
    },
    scales: {
      x: {
            ticks: {
            color: colors.gray[100]
            },
            grid: {
            color: colors.gray[800]
            },
            title: {
            display: !isDashboard,
            text: isDashboard ? '' : 'country',
            color: colors.gray[100]
        }
      },
      y: {
            ticks: {
            color: colors.gray[100]
            },
            grid: {
            color: colors.gray[800]
            },
            title: {
            display: !isDashboard,
            text: isDashboard ? '' : 'food',
            color: colors.gray[100]
        }
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;

import React from "react";
import { useTheme } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { tokens } from "../themes";
import { mockPieData as data } from "../data/mockData";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Extract labels and values
  const labels = data.map((d) => d.label);
  const values = data.map((d) => d.value);
  const backgroundColors = data.map((d) => d.color);

  const chartData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: backgroundColors,
        borderColor: "gray",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: colors.gray[100],
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw;
            const label = labels[tooltipItem.dataIndex];
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return <Pie data={chartData} options={options} />;
};

export default PieChart;

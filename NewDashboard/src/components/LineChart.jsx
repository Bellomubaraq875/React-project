import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useTheme } from "@mui/material";
// import { tokens } from "../theme";
import {tokens} from "../themes"
import { mockLineData as data } from "../data/mockData";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

 
  const labels = data[0].data.map(point => point.x);

  const chartData = {
    labels,
    datasets: data.map(series => ({
      label: series.id,
      data: series.data.map(point => point.y),
      borderColor: series.color || "#3e95cd",
      backgroundColor: "transparent",
      pointBorderColor: series.color || "#3e95cd",
      pointBackgroundColor: "#fff",
      borderWidth: 2,
      tension: 0.4, 
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: colors.gray[100], 
        },
      },
      tooltip: {
        backgroundColor: colors.primary[500],
      },
    },
    scales: {
      x: {
        ticks: {
          color: colors.gray[100],
        },
        grid: { display: false },
        title: {
          display: !isDashboard,
          text: "transportation",
          color: colors.gray[100],
        },
      },
      y: {
        ticks: {
          color: colors.gray[100],
        },
        grid: { display: false },
        title: {
          display: !isDashboard,
          text: "count",
          color: colors.gray[100],
        },
      },
    },
  };

  return (
    <div style={{ height: "75vh", width: "100%" }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;

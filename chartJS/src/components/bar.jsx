import { Bar } from "react-chartjs-2" 
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"
import { barChartData} from "../fake_data";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

export const BarChart = () => {
    const options={ }
    return <Bar options={options} data={barChartData}/> 
}
import { Line } from "react-chartjs-2" 
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"
import { lineChartData } from "../fake_data";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

export const LineGraph = () => {
    const options={ 
        responsive: true,
        Plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: 'This a a graph representing my daily steps'
            }
        }
    } 

    // const data = { }
    return <Line option={options} data={lineChartData} />
}

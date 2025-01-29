import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js"
import { PieChartData } from '../fake_data'

ChartJS.register( Tooltip, Legend, ArcElement);

export const PieChart = () => {
    const options= {};

    return <Pie options={options} data={ PieChartData}/>
}
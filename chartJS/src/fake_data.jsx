// import {Colors} from "chart.js"
export const lineChartData = {
    labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ],
    datasets: [
        {
            label: "step",
            data: [3000, 5000, 2000, 7000, 8000, 12000, 15000],
            borderColor: "rgb(75, 192, 192)"
        },
        
        {
            label: "Mubashir's step",
            data: [1000, 3500, 8000, 14000, 4000, 16000, 12000],
            borderColor: "red",
            
        },
    ],
    
};

export const barChartData = {
    labels: ["data", "Groceries", "Utilities", "food", "Transportation"],
    datasets: [
        {
            label: "Expenses",
            data: [1200, 800, 500, 1599, 180],
            backgroundColor: [
                "rgba(225, 99, 132, 0.5)",
                "rgba(54, 162, 132, 0.5)",
                "rgba(75, 192, 192, 0.5)",
                "rgba(225, 206, 86, 0.5)",
                "rgba(225, 1, 12, 0.5)",
            ],
            borderColor: [
                "rgba(75, 192, 192, 1)",
                "rgba(225, 1, 12, 1)",
                "rgba(225, 206, 86, 1)",
                "rgba(225, 99, 132, 1)",
                "rgba(54, 162, 132, 1)",
            ],
            borderWidth: 3,
        },
    ],
};

export const PieChartData = {
    labels: [ "Facebook", 'Instagram', "Twitter", "YouTube", "LinkedIn"],
    datasets: [
        {
            label: "Time Spent",
            data: [120, 60, 30, 90, 45],
            backgroundColor: [
                "rgba(75, 192, 192, 1)",
                "rgba(225, 1, 12, 1)",
                "rgba(225, 206, 86, 1)",
                "rgba(225, 99, 132, 1)",
                "rgba(54, 162, 132, 1)",
            ],
            hoverOffset: 4,
        }
    ]
    
}
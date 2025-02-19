// import {Colors} from "chart.js"
export const lineChartData = [
    { x: 1, yval: 2 },
    { x: 2, yval: 6 },
    { x: 3, yval: 8 },
    { x: 4, yval: 5 },
    { x: 5, yval: 10 },
];


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
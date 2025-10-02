"use client";

import Image from "next/image";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Jan", income: 4000, expense: 2400 },
    { name: "Feb", income: 3000, expense: 1398 },
    { name: "Mar", income: 2000, expense: 9800 },
    { name: "Apr", income: 2780, expense: 3908 },
    { name: "May", income: 1890, expense: 4800 },
    { name: "Jun", income: 2390, expense: 3800 },
    { name: "Jul", income: 3490, expense: 4300 },
    { name: "Aug", income: 3200, expense: 4100 },
    { name: "Sep", income: 3000, expense: 4000 },
    { name: "Oct", income: 3600, expense: 4200 },
    { name: "Nov", income: 3800, expense: 3900 },
    { name: "Dec", income: 4200, expense: 4500 },
];

const FinanceChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4 shadow">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-semibold text-gray-700">Finance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    data={data}
                    margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tick={{ fill: "#9CA3AF", fontSize: 12 }}
                        tickLine={false}
                    />
                    <YAxis
                        axisLine={false}
                        tick={{ fill: "#9CA3AF", fontSize: 12 }}
                        tickLine={false}
                    />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />

                    {/* Income Line */}
                    <Line
                        type="monotone"
                        dataKey="income"
                        stroke="#00A064" // tlhgreen4
                        strokeWidth={3}
                        dot={{ r: 3 }}
                        activeDot={{ r: 6 }}
                    />

                    {/* Expense Line */}
                    <Line
                        type="monotone"
                        dataKey="expense"
                        stroke="#3FC283" // tlhlight2
                        strokeWidth={3}
                        dot={{ r: 3 }}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default FinanceChart;

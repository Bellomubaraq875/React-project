"use client";
import Image from "next/image";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [
    { name: "Achieved", value: 92, fill: "#C3EBFA" },
    { name: "Remaining", value: 8, fill: "#FAE27C" },
];

const Performance = () => {
    return (
        <div className="bg-white p-4 rounded-md h-80 relative flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-semibold">Performance</h1>
                <Image src="/moreDark.png" alt="menu icon" width={16} height={16} />
            </div>

            {/* Chart */}
            <div className="flex-1 flex items-center justify-center relative">
                <ResponsiveContainer width="80%" height="80%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            startAngle={180}
                            endAngle={0}
                            cx="50%"
                            cy="50%"  // ✅ center chart vertically
                            innerRadius={70}
                            outerRadius={100}
                            stroke="none"
                        />
                    </PieChart>
                </ResponsiveContainer>

                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">9.2</h1>
                    <p className="text-xs text-gray-400">of max LTS</p>
                    <div className="text-sm text-gray-500 mt-1">1st Term - 3rd Term</div>
                </div>
            </div>
        </div>
    );
};

export default Performance;

import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CounterChart";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col lg:flex-row">
            {/* Left section */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* User Cards */}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="student" />
                    <UserCard type="teacher" />
                    <UserCard type="parent" />
                    <UserCard type="staff" />
                </div>

                {/* Middle charts */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    {/* Count Chart */}
                    <div className="w-full lg:w-1/3 h-[350px] md:h-[450px] bg-white shadow rounded-lg p-2">
                        <CountChart />
                    </div>

                    {/* Attendance Chart */}
                    <div className="w-full lg:w-2/3 h-[350px] md:h-[450px] bg-white shadow rounded-lg p-2">
                        <AttendanceChart />
                    </div>
                </div>

                {/* Bottom Chart */}
                <div className="w-full h-[400px] md:h-[500px] bg-white shadow rounded-lg p-2">
                    <FinanceChart />
                </div>
            </div>

            {/* Right section */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
                <div className="bg-primary text-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-semibold">Announcements</h2>
                    <p className="text-sm opacity-80 mt-2">No new updates today.</p>
                </div>

                <div className="bg-secondary text-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-semibold">Quick Actions</h2>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li className="cursor-pointer hover:underline">+ Add Student</li>
                        <li className="cursor-pointer hover:underline">+ Add Teacher</li>
                        <li className="cursor-pointer hover:underline">+ Create Event</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;

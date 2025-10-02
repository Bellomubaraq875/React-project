import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CounterChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
        {/* left */}
        <div className="w-full lg:w-2/3 flex flex-col gap-8">
            {/* User Cards */}
            <div className="flex gap-4 justify-between flex-wrap">
                <UserCard type="student"/>
                <UserCard type="teacher"/>
                <UserCard type="parent"/>
                <UserCard type="staff"/>
            </div>
            {/* Middle chart */}
            <div className="flex gap-4 flex-col lg:flex-row">
                {/* count chart */}
                <div className="w-full lg:w-1/3 h-[450px]">
                    <CountChart/>
                </div>
                {/* Attendance chart */}
                <div className="w-full lg:w-2/3 h-[450px]">
                    <AttendanceChart/>
                </div>
            </div>
            {/* .Bottom chart */}
            <div className=""></div>
        </div>
        {/* right */}
        <div className="w-full lg:w-1/3">hello</div>
    </div>
  )
}

export default AdminPage
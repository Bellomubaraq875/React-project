import Image from "next/image";
import BigCalendar from "@/components/BigCalenlar";
import Announcements from "@/components/Announcements";
import Performance from "@/components/Performance";
import Link from "next/link";

const SingleTeacherPage = () => {
    return (
        <div className="flex-1 flex flex-col xl:flex-row gap-4">
            {/* Left */}
            <div className="w-full xl:w-2/3 flex flex-col gap-4">
                {/* top */}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* user info card */}
                    <div className="bg-tlhlight1 py-6 px-4 rounded-md flex-1 flex gap-4">
                        <div className="w-1/3">
                            <Image
                                src="/me.JPG"
                                alt="teacher's image"
                                width={224}
                                height={224}
                                className="w-36 h-36 rounded-full object-cover"
                            />
                        </div>
                        <div className="w-2/3 flex flex-col justify-between gap-4">
                            <h1>Muhammad Jamiu</h1>
                            <p className="text-sm text-gray-500">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus officiis nesciunt quae. Iure, vitae nobis?
                            </p>
                            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/blood.png" alt="" width={14} height={14} />
                                    <span>Address</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/date.png" alt="" width={14} height={14} />
                                    <span>September 2025</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/mail.png" alt="" width={14} height={14} />
                                    <span>user@gmail.com</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/phone.png" alt="" width={14} height={14} />
                                    <span>0704 567 8232</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* small cards */}
                    <div className="flex-1 flex gap-4 justify-between flex-wrap">
                        {[
                            { img: "/singleAttendance.png", title: "99%", subtitle: "Attendance" },
                            { img: "/singleBranch.png", title: "2", subtitle: "Branches" },
                            { img: "/singleLesson.png", title: "6", subtitle: "Lessons" },
                            { img: "/singleClass.png", title: "2", subtitle: "Classes" },
                        ].map((card, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]"
                            >
                                <Image src={card.img} alt="" width={24} height={24} className="w-6 h-6" />
                                <div>
                                    <h1 className="text-xl font-semibold">{card.title}</h1>
                                    <span className="text-sm text-gray-400">{card.subtitle}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
                    <h1 className="font-semibold text-xl ">Teacher&apos;s Schedule</h1>
                    <BigCalendar />
                </div>
            </div>

            {/* Right */}
            <div className="w-full xl:w-1/3 flex flex-col gap-4" >
                <div className="bg-white p-4 rounded-md">
                    <div className="text-xl font-semibold">Shortcuts </div>
                    <div className="mt-4 flex gap-4 flex-wrap text-wrap text-md text-gray-500">
                        <Link className="p-3 rounded-md bg-pink-200 "href='/'>Teacher&apos;s Classes</Link>
                        <Link className="p-3 rounded-md bg-purple-200"href='/'>Teacher&apos;s Students</Link>
                        <Link className="p-3 rounded-md bg-red-200"href='/'>Teacher&apos;s Lessons </Link>
                        <Link className="p-3 rounded-md bg-amber-200"href='/'>Teacher&apos;s Exam</Link>
                        <Link className="p-3 rounded-md bg-green-200"href='/'>Teacher&apos;s Assignments</Link>
                    </div>
                </div>
                <Performance/>
                <Announcements />
            </div>
        </div>
    );
};

export default SingleTeacherPage;

"use client";

import { Calendar, momentLocalizer, Views, View } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { calendarEvents } from "@/lib/data";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK);

    const handleOnChangeView = (selectedView: View) => {
        setView(selectedView);
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md h-[600px]">
            <Calendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                views={["work_week", "day"]}
                view={view}
                onView={handleOnChangeView}
                min={new Date(1970, 1, 1, 8, 0, 0)}  // Show from 8 AM
                max={new Date(1970, 1, 1, 17, 0, 0)} // Show until 4 PM
                step={30} // 30-minute intervals
                style={{ height: "100%" }}
            />
        </div>
    );
};

export default BigCalendar;

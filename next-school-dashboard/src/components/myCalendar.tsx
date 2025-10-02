"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type CalendarEvent = {
    date: string; // YYYY-MM-DD
    title: string;
    type?: string;
};

const events: CalendarEvent[] = [
    { date: "2025-09-29", title: "Math Exam", type: "exam" },
    { date: "2025-10-01", title: "Parent-Teacher Meeting", type: "meeting" },
    { date: "2025-10-05", title: "Sports Day", type: "sports" },
    { date: "2025-10-05", title: "Science Fair", type: "fair" },
];

// Helper: Date -> "YYYY-MM-DD"
function formatDate(d: Date) {
    return d.toISOString().split("T")[0];
}

const eventColors: Record<string, string> = {
    exam: "bg-red-500",
    meeting: "bg-blue-500",
    sports: "bg-green-500",
    fair: "bg-yellow-500",
};

export default function MyCalendar() {
    // store a single selected date for display/listing
    const [value, setValue] = useState<Date>(new Date());

    const [selectedEvents, setSelectedEvents] = useState<CalendarEvent[]>([]);

    // Accept Date | Date[] because react-calendar can return either
    const handleDateChange = (date: Date | Date[]) => {
        // normalize to a single Date (if range, take the first)
        const selectedDate: Date = Array.isArray(date) ? date[0] : date;

        setValue(selectedDate);

        // show events for that selected day
        const dayEvents = events.filter((ev) => ev.date === formatDate(selectedDate));
        setSelectedEvents(dayEvents);
    };

    return (
        <div className="p-4 space-y-4">
            <Calendar
                value={value}
                // onChange={handleDateChange} // now safe: handler accepts Date | Date[]
                tileContent={({ date, view }) => {
                    if (view === "month") {
                        const dayEvents = events.filter((ev) => ev.date === formatDate(date));
                        return (
                            <div className="flex justify-center gap-1 mt-1">
                                {dayEvents.map((ev, idx) => (
                                    <span
                                        key={idx}
                                        title={ev.title}
                                        className={`w-2 h-2 rounded-full ${eventColors[ev.type || ""] || "bg-gray-400"
                                            }`}
                                    />
                                ))}
                            </div>
                        );
                    }
                    return null;
                }}
            />

            {/* Events list for the selected day */}
            <div className="bg-white shadow rounded-lg p-4">
                <h2 className="font-semibold text-lg mb-2">Events on {formatDate(value)}:</h2>

                {selectedEvents.length > 0 ? (
                    <ul className="list-disc pl-5 space-y-1">
                        {selectedEvents.map((ev, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <span className={`w-3 h-3 rounded-full ${eventColors[ev.type || ""] || "bg-gray-400"}`} />
                                {ev.title}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No events for this date.</p>
                )}
            </div>

            {/* Legend */}
            <div className="bg-gray-50 shadow rounded-lg p-3 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500" /> Exam</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-500" /> Meeting</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-500" /> Sports</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-yellow-500" /> Fair</div>
            </div>
        </div>
    );
}

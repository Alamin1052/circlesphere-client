import React from "react";

const MyEvents = () => {
    // static dummy event data
    const events = [
        {
            id: 1,
            title: "Photography Workshop 2025",
            club: "Photography Club",
            date: "2025-02-10",
            status: "registered",
        },
        {
            id: 2,
            title: "Robotics Bootcamp",
            club: "Robotics Society",
            date: "2025-03-15",
            status: "registered",
        },
        {
            id: 3,
            title: "Cultural Night",
            club: "Cultural Club",
            date: "2025-01-20",
            status: "cancelled",
        },
        {
            id: 4,
            title: "Tech Summit 2025",
            club: "Tech Club",
            date: "2026-04-02",
            status: "registered",
        },
    ];

    const statusBadge = (status) => {
        if (status === "registered")
            return "bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium";
        return "bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-medium";
    };

    return (
        <div className="space-y-6 p-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">My Events</h1>
                <p className="text-gray-600">Events you have registered for.</p>
            </div>

            <div className="overflow-x-auto rounded-xl shadow">
                <table className="min-w-full bg-white rounded-xl">
                    <thead>
                        <tr className="bg-gray-200 text-left text-gray-800 text-sm">
                            <th className="py-3 px-4">Event Title</th>
                            <th className="py-3 px-4">Club</th>
                            <th className="py-3 px-4">Date</th>
                            <th className="py-3 px-4">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {events.map((ev) => (
                            <tr
                                key={ev.id}
                                className="border-b border-gray-300 last:border-0 hover:bg-gray-100 transition"
                            >
                                <td className="py-5 px-4 font-medium text-gray-800">{ev.title}</td>
                                <td className="py-5 px-4 text-gray-800">{ev.club}</td>
                                <td className="py-5 px-4 text-gray-800">
                                    {new Date(ev.date).toLocaleDateString()}
                                </td>
                                <td className="py-5 px-4">
                                    <span className={statusBadge(ev.status)}>
                                        {ev.status === "registered" ? "Registered" : "Cancelled"}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* empty state example */}
            {/* <p className="text-center text-gray-500 mt-6">You have not registered for any events.</p> */}
        </div>
    );
};

export default MyEvents;

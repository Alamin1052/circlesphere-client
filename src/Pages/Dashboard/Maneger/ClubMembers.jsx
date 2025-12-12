import React from "react";

const ClubMembers = () => {
    const events = [

        {
            name: "Rakib Hasan",
            email: "rakib@example.com",
            status: "Active",
            statusColor: "bg-green-100 text-green-700",
            date: "2024-02-19",
        },
        {
            name: "Mahin Islam",
            email: "mahin@example.com",
            status: "Pending",
            statusColor: "bg-yellow-100 text-yellow-700",
            date: "2024-02-10",
        },
        {
            name: "Jannat Ara",
            email: "jannat@example.com",
            status: "Active",
            statusColor: "bg-green-100 text-green-700",
            date: "2024-01-28",
        },

    ];

    const statusBadge = (status) => {
        if (status === "Active")
            return "bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium";
        return "bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-medium";
    };

    return (
        <div className="space-y-6 p-12">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">My Events</h1>
                <p className="text-gray-600">Events you have registered for.</p>
            </div>

            <div className="overflow-x-auto rounded-xl shadow">
                <table className="min-w-full bg-white rounded-xl">
                    <thead>
                        <tr className="bg-gray-200 text-left text-gray-800 text-sm">
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4">Email</th>
                            <th className="py-3 px-4">Join Date</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {events.map((ev) => (
                            <tr
                                key={ev.id}
                                className="border-b border-gray-300 last:border-0 hover:bg-gray-100 transition"
                            >
                                <td className="py-5 px-4 font-medium text-gray-800">{ev.name}</td>
                                <td className="py-5 px-4 text-gray-800">{ev.email}</td>
                                <td className="py-5 px-4 text-gray-800">
                                    {new Date(ev.date).toLocaleDateString()}
                                </td>
                                <td className="py-5 px-4">
                                    <span className={statusBadge(ev.status)}>
                                        {ev.status === "Active" ? "Active" : "Expired"}
                                    </span>
                                </td>
                                <td className="py-5 px-4 font-medium text-gray-800"><button className="btn btn-sm bg-red-500 text-white">Set Expired</button></td>
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

export default ClubMembers;

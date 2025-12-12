// MyClubs.jsx
import React from "react";
import { Link } from "react-router-dom";

const MyClubs = () => {
    // static dummy data
    const clubs = [
        {
            id: "c1",
            name: "Tech Club",
            location: "Dhaka University",
            expiry: "2026-02-10",
            status: "active",
        },
        {
            id: "c2",
            name: "Photography Club",
            location: "Rajshahi Campus",
            expiry: "2025-12-01",
            status: "expiring",
        },
        {
            id: "c3",
            name: "Cultural Club",
            location: "City Hall",
            expiry: "2024-11-20",
            status: "expired",
        },
        {
            id: "c4",
            name: "Robotics Society",
            location: "Engineering Block",
            expiry: "2026-05-15",
            status: "active",
        },
    ];

    // helper to format date and compute days left
    const formatDate = (iso) => {
        const d = new Date(iso);
        return d.toLocaleDateString();
    };

    const daysLeft = (iso) => {
        const now = new Date();
        const d = new Date(iso);
        const diff = Math.ceil((d - now) / (1000 * 60 * 60 * 24));
        if (diff > 0) return `${diff} day${diff > 1 ? "s" : ""}`;
        if (diff === 0) return "today";
        return `${Math.abs(diff)} day${Math.abs(diff) > 1 ? "s" : ""} ago`;
    };

    const statusBadge = (status) => {
        if (status === "active")
            return "text-emerald-800 bg-emerald-100 px-2 py-1 rounded-full text-sm font-medium";
        if (status === "expiring")
            return "text-amber-800 bg-amber-100 px-2 py-1 rounded-full text-sm font-medium";
        return "text-rose-800 bg-rose-100 px-2 py-1 rounded-full text-sm font-medium";
    };

    return (
        <div className="space-y-6 p-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">My Clubs</h1>
                <p className="text-gray-600">Clubs where you have an active membership.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {clubs.map((club) => (
                    <div
                        key={club.id}
                        className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{club.name}</h3>
                                    <p className="text-sm text-gray-500 mt-1">{club.location}</p>
                                </div>
                                <span className={statusBadge(club.status)}>
                                    {club.status === "active" ? "Active" : club.status === "expiring" ? "Expiring" : "Expired"}
                                </span>
                            </div>

                            <div className="mt-4 text-sm text-gray-600">
                                <p>
                                    <span className="font-medium text-gray-700">Expiry:</span>{" "}
                                    {formatDate(club.expiry)}
                                </p>
                                <p className="mt-1">
                                    <span className="font-medium text-gray-700">Status:</span>{" "}
                                    {club.status === "active"
                                        ? `Valid — ${daysLeft(club.expiry)} left`
                                        : club.status === "expiring"
                                            ? `Expiring soon — ${daysLeft(club.expiry)} left`
                                            : `Expired ${daysLeft(club.expiry)}`}
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 flex items-center justify-between">
                            <Link
                                to={`/clubs/${club.id}`}
                                className="text-sm font-medium text-indigo-600 hover:underline"
                            >
                                View details
                            </Link>

                            <button
                                className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-sm text-gray-700"
                                aria-label="renew membership"
                            >
                                Renew
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* empty state example */}
            {/* <div className="text-center text-gray-500">You have not joined any clubs yet.</div> */}
        </div>
    );
};

export default MyClubs;

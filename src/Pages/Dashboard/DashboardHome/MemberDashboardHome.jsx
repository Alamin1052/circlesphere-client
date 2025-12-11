import React from 'react';

const MemberDashboardHome = () => {

    const totalClubs = 3;
    const totalEvents = 5;
    const upcomingEvents = [
        {
            id: 1,
            title: "Tech Innovation Workshop",
            clubName: "Tech Club",
            date: "2025-01-25",
        },
        {
            id: 2,
            title: "Photography Contest",
            clubName: "Photography Club",
            date: "2025-02-10",
        },
        {
            id: 3,
            title: "Annual Cultural Fest",
            clubName: "Cultural Club",
            date: "2025-03-03",
        },
    ];

    return (
        <div className="space-y-6 p-10">
            {/* Welcome Section */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800">
                    Welcome Back 👋
                </h1>
                <p className="text-gray-600">
                    Here's a quick overview of your club activities.
                </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Stat Box */}
                <div className="bg-white rounded-2xl shadow p-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                        Total Clubs Joined
                    </h2>
                    <p className="text-3xl font-bold mt-2">{totalClubs}</p>
                </div>

                <div className="bg-white rounded-2xl shadow p-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                        Total Events Registered
                    </h2>
                    <p className="text-3xl font-bold mt-2">{totalEvents}</p>
                </div>

                <div className="bg-white rounded-2xl shadow p-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                        Upcoming Events
                    </h2>
                    <p className="text-3xl font-bold mt-2">
                        {upcomingEvents.length}
                    </p>
                </div>
            </div>

            {/* Upcoming Events List */}
            <div>
                <h2 className="text-xl font-semibold mb-3">Upcoming Events</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {upcomingEvents.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
                        >
                            <h3 className="text-lg font-semibold">
                                {event.title}
                            </h3>

                            <p className="text-gray-600 text-sm mt-1">
                                {event.clubName}
                            </p>

                            <p className="text-gray-500 text-sm mt-2">
                                📅{" "}
                                {new Date(event.date).toLocaleDateString()}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MemberDashboardHome;
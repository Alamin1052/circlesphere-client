import React from "react";

const Events = () => {
    const events = [
        {
            id: 1,
            title: "Music Festival 2025",
            description:
                "Join us for an amazing music festival with top artists performing live.",
            date: "2025-12-25",
            location: "Dhaka, Bangladesh",
            isPaid: true,
            eventFee: 500,
            maxAttendees: 200,
        },
        {
            id: 2,
            title: "Art Exhibition",
            description:
                "Explore stunning artworks from local and international artists.",
            date: "2025-12-20",
            location: "Chittagong, Bangladesh",
            isPaid: false,
            eventFee: 0,
            maxAttendees: 100,
        },
        {
            id: 3,
            title: "Tech Conference",
            description:
                "Learn the latest in AI, Web3, and emerging tech trends.",
            date: "2025-12-28",
            location: "Sylhet, Bangladesh",
            isPaid: true,
            eventFee: 1000,
            maxAttendees: 500,
        },
    ];

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">All Events</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="bg-white rounded-xl shadow p-6 border hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                    >
                        <h2 className="text-xl font-semibold mb-2">{event.title}</h2>

                        <p className="text-sm text-gray-600 mb-2">
                            {event.description.length > 80
                                ? event.description.substring(0, 80) + "..."
                                : event.description}
                        </p>

                        <p className="text-sm text-gray-600">
                            <span className="font-medium">Date:</span> {event.date}
                        </p>

                        <p className="text-sm text-gray-600">
                            <span className="font-medium">Location:</span> {event.location}
                        </p>

                        <p className="text-sm text-indigo-600 mt-1">
                            {event.isPaid
                                ? `Paid Event: ${event.eventFee} BDT`
                                : "Free Event"}
                        </p>

                        <p className="text-sm text-gray-500">
                            <span className="font-medium">Max Attendees:</span>{" "}
                            {event.maxAttendees}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;

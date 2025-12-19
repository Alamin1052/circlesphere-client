import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loading from '../../../Component/Loading';


const MemberDashboardHome = () => {
    const axiosSecure = useAxiosSecure();

    // Fetch user's clubs
    const { data: clubs = [], isLoading: clubsLoading } = useQuery({
        queryKey: ['my-clubs'],
        queryFn: async () => {
            const res = await axiosSecure.get('/my-clubs');
            return res.data;
        },
    });

    // Fetch user's registered events
    const { data: events = [], isLoading: eventsLoading } = useQuery({
        queryKey: ['my-events'],
        queryFn: async () => {
            const res = await axiosSecure.get('/my-events');
            return res.data;
        },
    });

    if (clubsLoading || eventsLoading) return <Loading />;

    // Compute upcoming events (filter events whose date is in the future)
    const upcomingEvents = events.filter(event => new Date(event.date) >= new Date());

    return (
        <div className="space-y-6 p-6">
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
                <div className="bg-white rounded-2xl shadow p-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                        Total Clubs Joined
                    </h2>
                    <p className="text-3xl font-bold mt-2">{clubs.length}</p>
                </div>

                <div className="bg-white rounded-2xl shadow p-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                        Total Events Registered
                    </h2>
                    <p className="text-3xl font-bold mt-2">{events.length}</p>
                </div>

                <div className="bg-white rounded-2xl shadow p-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                        Upcoming Events
                    </h2>
                    <p className="text-3xl font-bold mt-2">{upcomingEvents.length}</p>
                </div>
            </div>

            {/* Upcoming Events List */}
            <div>
                <h2 className="text-xl font-semibold mb-3">Upcoming Events</h2>

                {upcomingEvents.length === 0 ? (
                    <p className="text-gray-500">No upcoming events.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {upcomingEvents.map((event) => (
                            <div
                                key={event._id}
                                className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
                            >
                                <h3 className="text-lg font-semibold">{event.title}</h3>
                                <p className="text-gray-600 text-sm mt-1">{event.clubName}</p>
                                <p className="text-gray-500 text-sm mt-2">
                                    📅 {new Date(event.date).toLocaleDateString()}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MemberDashboardHome;

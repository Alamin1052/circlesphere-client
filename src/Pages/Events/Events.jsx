import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Loading from '../../Component/Loading';
import { Link } from 'react-router-dom';

const Clubs = () => {
    const [search, setSearch] = useState('');

    const { refetch, isLoading, data } = useQuery({
        queryKey: ['events', search],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/events?search=${search}`);
            return res.data;
        },
        enabled: false, // auto fetch off
    });

    useEffect(() => {
        refetch();
    }, [search, refetch]);

    const events = Array.isArray(data) ? data : data?.events || [];

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className='text-3xl text-gray-800 text-center font-bold mb-5'>All Events</h1>
            <input
                type="text"
                placeholder="Search clubs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-blue-500 p-2 rounded w-full md:w-72 mb-4 flex justify-center mx-auto"
            />
            {isLoading ? (
                <Loading />
            ) : events.length === 0 ? (
                <p className="text-center text-gray-500 text-lg pt-10">
                    No events found.
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {events.map((ev) => (
                        <div key={ev._id} className="bg-white border border-gray-100 rounded-xl p-5 shadow-xl flex flex-col justify-between h-full hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                            <h2 className="text-xl font-semibold text-gray-800 mt-2">{ev.title}</h2>
                            <p className="text-sm text-gray-600 mt-1">
                                {ev.description?.length > 50
                                    ? ev.description.substring(0, 50) + "..."
                                    : ev.description}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">Location: {ev.location}</p>
                            <p className="text-sm text-gray-600">
                                Date: {new Date(ev.eventDate).toLocaleDateString()}
                            </p>
                            <p className="text-sm text-gray-600">Fee: {ev.isPaid ? ev.eventFee + " BDT" : "Free"}</p>
                            {ev.maxAttendees && (
                                <p className="text-sm text-gray-600">Max Attendees: {ev.maxAttendees} People</p>
                            )}


                            <div className="flex gap-3 mt-4">
                                <Link
                                    to={`/event-details/${ev._id}`}
                                    className='btn bg-blue-500 text-white mt-2'
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )
            }
        </div >
    );
};

export default Clubs;

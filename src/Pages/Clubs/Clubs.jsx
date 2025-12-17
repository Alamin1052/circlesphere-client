import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState, } from 'react';

const Clubs = () => {
    const [search, setSearch] = useState('');

    const { refetch, isLoading, data } = useQuery({
        queryKey: ['clubs', search],
        queryFn: async () => {
            const res = await axios.get(`/clubs?search=${search}`);
            return res.data;
        },
        enabled: false, // auto fetch off
    });
    const clubs = Array.isArray(data) ? data : data?.clubs || [];

    return (
        <div className="p-6">
            <input
                type="text"
                placeholder="Search approved clubs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border p-2 rounded mb-4 w-full"
            />
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {clubs.map((c) => (
                        <div key={c._id} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                            <img
                                src={c.bannerImage}
                                alt="banner"
                                className="w-full h-32 rounded-lg object-cover"
                            />

                            <h2 className="text-xl font-semibold text-gray-800 mt-4">
                                {c.clubName}
                            </h2>

                            <p className="text-sm text-gray-600 mt-1">
                                Location: {c.location}
                            </p>

                            <p className="text-sm text-gray-600">
                                Membership Fee: {c.membershipFee} BDT
                            </p>

                            <p className="text-sm text-indigo-600 mt-2">
                                Category: {c.category}
                            </p>

                            <div className="flex gap-3 mt-4">
                                <button

                                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                                >
                                    Edit
                                </button>

                                <button

                                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Clubs;

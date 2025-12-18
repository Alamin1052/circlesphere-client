import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Loading from '../../Component/Loading';
import { Link } from 'react-router-dom';

const Clubs = () => {
    const [search, setSearch] = useState('');

    const { refetch, isLoading, data } = useQuery({
        queryKey: ['clubs', search],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/clubs?search=${search}`);
            return res.data;
        },
        enabled: false, // auto fetch off
    });

    useEffect(() => {
        refetch();
    }, [search, refetch]);

    const clubs = Array.isArray(data) ? data : data?.clubs || [];

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className='text-3xl text-gray-800 text-center font-bold mb-5'>All Clubs</h1>
            <input
                type="text"
                placeholder="Search clubs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-blue-500 w-md  p-2 rounded mb-4 flex justify-center mx-auto"
            />
            {isLoading ? (
                <Loading />
            ) : clubs.length === 0 ? (
                <p className="text-center text-gray-500 text-lg mt-10">
                    No clubs found.
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {clubs.map((c) => (
                        <div key={c._id} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm 
                 flex flex-col justify-between h-full transform transition duration-300 hover:scale-105 hover:shadow-lg">
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
                            <Link
                                to={`/club-details/${c._id}`}
                                className='btn bg-blue-500 text-white mt-2'
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            )
            }
        </div >
    );
};

export default Clubs;

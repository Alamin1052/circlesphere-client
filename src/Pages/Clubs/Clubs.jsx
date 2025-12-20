import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import Loading from '../../Component/Loading';
import { Link } from 'react-router-dom';

const Clubs = () => {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('newest');

    const { data: clubs = [], isLoading } = useQuery({
        queryKey: ['clubs', search, sort],
        queryFn: async () => {
            const res = await axios.get(
                `https://circlesphere-server.vercel.app/clubs?search=${search}&sort=${sort}`
            );
            return res.data;
        }
    });

    return (
        <div className="p-6 max-w-7xl mx-auto">

            {/* Page Title */}
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                All Clubs
            </h1>

            {/* Search & Sort */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">

                {/* Search */}
                <input
                    type="text"
                    placeholder="Search clubs..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border border-blue-500 p-2 rounded w-full md:w-72"
                />

                {/* Sort */}
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="border border-blue-500 p-2 rounded w-full md:w-56"
                >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="highestFee">Highest Fee</option>
                    <option value="lowestFee">Lowest Fee</option>
                </select>
            </div>

            {/* Content */}
            {isLoading ? (
                <Loading />
            ) : clubs.length === 0 ? (
                <p className="text-center text-gray-500 text-lg mt-10">
                    No clubs found.
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {clubs.map((club) => (
                        <div
                            key={club._id}
                            className="bg-white border border-gray-300 rounded-xl p-5 shadow-sm
                            flex flex-col justify-between h-full
                            transition hover:shadow-lg hover:-translate-y-1"
                        >
                            <img
                                src={club.bannerImage}
                                alt="banner"
                                className="w-full h-32 rounded-lg object-cover"
                            />

                            <div className="mt-4 space-y-1">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {club.clubName}
                                </h2>

                                <p className="text-sm text-gray-600">
                                    Location:{club.location}
                                </p>

                                <p className="text-sm text-gray-600">
                                    Fee: {club.membershipFee} BDT
                                </p>

                                <p className="text-sm text-indigo-600">
                                    {club.category}
                                </p>
                            </div>

                            <Link
                                to={`/club-details/${club._id}`}
                                className="btn bg-blue-500 text-white mt-4"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Clubs;

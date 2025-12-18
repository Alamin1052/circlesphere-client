import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../../Component/Loading';

const ClubDetails = () => {
    const { id } = useParams();

    const { data: club, isLoading, isError } = useQuery({
        queryKey: ['club', id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/clubs/${id}`);
            return res.data;
        },
    });

    if (isLoading) return <Loading />;

    if (isError || !club) return <p className="text-center text-gray-500 mt-10">Club not found</p>;

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <Link to="/clubs" className="text-blue-500 underline mb-4 inline-block">← Back to Clubs</Link>

            <div className="p-6 flex flex-col gap-4">
                <img
                    src={club.bannerImage}
                    alt={club.clubName}
                    className="w-full h-64 object-cover rounded-lg"
                />

                <h1 className="text-3xl font-bold text-gray-800">{club.clubName}</h1>

                <p className="text-gray-600">
                    <strong>Location:</strong> {club.location}
                </p>

                <p className="text-gray-600">
                    <strong>Membership Fee:</strong> {club.membershipFee} BDT
                </p>

                <p className="text-indigo-600">
                    <strong>Category:</strong> {club.category}
                </p>

                <span>
                    <p className='font-bold'>Description:</p>
                    <p className="text-gray-700 mt-2">
                        {club.description}
                    </p>
                </span>
                <button className='btn bg-blue-500 w-fit text-white'>Join Now</button>
            </div>
        </div>
    );
};

export default ClubDetails;

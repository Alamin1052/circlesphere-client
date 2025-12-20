import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../../Component/Loading';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const ClubDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: club, isLoading } = useQuery({
        queryKey: ['club', id],
        queryFn: async () => {
            const res = await axios.get(`https://circlesphere-server.vercel.app/clubs/${id}`);
            return res.data;
        },
    });

    if (isLoading) return <Loading />;

    const handlePayment = async (club) => {
        const clubInfo = {
            Fee: club.membershipFee,
            clubId: club._id,
            memberEmail: user.email,
            clubName: club.clubName,
        }
        const res = await axiosSecure.post('/payment-checkout-session', clubInfo);

        // console.log(res.data.url);
        window.location.assign(res.data.url);
    }

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
                <button
                    onClick={() => handlePayment(club)}
                    className='btn bg-blue-500 w-fit text-white'>Join Now</button>
            </div>
        </div>
    );
};

export default ClubDetails;

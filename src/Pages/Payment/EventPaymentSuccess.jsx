import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Component/Loading';
import useAxiosSecure from '../../Hooks/useAxiosSecure';


const EventPaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const axiosSecure = useAxiosSecure();

    const { data, isLoading, isError } = useQuery({
        queryKey: ['verify-payment', sessionId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/verify-event-payment/${sessionId}`);
            return res.data;
        },
        enabled: !!sessionId,
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: Infinity,
    });


    if (isLoading) return <Loading />;

    if (isError) return (
        <div className="max-w-xl mx-auto pt-20 text-center">
            <h1 className="text-2xl font-bold mb-4">Payment Verification Failed</h1>
            <Link to="/events" className="btn bg-blue-500 text-white">Go to Events</Link>
        </div>
    );

    return (
        <div className="max-w-xl mx-auto pt-20 text-center">
            <h1 className="text-2xl font-bold mb-4">Payment Status</h1>
            <p className="text-gray-700 mb-6">{data.message}</p>
            <Link to="/" className="btn bg-blue-500 text-white">Go to Home</Link>
        </div>
    );
};

export default EventPaymentSuccess;

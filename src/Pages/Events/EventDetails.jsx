import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../../Component/Loading';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const EventDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();


    const { data: event, isLoading } = useQuery({
        queryKey: ['event', id],
        queryFn: async () => {
            const res = await axios.get(`https://circlesphere-server.vercel.app/events/${id}`);
            return res.data;
        },
    });


    const { data: joinStatus, isLoading: statusLoading } = useQuery({
        queryKey: ['event-joined', id],
        enabled: !!user && !!id,
        queryFn: async () => {
            const res = await axiosSecure.get(
                `/event-registrations/check?eventId=${id}`
            );
            return res.data;
        },
    });

    if (isLoading || statusLoading) return <Loading />;


    const handlePayment = async () => {
        const payload = {
            Fee: event.eventFee,
            eventId: event._id,
            memberEmail: user.email,
            eventName: event.title,
        };

        const res = await axiosSecure.post(
            '/payment-checkout-session/event',
            payload
        );

        window.location.assign(res.data.url);
    };

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <Link to="/events" className="text-blue-500 underline mb-4 inline-block">
                ← Back to Events
            </Link>

            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-gray-800">{event.title}</h1>

                <p className="text-gray-600">
                    <strong>Location:</strong> {event.location}
                </p>

                <p className="text-gray-600">
                    <strong>Date:</strong> {event.eventDate}
                </p>

                <p className="text-gray-600">
                    <strong>Event Fee:</strong> {event.eventFee} BDT
                </p>

                <p className="text-indigo-600">
                    <strong>Max Attendees:</strong> {event.maxAttendees}
                </p>

                <div>
                    <p className="font-bold">Description:</p>
                    <p className="text-gray-700 mt-2">{event.description}</p>
                </div>


                {joinStatus?.joined ? (
                    <button
                        disabled
                        className="btn bg-gray-400 text-white w-fit cursor-not-allowed"
                    >
                        Already Joined
                    </button>
                ) : (
                    <button
                        onClick={handlePayment}
                        className="btn bg-blue-500 text-white w-fit"
                    >
                        Join Now
                    </button>
                )}
            </div>
        </div>
    );
};

export default EventDetails;

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loading from '../../../Component/Loading';


const EventRegistrations = () => {
    const axiosSecure = useAxiosSecure();

    const { data: registrations = [], isLoading } = useQuery({
        queryKey: ['all-event-registrations'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/event-registrations/all`);
            return res.data;
        },
    });

    if (isLoading) return <Loading />;

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">All Event Registrations</h2>

            {registrations.length === 0 ? (
                <p className="text-gray-500">No registrations found.</p>
            ) : (
                <div className='overflow-x-auto'>
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-3 border">User Email</th>
                                <th className="p-3 border">Status</th>
                                <th className="p-3 border">Registered At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {registrations.map(reg => (
                                <tr key={reg._id} className="hover:bg-gray-50">
                                    <td className="p-3 border">{reg.userEmail}</td>
                                    <td className="p-3 border">Registered</td>
                                    <td className="p-3 border">{new Date(reg.registeredAt).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default EventRegistrations;

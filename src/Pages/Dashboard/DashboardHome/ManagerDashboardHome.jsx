import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loading from '../../../Component/Loading';

const ManagerDashboardHome = () => {
    const axiosSecure = useAxiosSecure();

    // Fetch clubs managed by this manager
    const { data: clubs = [], isLoading: clubsLoading } = useQuery({
        queryKey: ['manager-clubs'],
        queryFn: async () => {
            const res = await axiosSecure.get('/club/manager');
            return res.data;
        },
    });

    // Fetch members of all clubs
    const { data: members = [], isLoading: membersLoading } = useQuery({
        queryKey: ['manager-members'],
        queryFn: async () => {
            const res = await axiosSecure.get('/manager/members');
            return res.data;
        },
    });

    // Fetch events created by this manager
    const { data: events = [], isLoading: eventsLoading } = useQuery({
        queryKey: ['manager-events'],
        queryFn: async () => {
            const res = await axiosSecure.get('/events/manager');
            return res.data;
        },
    });

    // Fetch payments received for their clubs
    const { data: payments = [], isLoading: paymentsLoading } = useQuery({
        queryKey: ['manager-payments'],
        queryFn: async () => {
            const res = await axiosSecure.get('/manager/payments');
            return res.data;
        },
    });

    if (clubsLoading || membersLoading || eventsLoading || paymentsLoading) return <Loading />;

    // Total payments sum
    const totalPayments = payments.reduce((sum, p) => sum + p.amount, 0);

    return (
        <div className="p-6 space-y-6">

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Manager Overview</h1>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-sm text-gray-500">Clubs Managed</h2>
                    <p className="text-3xl font-semibold text-gray-800 mt-2">{clubs.length}</p>
                </div>

                <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-sm text-gray-500">Total Members</h2>
                    <p className="text-3xl font-semibold text-gray-800 mt-2">{members.length}</p>
                </div>

                <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-sm text-gray-500">Events Created</h2>
                    <p className="text-3xl font-semibold text-gray-800 mt-2">{events.length}</p>
                </div>

                <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-sm text-gray-500">Payments Received</h2>
                    <p className="text-3xl font-semibold text-gray-800 mt-2">{totalPayments} BDT</p>
                </div>
            </div>

            {/* Additional Section */}
            <div className="mt-10 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Overview Summary</h2>

                <p className="text-gray-600 leading-relaxed text-sm">
                    This overview shows your club management statistics including number of clubs,
                    active members, event creation count, and total payments received.
                    More detailed analytics will be available inside each club dashboard.
                </p>
            </div>
        </div>
    );
};

export default ManagerDashboardHome;

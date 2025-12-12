import React from 'react';

const AdminDashboardHome = () => {
    return (
        <div className="p-6 md:p-10">

            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Admin Overview
            </h1>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-10">

                {/* Total Users */}
                <div className="bg-white shadow-xl border border-gray-300 rounded-lg p-5">
                    <p className="text-gray-500 text-sm">Total Users</p>
                    <h2 className="text-2xl font-bold text-gray-800 mt-2">1,245</h2>
                </div>

                {/* Total Clubs */}
                <div className="bg-white shadow-xl border border-gray-300 rounded-lg p-5">
                    <p className="text-gray-500 text-sm">Total Clubs</p>
                    <h2 className="text-xl font-semibold text-gray-800 mt-2">
                        <span className='text-purple-500'>Pending: 5</span><br />
                        <span className='text-green-500'>Approved: 28</span><br />
                        <span className='text-red-500'>Rejected: 2</span>
                    </h2>
                </div>

                {/* Total Memberships */}
                <div className="bg-white shadow-xl border border-gray-300 rounded-lg p-5">
                    <p className="text-gray-500 text-sm">Total Memberships</p>
                    <h2 className="text-2xl font-bold text-gray-800 mt-2">3,402</h2>
                </div>

                {/* Total Events */}
                <div className="bg-white shadow-xl border border-gray-300 rounded-lg p-5">
                    <p className="text-gray-500 text-sm">Total Events</p>
                    <h2 className="text-2xl font-bold text-gray-800 mt-2">142</h2>
                </div>

                {/* Total Payments */}
                <div className="bg-white shadow-xl border border-gray-300 rounded-lg p-5">
                    <p className="text-gray-500 text-sm">Total Payments</p>
                    <h2 className="text-2xl font-bold text-green-600 mt-2">$12,540</h2>
                </div>
            </div>

            {/* Chart / Graph Placeholder */}
            <div className="bg-white shadow-sm border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Memberships Per Club (Chart Placeholder)
                </h3>

                <div className="h-64 flex items-center justify-center text-gray-500 border border-dashed rounded-lg">
                    Chart will go here
                </div>
            </div>

        </div>
    );
};

export default AdminDashboardHome;
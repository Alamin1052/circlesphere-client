import React from 'react';

const ManagerDashboardHome = () => {
    return (
        <div className="p-6 min-h-screen bg-gradient-to-br from-[#eef2ff] to-[#fafcff]">

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Manager Overview</h1>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Clubs Managed */}
                <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-sm text-gray-500">Clubs Managed</h2>
                    <p className="text-3xl font-semibold text-gray-800 mt-2">03</p>
                </div>

                {/* Total Members */}
                <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-sm text-gray-500">Total Members</h2>
                    <p className="text-3xl font-semibold text-gray-800 mt-2">145</p>
                </div>

                {/* Events Created */}
                <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-sm text-gray-500">Events Created</h2>
                    <p className="text-3xl font-semibold text-gray-800 mt-2">12</p>
                </div>

                {/* Payments Received */}
                <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-sm text-gray-500">Payments Received</h2>
                    <p className="text-3xl font-semibold text-gray-800 mt-2">$1,240</p>
                </div>

            </div>

            {/* Additional Section */}
            <div className="mt-10 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Overview Summary</h2>

                <p className="text-gray-600 leading-relaxed text-sm">
                    This overview shows your club management statistics including number of clubs,
                    active members, event creation count, and total payments received. More detailed analytics
                    will be available inside each club dashboard.
                </p>
            </div>

        </div>

    );
};

export default ManagerDashboardHome;
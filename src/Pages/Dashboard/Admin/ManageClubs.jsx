import React from "react";

const ManageClubs = () => {
    return (
        <div className="p-6 md:p-10">

            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Manage Clubs
            </h1>

            {/* Clubs Table */}
            <div className="bg-white shadow-sm border border-gray-100 rounded-lg overflow-hidden">

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead className="bg-gray-200 text-gray-700">
                            <tr>
                                <th className="p-4 text-left text-sm font-medium">Club Name</th>
                                <th className="p-4 text-left text-sm font-medium">Manager Email</th>
                                <th className="p-4 text-left text-sm font-medium">Status</th>
                                <th className="p-4 text-left text-sm font-medium">Membership Fee</th>
                                <th className="p-4 text-left text-sm font-medium">Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {/* Row 1 */}
                            <tr className="">
                                <td className="p-4 text-gray-700">Tech Innovators Club</td>
                                <td className="p-4 text-gray-600">manager@techclub.com</td>

                                <td className="p-4">
                                    <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">
                                        Pending
                                    </span>
                                </td>

                                <td className="p-4 text-gray-700">$20</td>

                                <td className="p-4 flex gap-2 flex-wrap">

                                    <button className="px-3 py-1 text-sm bg-green-100 hover:bg-green-200 text-green-700 rounded-lg">
                                        Approve
                                    </button>

                                    <button className="px-3 py-1 text-sm bg-red-100 hover:bg-red-200 text-red-700 rounded-lg">
                                        Reject
                                    </button>

                                    <button className="px-3 py-1 text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg">
                                        View Stats
                                    </button>

                                </td>
                            </tr>

                            {/* Row 2 */}
                            <tr className="border-t">
                                <td className="p-4 text-gray-700">Science Enthusiasts Club</td>
                                <td className="p-4 text-gray-600">science.manager@gmail.com</td>

                                <td className="p-4">
                                    <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                                        Approved
                                    </span>
                                </td>

                                <td className="p-4 text-gray-700">$15</td>

                                <td className="p-4 flex gap-2 flex-wrap">
                                    <button className="px-3 py-1 text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg">
                                        View Stats
                                    </button>
                                </td>
                            </tr>

                            {/* Row 3 */}
                            <tr className="border-t">
                                <td className="p-4 text-gray-700">Cultural Arts Club</td>
                                <td className="p-4 text-gray-600">arts.manager@example.com</td>

                                <td className="p-4">
                                    <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-700">
                                        Rejected
                                    </span>
                                </td>

                                <td className="p-4 text-gray-700">$10</td>

                                <td className="p-4 flex gap-2 flex-wrap">
                                    <button className="px-3 py-1 text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg">
                                        View Stats
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default ManageClubs;

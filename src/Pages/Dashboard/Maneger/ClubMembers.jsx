import React from "react";

const ClubMembers = () => {
    return (
        <div className="p-12">

            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Club Members
            </h1>


            {/* Members Table */}
            <div className="bg-white shadow-sm border border-gray-100 rounded-lg overflow-hidden">

                <table className="w-full border-collapse">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-4 text-left text-sm font-medium text-gray-600">Name</th>
                            <th className="p-4 text-left text-sm font-medium text-gray-600">Email</th>
                            <th className="p-4 text-left text-sm font-medium text-gray-600">Status</th>
                            <th className="p-4 text-left text-sm font-medium text-gray-600">Join Date</th>
                            <th className="p-4 text-left text-sm font-medium text-gray-600">Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {/* Row 1 */}
                        <tr className="border-t">
                            <td className="p-4 text-gray-700">Rakib Hasan</td>
                            <td className="p-4 text-gray-600">rakib@example.com</td>

                            <td className="p-4">
                                <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                                    Active
                                </span>
                            </td>

                            <td className="p-4 text-gray-600">2024-02-19</td>

                            <td className="p-4">
                                <button className="px-3 py-1 text-sm bg-red-100 hover:bg-red-200 text-red-700 rounded-lg">
                                    Set Expired
                                </button>
                            </td>
                        </tr>

                        {/* Row 2 */}
                        <tr className="border-t">
                            <td className="p-4 text-gray-700">Mahin Islam</td>
                            <td className="p-4 text-gray-600">mahin@example.com</td>

                            <td className="p-4">
                                <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full">
                                    Pending
                                </span>
                            </td>

                            <td className="p-4 text-gray-600">2024-02-10</td>

                            <td className="p-4">
                                <button className="px-3 py-1 text-sm bg-red-100 hover:bg-red-200 text-red-700 rounded-lg">
                                    Set Expired
                                </button>
                            </td>
                        </tr>

                        {/* Row 3 */}
                        <tr className="border-t">
                            <td className="p-4 text-gray-700">Jannat Ara</td>
                            <td className="p-4 text-gray-600">jannat@example.com</td>

                            <td className="p-4">
                                <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                                    Active
                                </span>
                            </td>

                            <td className="p-4 text-gray-600">2024-01-28</td>

                            <td className="p-4">
                                <button className="px-3 py-1 text-sm bg-red-100 hover:bg-red-200 text-red-700 rounded-lg">
                                    Set Expired
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClubMembers;

import React from "react";

const EventRegistrations = () => {
    return (
        <div className="p-6 md:p-10">

            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Event Registrations
            </h1>

            {/* Event Info (Optional static block) */}
            <div className="mb-6 p-4 bg-white border border-gray-300 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold text-gray-700">
                    Event: Tech Summit 2025
                </h2>
                <p className="text-gray-600 text-sm">Total Registrations: 42</p>
            </div>

            {/* Registrations Table */}
            <div className="bg-white shadow-sm border border-gray-100 rounded-lg overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-4 text-left text-sm font-medium text-gray-800">
                                User Email
                            </th>
                            <th className="p-4 text-left text-sm font-medium text-gray-800">
                                Status
                            </th>
                            <th className="p-4 text-left text-sm font-medium text-gray-800">
                                Registered At
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {/* Row 1 */}
                        <tr className="border-t border-gray-300">
                            <td className="p-4 text-gray-700">rakib@example.com</td>

                            <td className="p-4">
                                <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                                    Registered
                                </span>
                            </td>

                            <td className="p-4 text-gray-600">2025-01-10 15:22</td>
                        </tr>

                        {/* Row 2 */}
                        <tr className="border-t">
                            <td className="p-4 text-gray-700">mahin@example.com</td>

                            <td className="p-4">
                                <span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">
                                    Cancelled
                                </span>
                            </td>

                            <td className="p-4 text-gray-600">2025-01-09 11:40</td>
                        </tr>

                        {/* Row 3 */}
                        <tr className="border-t">
                            <td className="p-4 text-gray-700">jannat@example.com</td>

                            <td className="p-4">
                                <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                                    Registered
                                </span>
                            </td>

                            <td className="p-4 text-gray-600">2025-01-07 09:55</td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default EventRegistrations;

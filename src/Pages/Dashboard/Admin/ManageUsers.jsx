import React from "react";

const ManageUsers = () => {
    return (
        <div className="p-6 md:p-10">

            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Manage Users
            </h1>

            {/* Users Table */}
            <div className="bg-white shadow-sm border border-gray-100 rounded-lg overflow-hidden">

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead className="bg-gray-200 text-gray-700">
                            <tr>
                                <th className="p-4 text-left text-sm font-medium">Name</th>
                                <th className="p-4 text-left text-sm font-medium">Email</th>
                                <th className="p-4 text-left text-sm font-medium">Role</th>
                                <th className="p-4 text-left text-sm font-medium">Created At</th>
                                <th className="p-4 text-left text-sm font-medium">Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            {/* Row 1 */}
                            <tr className="border-t">
                                <td className="p-4 text-gray-700">Rakib Hasan</td>
                                <td className="p-4 text-gray-600">rakib@example.com</td>
                                <td className="p-4">
                                    <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                                        member
                                    </span>
                                </td>
                                <td className="p-4 text-gray-600">2024-02-19</td>

                                <td className="p-4">

                                    {/* Role Change Dropdown */}
                                    <details className="dropdown">
                                        <summary className="m-1 btn btn-sm bg-gray-100">
                                            Change Role
                                        </summary>
                                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40">
                                            <li><a>Make Admin</a></li>
                                            <li><a>Make Manager</a></li>
                                            <li><a>Make Member</a></li>
                                        </ul>
                                    </details>

                                </td>
                            </tr>

                            {/* Row 2 */}
                            <tr className="border-t">
                                <td className="p-4 text-gray-700">Mahin Islam</td>
                                <td className="p-4 text-gray-600">mahin@example.com</td>
                                <td className="p-4">
                                    <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                                        admin
                                    </span>
                                </td>
                                <td className="p-4 text-gray-600">2024-01-11</td>

                                <td className="p-4">
                                    <details className="dropdown">
                                        <summary className="m-1 btn btn-sm bg-gray-100">
                                            Change Role
                                        </summary>
                                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40">
                                            <li><a>Make Admin</a></li>
                                            <li><a>Make Manager</a></li>
                                            <li><a>Make Member</a></li>
                                        </ul>
                                    </details>
                                </td>
                            </tr>

                            {/* Row 3 */}
                            <tr className="border-t">
                                <td className="p-4 text-gray-700">Jannat Ara</td>
                                <td className="p-4 text-gray-600">jannat@example.com</td>
                                <td className="p-4">
                                    <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">
                                        manager
                                    </span>
                                </td>
                                <td className="p-4 text-gray-600">2023-12-02</td>

                                <td className="p-4">
                                    <details className="dropdown">
                                        <summary className="m-1 btn btn-sm bg-gray-100">
                                            Change Role
                                        </summary>
                                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40">
                                            <li><a>Make Admin</a></li>
                                            <li><a>Make Manager</a></li>
                                            <li><a>Make Member</a></li>
                                        </ul>
                                    </details>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default ManageUsers;

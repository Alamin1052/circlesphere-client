import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageUsers = () => {

    const axiosSecure = useAxiosSecure();
    const [searchText, setSearchText] = useState('')

    const { refetch, isLoading, data: users = [] } = useQuery({
        queryKey: ['users', searchText],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?searchText=${searchText}`);
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        const roleInfo = { role: 'admin' }
        //TODO: must ask for confirmation before proceed
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.displayName} marked as an Admin`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }

    const handleMakeManager = user => {
        const roleInfo = { role: 'manager' }
        //TODO: must ask for confirmation before proceed
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.displayName} marked as a manager`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }
    const handleMakeMember = user => {
        const roleInfo = { role: 'member' }
        //TODO: must ask for confirmation before proceed
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.displayName} marked as a member`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }

    return (
        <div className="p-6 md:p-10">

            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Manage Users: {users.length}
            </h1>
            <p>search user: {searchText}</p>
            <label className="input mb-6">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="search"
                    className="grow"
                    placeholder="Search users" />

            </label>

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
                            {isLoading ? (
                                <tr>
                                    <td colSpan={4} className="p-4 text-center">
                                        Loading...
                                    </td>
                                </tr>
                            ) : users.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="p-4 text-center">
                                        No users found
                                    </td>
                                </tr>
                            ) : (
                                users.map((user) => (
                                    <tr key={user._id}>
                                        {/* <td className="p-4 text-gray-700"></td> */}
                                        <td className="p-4 text-gray-700 flex items-center gap-2">
                                            <img className="w-10 h-10 object-cover rounded-full" src={user.photoURL} alt="" />
                                            {user.displayName}</td>
                                        <td className="p-4 text-gray-600">{user.email}</td>
                                        <td className="p-4">
                                            <span
                                                className={`px-3 py-1 text-xs rounded-full ${user.role === "admin"
                                                    ? "bg-red-100 text-red-700"
                                                    : user.role === "manager"
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : "bg-blue-100 text-blue-700"
                                                    }`}
                                            >
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="p-4 text-gray-600">
                                            {new Date(user.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="p-4">

                                            <details className="dropdown">
                                                <summary className="m-1 btn btn-sm bg-gray-100">
                                                    Change Role
                                                </summary>
                                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40">
                                                    <li onClick={() => handleMakeAdmin(user)}><a>Make Admin</a></li>
                                                    <li
                                                        onClick={() => handleMakeManager(user)}
                                                    ><a>Make Manager</a></li>
                                                    <li
                                                        onClick={() => handleMakeMember(user)}
                                                    ><a>Make Member</a></li>
                                                </ul>
                                            </details>

                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

            </div>

        </div >
    );
};

export default ManageUsers;

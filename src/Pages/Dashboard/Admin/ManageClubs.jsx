import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loading from "../../../Component/Loading";

const ManageClubs = () => {
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();


    const { data: clubs = [], isLoading } = useQuery({
        queryKey: ["all-clubs"],
        queryFn: async () => {
            const res = await axiosSecure.get("/clubs");
            return res.data;
        },
    });

    const updateStatusMutation = useMutation({
        mutationFn: async ({ clubId, status }) => {
            const res = await axiosSecure.patch(`/clubs/${clubId}/status`, { status });
            return res.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["all-clubs"]);
        },
    });

    if (isLoading) return <Loading />;

    return (
        <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Manage Clubs</h1>

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
                            {clubs.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="text-center p-4 text-gray-500">
                                        No clubs found.
                                    </td>
                                </tr>
                            ) : (
                                clubs.map((club) => (
                                    <tr key={club._id} className="hover:bg-gray-50">
                                        <td className="p-4 text-gray-700">{club.clubName}</td>
                                        <td className="p-4 text-gray-600">{club.managerEmail}</td>
                                        <td className="p-4">
                                            <span
                                                className={`px-3 py-1 text-xs rounded-full ${club.status === "approved"
                                                    ? "bg-green-100 text-green-700"
                                                    : club.status === "rejected"
                                                        ? "bg-red-100 text-red-700"
                                                        : "bg-yellow-100 text-yellow-700"
                                                    }`}
                                            >
                                                {club.status.charAt(0).toUpperCase() + club.status.slice(1)}
                                            </span>
                                        </td>
                                        <td className="p-4 text-gray-700">{club.membershipFee || "N/A"}</td>
                                        <td className="p-4 flex gap-2 flex-wrap">
                                            {club.status === "pending" && (
                                                <>
                                                    <button
                                                        onClick={() =>
                                                            updateStatusMutation.mutate({
                                                                clubId: club._id,
                                                                status: "approved",
                                                            })
                                                        }
                                                        className="px-3 py-1 text-sm bg-green-100 hover:bg-green-200 text-green-700 rounded-lg"
                                                    >
                                                        Approve
                                                    </button>

                                                    <button
                                                        onClick={() =>
                                                            updateStatusMutation.mutate({
                                                                clubId: club._id,
                                                                status: "rejected",
                                                            })
                                                        }
                                                        className="px-3 py-1 text-sm bg-red-100 hover:bg-red-200 text-red-700 rounded-lg"
                                                    >
                                                        Reject
                                                    </button>
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageClubs;

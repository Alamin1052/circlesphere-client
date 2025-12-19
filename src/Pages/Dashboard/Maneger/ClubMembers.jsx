import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loading from '../../../Component/Loading';

const ClubMembers = () => {
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();

    const { data: members = [], isLoading } = useQuery({
        queryKey: ['manager-members'],
        queryFn: async () => {
            const res = await axiosSecure.get('/manager/members');
            return res.data;
        },
    });

    const expireMutation = useMutation({
        mutationFn: async (membershipId) => {
            const res = await axiosSecure.patch(`/membership/${membershipId}/status`, { status: 'expired' });
            return res.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['manager-members']);
        }
    });

    if (isLoading) return <Loading />;

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Club Members</h2>

            {members.length === 0 ? (
                <p className="text-gray-500">No members found.</p>
            ) : (
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-3 border">Club Name</th>
                            <th className="p-3 border">Email</th>
                            <th className="p-3 border">Status</th>
                            <th className="p-3 border">Joined At</th>
                            <th className="p-3 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map(member => (
                            <tr key={member._id} className="hover:bg-gray-50 bg-white rounded-xl">
                                <td className="p-3 border">{member.clubName || 'N/A'}</td>
                                <td className="p-3 border">{member.userEmail}</td>
                                <td className="p-3 border capitalize">{member.status}</td>
                                <td className="p-3 border">{new Date(member.joinedAt).toLocaleDateString()}</td>
                                <td className="p-3 border">
                                    {member.status !== 'expired' && (
                                        <button
                                            onClick={() => expireMutation.mutate(member._id)}
                                            className="btn bg-red-500 text-white px-3 py-1 rounded"
                                        >
                                            Expire
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ClubMembers;

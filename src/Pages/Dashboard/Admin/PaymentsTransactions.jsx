import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loading from "../../../Component/Loading";

const PaymentTransactions = () => {
    const axiosSecure = useAxiosSecure();

    const { data: payments = [], isLoading } = useQuery({
        queryKey: ["all-payments"],
        queryFn: async () => {
            const res = await axiosSecure.get("/admin/payments");
            return res.data;
        },
    });

    if (isLoading) return <Loading />;

    return (
        <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Payment Transactions
            </h1>

            <div className="bg-white shadow-sm border border-gray-100 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead className="bg-gray-200 text-gray-700">
                            <tr>
                                <th className="p-4 text-left text-sm font-medium">User Email</th>
                                <th className="p-4 text-left text-sm font-medium">Amount</th>
                                <th className="p-4 text-left text-sm font-medium">Type</th>
                                <th className="p-4 text-left text-sm font-medium">Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {payments.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="text-center p-6 text-gray-500">
                                        No payment records found.
                                    </td>
                                </tr>
                            ) : (
                                payments.map(payment => (
                                    <tr
                                        key={payment._id}
                                        className="hover:bg-gray-50 border-t"
                                    >
                                        <td className="p-4 text-gray-700">
                                            {payment.userEmail}
                                        </td>

                                        <td className="p-4 font-medium text-gray-800">
                                            {payment.amount} BDT
                                        </td>

                                        <td className="p-4 capitalize">
                                            <span
                                                className={`px-3 py-1 text-xs rounded-full
                                                ${payment.type === "membership"
                                                        ? "bg-blue-100 text-blue-700"
                                                        : "bg-purple-100 text-purple-700"
                                                    }`}
                                            >
                                                {payment.type}
                                            </span>
                                        </td>

                                        <td className="p-4 text-gray-600 text-sm">
                                            {new Date(payment.createdAt).toLocaleDateString()}
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

export default PaymentTransactions;

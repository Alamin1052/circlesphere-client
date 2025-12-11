import React from "react";

const PaymentHistory = () => {
    // static dummy payments
    const payments = [
        {
            id: 1,
            amount: 500,
            type: "membership",
            club: "Tech Club",
            date: "2025-01-12",
            status: "successful",
        },
        {
            id: 2,
            amount: 300,
            type: "event",
            club: "Photography Club",
            date: "2025-02-05",
            status: "successful",
        },
        {
            id: 3,
            amount: 200,
            type: "membership",
            club: "Cultural Club",
            date: "2024-12-22",
            status: "failed",
        },
        {
            id: 4,
            amount: 450,
            type: "membership",
            club: "Robotics Society",
            date: "2025-03-18",
            status: "pending",
        },
    ];

    const statusBadge = (status) => {
        if (status === "successful")
            return "bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium";

        if (status === "pending")
            return "bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium";

        return "bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-medium";
    };

    return (
        <div className="space-y-6 p-12">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Payment History</h1>
                <p className="text-gray-600">All your past payments for memberships & events.</p>
            </div>

            <div className="overflow-x-auto rounded-xl shadow">
                <table className="min-w-full bg-white rounded-xl">
                    <thead>
                        <tr className="bg-gray-200 text-left text-gray-800 text-sm">
                            <th className="py-3 px-4">Amount</th>
                            <th className="py-3 px-4">Type</th>
                            <th className="py-3 px-4">Club</th>
                            <th className="py-3 px-4">Date</th>
                            <th className="py-3 px-4">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {payments.map((pay) => (
                            <tr
                                key={pay.id}
                                className="border-b border-gray-300 last:border-0 hover:bg-gray-100 transition"
                            >
                                <td className="py-5 px-4 font-medium text-gray-800">
                                    ৳{pay.amount}
                                </td>
                                <td className="py-5 px-4 capitalize text-gray-700">
                                    {pay.type}
                                </td>
                                <td className="py-5 px-4 text-gray-700">
                                    {pay.club}
                                </td>
                                <td className="py-5 px-4 text-gray-700">
                                    {new Date(pay.date).toLocaleDateString()}
                                </td>
                                <td className="py-5 px-4">
                                    <span className={statusBadge(pay.status)}>
                                        {pay.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Empty state */}
            {/* <p className="text-center text-gray-500 mt-6">No payments found.</p> */}
        </div>
    );
};

export default PaymentHistory;

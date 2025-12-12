import React from "react";

const PaymentsTransactions = () => {
    const payments = [
        {
            id: 1,
            userEmail: "john@example.com",
            amount: "$20",
            type: "Membership",
            clubName: "Tech Innovators",
            date: "2025-01-03",
        },
        {
            id: 2,
            userEmail: "sara@example.com",
            amount: "$10",
            type: "Event",
            clubName: "Design Club",
            date: "2025-01-02",
        },
        {
            id: 3,
            userEmail: "mark@example.com",
            amount: "$15",
            type: "Membership",
            clubName: "Sports Club",
            date: "2025-01-01",
        },
    ];

    return (
        <div className="p-6 md:p-10">
            {/* Header */}
            <h2 className="text-2xl font-bold mb-6 text-center">Payments / Transactions</h2>

            <div className="bg-white shadow-md rounded-2xl overflow-x-auto">
                <table className="w-full text-left text-sm md:text-base border-collapse">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3">User Email</th>
                            <th className="p-3">Amount</th>
                            <th className="p-3">Type</th>
                            <th className="p-3">Club Name</th>
                            <th className="p-3">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((p) => (
                            <tr key={p.id} className="hover:bg-gray-100 border-b border-gray-300">
                                <td className="p-4">{p.userEmail}</td>
                                <td className="p-4 font-semibold">{p.amount}</td>
                                <td className="p-4">{p.type}</td>
                                <td className="p-4">{p.clubName}</td>
                                <td className="p-4">{p.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentsTransactions;
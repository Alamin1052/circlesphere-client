import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loading from '../../../Component/Loading';

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();

    const { data: payments = [], isLoading } = useQuery({
        queryKey: ['my-payments'],
        queryFn: async () => {
            const res = await axiosSecure.get('/my-payments');
            return res.data;
        }
    });

    if (isLoading) return <Loading />;

    if (payments.length === 0) {
        return (
            <p className="text-center mt-10 text-gray-500">
                You have no past payments.
            </p>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6">
            <h2 className="text-2xl font-bold mb-4 sm:mb-6">Payment History</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2 sm:p-3 border text-left">Amount</th>
                            <th className="p-2 sm:p-3 border text-left">Type</th>
                            <th className="p-2 sm:p-3 border text-left">Club/Event</th>
                            <th className="p-2 sm:p-3 border text-left">Date</th>
                            <th className="p-2 sm:p-3 border text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map(payment => (
                            <tr key={payment._id} className="hover:bg-gray-50">
                                <td className="p-2 sm:p-3 border">{payment.amount} BDT</td>
                                <td className="p-2 sm:p-3 border capitalize">{payment.type}</td>
                                <td className="p-2 sm:p-3 border">{payment.name}</td>
                                <td className="p-2 sm:p-3 border">{new Date(payment.date).toLocaleString()}</td>
                                <td className={`p-2 sm:p-3 border font-medium ${payment.status === 'completed' ? 'text-green-600' : 'text-red-600'}`}>
                                    {payment.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;

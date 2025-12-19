import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const COLORS = ['#22c55e', '#3b82f6'];

const AdminPaymentPieChart = () => {
    const axiosSecure = useAxiosSecure();

    const { data = [] } = useQuery({
        queryKey: ['payment-breakdown'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin/payment-breakdown');
            return res.data;
        }
    });

    return (
        <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">
                Payment Breakdown
            </h3>

            <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={90}
                            label
                        >
                            {data.map((_, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>

                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AdminPaymentPieChart;

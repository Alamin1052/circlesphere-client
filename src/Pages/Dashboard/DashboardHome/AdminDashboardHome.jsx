import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loading from '../../../Component/Loading';
import AdminPaymentPieChart from '../Admin/AdminPaymentPieChart';


const AdminDashboardHome = () => {
    const axiosSecure = useAxiosSecure();

    const { data, isLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin/stats');
            return res.data;
        }
    });

    if (isLoading) return <Loading />;

    const {
        totalUsers,
        clubs,
        totalMemberships,
        totalEvents,
        totalPayments
    } = data;

    return (
        <div className="p-6 md:p-10">

            <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Admin Overview
            </h1>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-10">

                <StatCard title=" Total Users" value={totalUsers} />

                <div className="bg-white shadow-xl border rounded-lg p-5">
                    <p className="text-gray-500 text-sm">Total Clubs</p>
                    <h2 className="text-sm font-semibold mt-2 space-y-1">
                        <p className="text-purple-600">Pending: {clubs.pending}</p>
                        <p className="text-green-600">Approved: {clubs.approved}</p>
                        <p className="text-red-600">Rejected: {clubs.rejected}</p>
                    </h2>
                </div>

                <StatCard title="Total Memberships" value={totalMemberships} />
                <StatCard title="Total Events" value={totalEvents} />
                <StatCard title="Total Payments" value={`$${totalPayments}`} highlight />

            </div>

            {/* Charts Section */}
            <div className="">
                <AdminPaymentPieChart />

            </div>

        </div>

    );
};

const StatCard = ({ title, value, highlight }) => (
    <div className="bg-white shadow-xl border rounded-lg p-5">
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className={`text-2xl font-bold mt-2 ${highlight ? 'text-green-600' : 'text-gray-800'}`}>
            {value}
        </h2>
    </div>
);

export default AdminDashboardHome;

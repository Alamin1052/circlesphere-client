import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loading from '../../../Component/Loading';


const MyEvents = () => {
    const axiosSecure = useAxiosSecure();

    const { data: events = [], isLoading } = useQuery({
        queryKey: ['my-events'],
        queryFn: async () => {
            const res = await axiosSecure.get('/my-events');
            return res.data;
        }
    });

    if (isLoading) return <Loading />;

    if (events.length === 0) {
        return (
            <p className="text-center text-2xl pt-10 text-gray-500">
                You have not registered for any events yet.
            </p>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">My Events</h2>

            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-3 border">Event</th>
                        <th className="p-3 border">Location</th>
                        <th className="p-3 border">Date</th>
                        <th className="p-3 border">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event => (
                        <tr key={event._id} className="hover:bg-gray-50">
                            <td className="p-3 border">{event.eventTitle}</td>
                            <td className="p-3 border">{event.location}</td>
                            <td className="p-3 border">{new Date(event.eventDate).toDateString()}</td>
                            <td className="p-3 border font-medium text-green-600">Active</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyEvents;

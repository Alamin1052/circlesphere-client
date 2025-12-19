import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loading from '../../../Component/Loading';

const MyClubs = () => {
    const axiosSecure = useAxiosSecure();

    const { data: clubs = [], isLoading } = useQuery({
        queryKey: ['my-clubs'],
        queryFn: async () => {
            const res = await axiosSecure.get('/my-clubs');
            return res.data;
        }
    });

    if (isLoading) return <Loading />;

    if (clubs.length === 0) {
        return (
            <p className="text-center text-2xl pt-10 text-gray-500">
                You have not joined any club yet.
            </p>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">My Clubs</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clubs.map(club => (
                    <div
                        key={club._id}
                        className="bg-white rounded-xl shadow p-4"
                    >
                        <img
                            src={club.bannerImage}
                            alt={club.clubName}
                            className="h-40 w-full object-cover rounded-lg"
                        />

                        <h3 className="text-xl font-semibold mt-3">
                            {club.clubName}
                        </h3>

                        <p className="text-gray-600">
                            📍 {club.location}
                        </p>

                        <p className="text-green-600 font-medium mt-1">
                            Status: {club.status}
                        </p>

                        {club.expiresAt && (
                            <p className="text-sm text-gray-500">
                                Expires on: {new Date(club.expiresAt).toDateString()}
                            </p>
                        )}

                        <Link
                            to={`/club-details/${club._id}`}
                            className="inline-block mt-3 text-blue-500 underline"
                        >
                            View Details →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyClubs;

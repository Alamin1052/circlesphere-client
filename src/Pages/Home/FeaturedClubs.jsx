import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../../Component/Loading';

const FeaturedClubs = () => {

    const { data: clubs = [], isLoading } = useQuery({
        queryKey: ['featured-clubs'],
        queryFn: async () => {
            const res = await axios.get('https://circlesphere-server.vercel.app/featured-clubs');
            return res.data;
        }
    });

    if (isLoading) return <Loading />;

    return (
        <section className="max-w-7xl mx-auto px-6 py-8">
            <h2 className="text-3xl text-gray-800 text-center font-bold mb-6">
                Featured Clubs
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {clubs.map((c) => (
                    <div key={c._id} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm 
                                 flex flex-col justify-between h-full transform transition duration-300 hover:scale-105 hover:shadow-lg">
                        <img
                            src={c.bannerImage}
                            alt="banner"
                            className="w-full h-32 rounded-lg object-cover"
                        />

                        <h2 className="text-xl font-semibold text-gray-800 mt-4">
                            {c.clubName}
                        </h2>

                        <p className="text-sm text-gray-600 mt-1">
                            Location: {c.location}
                        </p>

                        <p className="text-sm text-gray-600">
                            Membership Fee: {c.membershipFee} BDT
                        </p>

                        <p className="text-sm text-indigo-600 mt-2">
                            Category: {c.category}
                        </p>
                        <Link
                            to={`/club-details/${c._id}`}
                            className='btn bg-blue-500 text-white mt-2'
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedClubs;

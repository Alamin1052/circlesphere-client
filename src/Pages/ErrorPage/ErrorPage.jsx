import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <h1 className="text-7xl font-extrabold text-indigo-600">404</h1>

            <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                Oops! Page not found
            </h2>

            <p className="mt-2 text-gray-600 text-center max-w-md">
                The page you are looking for doesn’t exist or might have been moved.
                Let’s get you back to CircleSphere.
            </p>

            <div className="mt-6 flex gap-4">
                <Link
                    to="/"
                    className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
                >
                    Go Home
                </Link>

                <Link
                    to="/clubs"
                    className="px-6 py-2 rounded-lg border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition"
                >
                    Explore Clubs
                </Link>
            </div>

            <p className="mt-10 text-sm text-gray-400">
                © {new Date().getFullYear()} CircleSphere
            </p>
        </div>
    );
};

export default ErrorPage;

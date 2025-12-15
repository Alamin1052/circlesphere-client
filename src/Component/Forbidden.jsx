import React from "react";
import { Link } from "react-router-dom";

const Forbidden = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-xl p-10 text-center max-w-md">
                <h1 className="text-6xl font-bold text-red-500 mb-4">403</h1>
                <h2 className="text-2xl font-semibold mb-4">Access Forbidden</h2>
                <p className="text-gray-600 mb-6">
                    You do not have permission to view this page.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default Forbidden;

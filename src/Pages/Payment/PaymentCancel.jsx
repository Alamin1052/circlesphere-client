import React from 'react';
import { Link } from 'react-router-dom';

const PaymentCancel = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
            <div className="bg-white p-10 rounded-xl shadow-lg text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">❌ Payment Cancelled</h1>
                <p className="text-gray-700 mb-6">Your payment was not completed. Please try again.</p>
                <Link to="/" className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
};

export default PaymentCancel;

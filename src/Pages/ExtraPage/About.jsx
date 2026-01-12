import React from "react";

const About = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        About CircleSphere
                    </h1>
                    <p className="text-lg max-w-3xl mx-auto opacity-90">
                        A modern platform to manage clubs, organize events, and bring
                        communities together.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto max-sm:px-6 px-4 py-16 space-y-20">

                {/* Mission */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Our mission is to simplify community building by providing a
                        powerful, secure, and easy-to-use platform for clubs and event
                        organizers. We help people connect, collaborate, and celebrate
                        meaningful moments together.
                    </p>
                </section>

                {/* What we offer */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
                        What We Offer
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-xl font-semibold mb-3">For Users</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Join clubs and communities</li>
                                <li>• Register for events</li>
                                <li>• Secure online payments</li>
                                <li>• Event tracking & notifications</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-xl font-semibold mb-3">For Club Managers</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Create and manage clubs</li>
                                <li>• Publish events</li>
                                <li>• Track participants</li>
                                <li>• Manage payments</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-xl font-semibold mb-3">For Admins</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Approve clubs & events</li>
                                <li>• Monitor users</li>
                                <li>• Manage transactions</li>
                                <li>• Ensure platform security</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Why CircleSphere */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Why CircleSphere?
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        CircleSphere provides a complete ecosystem for managing clubs and
                        events — combining simplicity, security, and scalability. From
                        small student clubs to large organizations, we help everyone
                        operate smoothly and professionally.
                    </p>
                </section>

                {/* Vision */}
                <section className="bg-white p-10 rounded-xl shadow text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        We envision a future where every community can organize and grow
                        without technical barriers. CircleSphere aims to become the
                        trusted digital hub for all clubs and events worldwide.
                    </p>
                </section>

            </div>
        </div>
    );
};

export default About;

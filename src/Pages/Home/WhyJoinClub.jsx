import React from "react";
import { FaLightbulb, FaUsers, FaHandshake, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const WhyJoinClub = () => {
    const benefits = [
        {
            icon: <FaLightbulb className="text-4xl text-yellow-500" />,
            title: "Learn New Skills",
            description: "Participate in workshops and events to develop your personal and professional skills."
        },
        {
            icon: <FaUsers className="text-4xl text-green-500" />,
            title: "Meet Like-minded People",
            description: "Connect with people who share your interests and passions."
        },
        {
            icon: <FaHandshake className="text-4xl text-blue-500" />,
            title: "Networking Opportunities",
            description: "Build relationships with peers, mentors, and industry professionals."
        },
        {
            icon: <FaStar className="text-4xl text-purple-500" />,
            title: "Boost Your Profile",
            description: "Enhance your resume and experience by actively participating in club activities."
        }
    ];

    // Framer Motion variants
    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section className="py-16 ">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12">Why Join a Club?</h2>

                <motion.div
                    className="grid md:grid-cols-4 gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition"
                            variants={item}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="mb-4 flex justify-center">{benefit.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyJoinClub;

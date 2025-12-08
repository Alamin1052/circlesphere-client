import React from "react";
import { FaUserPlus, FaCalendarAlt, FaHandshake, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const HowItWorks = () => {
    const steps = [
        {
            icon: <FaUserPlus className="text-4xl text-blue-600" />,
            title: "Join a Club",
            description: "Browse through clubs and join the ones that match your interests."
        },
        {
            icon: <FaCalendarAlt className="text-4xl text-blue-600" />,
            title: "Participate in Events",
            description: "Stay updated and join upcoming events organized by your club."
        },
        {
            icon: <FaHandshake className="text-4xl text-blue-600" />,
            title: "Connect & Network",
            description: "Meet like-minded people and expand your social and professional network."
        },
        {
            icon: <FaRocket className="text-4xl text-blue-600" />,
            title: "Grow Your Skills",
            description: "Engage in workshops and activities to enhance your skills and knowledge."
        }
    ];

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
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12">How CircleSphere Works</h2>

                <motion.div
                    className="grid md:grid-cols-4 gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
                            variants={item}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="mb-4 flex justify-center mx-auto">{step.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;

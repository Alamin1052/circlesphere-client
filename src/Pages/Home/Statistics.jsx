import React from "react";
import { motion } from "framer-motion";

const stats = [
    { title: "Clubs", value: 120 },
    { title: "Events", value: 350 },
    { title: "Members", value: 5000 },
    { title: "Payments", value: 2000 },
];

const Statistics = () => {
    return (
        <section className="py-20 bg-indigo-50 dark:bg-indigo-900 text-gray-900 dark:text-gray-100">
            <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold"
                >
                    Highlights
                </motion.h2>
                <p className="text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
                    Some quick statistics showing the scale of our community.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
                        >
                            <p className="text-3xl font-bold">{stat.value}+</p>
                            <p className="text-gray-600 dark:text-gray-300 mt-2">{stat.title}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;

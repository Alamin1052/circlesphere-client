import React from "react";
import { motion } from "framer-motion";

const testimonials = [
    { name: "Alice", text: "CircleSphere helped me find my dream music club!" },
    { name: "Bob", text: "I love attending events organized here." },
    { name: "Charlie", text: "Managing my club has never been easier." },
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-8"
                >
                    What Users Say
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
                        >
                            <p className="text-gray-700 dark:text-gray-200 mb-4">"{t.text}"</p>
                            <p className="font-semibold text-indigo-500">{t.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

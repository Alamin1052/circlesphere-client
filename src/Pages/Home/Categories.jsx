import React from "react";
import { motion } from "framer-motion";

const categories = ["Sports", "Music", "Tech", "Art", "Volunteering", "Education"];

const Categories = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-6"
                >
                    Club Categories
                </motion.h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
                    Explore clubs by your favorite categories and join like-minded communities.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow hover:shadow-lg cursor-pointer transition"
                        >
                            {cat}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;

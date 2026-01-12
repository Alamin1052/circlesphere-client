import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
    return (
        <section className="py-20 my-12 bg-blue-500 dark:bg-indigo-700 text-white text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4"
            >
                Stay Updated
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-8"
            >
                Subscribe to our newsletter and never miss an event or club update.
            </motion.p>

            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
            >
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-3 rounded-lg w-full sm:w-auto text-gray-900"
                />
                <button
                    type="submit"
                    className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-200 transition"
                >
                    Subscribe
                </button>
            </motion.form>
        </section>
    );
};

export default Newsletter;

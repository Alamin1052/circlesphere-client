import React from "react";
import { motion } from "framer-motion";

const blogs = [
    { title: "Top 5 Clubs to Join This Month", desc: "Discover the most active clubs for this month and meet new people." },
    { title: "How to Host Successful Events", desc: "Tips and tricks to manage and host amazing events in your community." },
    { title: "Secure Payment Tips", desc: "Learn how CircleSphere keeps your transactions safe." },
];

const Blogs = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-8"
                >
                    Latest Blogs
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogs.map((blog, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{blog.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;

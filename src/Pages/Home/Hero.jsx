import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaStar } from "react-icons/fa";

const Hero = () => {
    // Floating icon variants
    const floatVariant = {
        animate: {
            y: [0, -20, 0],
            rotate: [0, 15, -15, 0],
            transition: {
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
            },
        },
    };

    return (
        <section className="w-full h-[500px] relative overflow-hidden py-20 bg-gradient-to-br from-indigo-100 to-purple-200 dark:from-gray-900 dark:to-gray-800">

            {/* Floating icons */}
            <motion.div
                className="absolute top-10 left-10 text-indigo-300 text-2xl md:text-3xl"
                variants={floatVariant}
                animate="animate"
            >
                <FaStar />
            </motion.div>
            <motion.div
                className="absolute top-32 right-20 text-pink-300 text-3xl md:text-4xl"
                variants={floatVariant}
                animate="animate"
            >
                <FaHeart />
            </motion.div>
            <motion.div
                className="absolute bottom-20 left-1/2 text-yellow-300 text-2xl md:text-3xl"
                variants={floatVariant}
                animate="animate"
            >
                <FaStar />
            </motion.div>

            {/* Main content */}
            <div className="max-w-4xl mx-auto text-center px-6 relative z-10">

                {/* MAIN TEXT */}
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[#4F80FF] text-2xl font-semibold tracking-wide"
                >
                    Welcome to CircleSphere
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold leading-tight mt-4"
                >
                    Discover clubs, meet new people,{" "}
                    <span className="text-[#4F80FF]">share your passions.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mt-6"
                >
                    Join thousands of people exploring new interests, attending events,
                    and creating meaningful connections. CircleSphere helps you find
                    communities that match your vibe.
                </motion.p>

                {/* BUTTONS */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex justify-center gap-4 pt-8"
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/clubs"
                        className="px-6 py-3 bg-[#4F80FF] text-white rounded-lg font-semibold hover:bg-[#3B67DB] transition"
                    >
                        Join a Club
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/events"
                        className="px-6 py-3 border border-[#4F80FF] text-[#4F80FF] rounded-lg font-semibold hover:bg-[#F3F6FF] dark:hover:bg-gray-700 transition"
                    >
                        Join an Event
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

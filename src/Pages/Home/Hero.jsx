import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaStar } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="w-full  relative overflow-hidden py-10">


            <div className="max-w-4xl mx-auto text-center px-6">

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
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-6xl font-bold leading-tight mt-4"
                >
                    Discover clubs, meet new people,{" "}
                    <span className="text-[#4F80FF]">share your passions.</span>
                </motion.h1>


                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mt-6"
                >
                    Join thousands of people exploring new interests, attending events,
                    and creating meaningful connections. CircleSphere helps you find
                    communities that match your vibe.
                </motion.p>

                {/* BUTTONS */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex justify-center gap-4 pt-8"
                >
                    <a
                        href="/clubs"
                        className="px-6 py-3 bg-[#4F80FF] text-white rounded-lg font-semibold hover:bg-[#3B67DB] transition"
                    >
                        Join a Club
                    </a>

                    <a
                        href="/events"
                        className="px-6 py-3 border border-[#4F80FF] text-[#4F80FF] rounded-lg font-semibold hover:bg-[#F3F6FF] transition"
                    >
                        Join an Event
                    </a>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;

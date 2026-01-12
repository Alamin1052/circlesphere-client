import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
    { question: "How do I join a club?", answer: "Simply browse clubs and click 'Join a Club'. Follow the instructions to complete registration." },
    { question: "How can I register for an event?", answer: "Go to the events page, select your desired event, and click 'Join an Event'." },
    { question: "Is payment safe?", answer: "Yes! All payments are secured through our encrypted payment system." },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="max-w-5xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                >
                    Frequently Asked Questions
                </motion.h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow cursor-pointer"
                            onClick={() => toggle(i)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-lg">{faq.question}</h3>
                                <FaChevronDown
                                    className={`transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                                />
                            </div>
                            {openIndex === i && <p className="mt-4 text-gray-600 dark:text-gray-300">{faq.answer}</p>}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Logo from "./Logo";

const Footer = () => {
    return (
        <footer className="bg-base-200 shadow-2xl border-2 border-gray-300 rounded-t-2xl text-gray-300 pt-15">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

                {/* About / Contact Info */}
                <div className="text-center md:text-left mb-6 md:mb-0">
                    <div className="flex justify-center md:flex md:justify-start"><Logo /></div>
                    <p className="text-slate-800 max-w-sm">
                        CircleSphere is your hub to explore clubs, join events, connect with like-minded people, and grow your skills. Stay connected and never miss out!
                    </p>
                    <p className="mt-2 text-white">Email: contact@circlesphere.com</p>
                </div>

                {/* Social Links */}
                <div className="flex space-x-6 text-2xl">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                        <FaGithub color='red' />
                    </a>
                    <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className=" transition">
                        <FaLinkedin color='blue' />
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className=" transition">
                        <FaSquareXTwitter color='black' />
                    </a>
                    <a href="mailto:contact@circlesphere.com" className="hover:text-red-500 transition">
                        <FaEnvelope color='purple' />
                    </a>
                </div>
            </div>

            <div className="mt-8 pb-5 text-center text-white text-sm">
                &copy; {new Date().getFullYear()} CircleSphere. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

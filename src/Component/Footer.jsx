import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
    return (
        <footer className="bg-gray-900 rounded-2xl text-gray-200 pt-15  m-6">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

                {/* About / Contact Info */}
                <div className="text-center md:text-left mb-6 md:mb-0">
                    <div className="flex justify-center md:flex md:justify-start"><Logo /></div>
                    <p className="text-gray-400 max-w-sm">
                        CircleSphere is your hub to explore clubs, join events, connect with like-minded people, and grow your skills. Stay connected and never miss out!
                    </p>
                    <p className="mt-2 text-gray-400">Email: contact@circlesphere.com</p>
                </div>

                {/* Social Links */}
                <div className="flex space-x-6 text-2xl">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                        <FaTwitter />
                    </a>
                    <a href="mailto:contact@circlesphere.com" className="hover:text-red-500 transition">
                        <FaEnvelope />
                    </a>
                </div>
            </div>

            <div className="mt-8 pb-5 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} CircleSphere. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

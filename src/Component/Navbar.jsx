import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar({ user, logout }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const dropdownRef = useRef();

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="w-full border-b bg-white/90 backdrop-blur shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <Link to="/">
                    <Logo />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6">
                    <NavLink to="/" className="hover:text-[#4F80FF] transition">Home</NavLink>
                    <NavLink to="/clubs" className="hover:text-[#4F80FF] transition">Clubs</NavLink>
                    <NavLink to="/events" className="hover:text-[#4F80FF] transition">Events</NavLink>
                </div>

                {/* Auth Section */}
                <div className="hidden md:flex items-center gap-4">
                    {!user ? (
                        <>
                            <Link to="/login" className="text-gray-600 hover:text[#4F80FF]">Login</Link>
                            <Link
                                to="/register"
                                className="px-4 py-2 bg-[#4F80FF] text-white rounded-lg hover:bg-blue-700"
                            >
                                Register
                            </Link>
                        </>
                    ) : (
                        <div className="relative" ref={dropdownRef}>
                            <img
                                src={user.avatar || "https://i.pravatar.cc/100"}
                                onClick={() => setDropdownOpen((p) => !p)}
                                className="w-10 h-10 rounded-full cursor-pointer border"
                                alt="avatar"
                            />
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border p-2 text-sm">
                                    <Link
                                        to="/profile"
                                        className="block px-3 py-2 rounded hover:bg-gray-100"
                                    >
                                        Profile
                                    </Link>
                                    <Link
                                        to="/dashboard"
                                        className="block px-3 py-2 rounded hover:bg-gray-100"
                                    >
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={logout}
                                        className="w-full text-left px-3 py-2 rounded hover:bg-gray-100"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen((p) => !p)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {
                menuOpen && (
                    <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">

                        <NavLink to="/" className="block">Home</NavLink>
                        <NavLink to="/clubs" className="block">Clubs</NavLink>
                        <NavLink to="/events" className="block">Events</NavLink>

                        {!user ? (
                            <>
                                <Link to="/login" className="block text-teal-600">Login</Link>
                                <Link
                                    to="/register"
                                    className="block px-4 py-2 bg-teal-600 text-white rounded-lg text-center"
                                >
                                    Register
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to="/profile" className="block">Profile</Link>
                                <Link to="/dashboard" className="block">Dashboard</Link>
                                <button
                                    onClick={logout}
                                    className="block w-full text-left text-red-600"
                                >
                                    Logout
                                </button>
                            </>
                        )}
                    </div>
                )
            }
        </nav >
    );
}

import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import useAuth from "../Hooks/useAuth";
import { div } from "framer-motion/client";

const Navbar = () => {
    const { user, logOut } = useAuth()
    console.log(user)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }
    const Links = <>
        <li><NavLink to="/"
            className={({ isActive }) => isActive ? "bg-blue-500" : "text-white"}
        >Home</NavLink></li>
        <li><NavLink to="/services"
            className={({ isActive }) => isActive ? "bg-blue-500" : "text-white"}
        >Clubs</NavLink></li>
        <li><NavLink to="/profile"
            className={({ isActive }) => isActive ? "bg-blue-500" : "text-white"}
        >Events</NavLink></li>
    </>

    return (
        <div className="sticky top-0 z-10 bg-gray-500/60 backdrop-blur-sm">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start  text-white">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow ">
                            {Links}
                        </ul>
                    </div>
                    <Logo />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    src={user.photoURL
                                    }
                                    alt="Tailwind CSS Navbar component"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li onClick={handleLogOut}><a>Logout</a></li>
                        </ul>
                    </div> : <div className="navbar-end">
                        <Link to="/login" className="px-8 py-3 rounded-lg bg-[#4F80FF] text-white font-bold">Login</Link>
                    </div>}
                </div>

            </div>
        </div >
    );
};

export default Navbar;

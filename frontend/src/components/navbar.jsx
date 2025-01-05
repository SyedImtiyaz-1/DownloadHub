import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar flex justify-between items-center p-4 px-32 bg-gray-800 text-white">
            <div className="navbarLeft">
                <Link to="/" className="hover:opacity-90 transition-opacity">
                    <h1 className="text-xl font-bold">
                        Download<span className="text-sky-600">Hub.</span>
                    </h1>
                </Link>
            </div>
            <div className="navbarRight">
                <ul className="flex space-x-10 text-white">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `hover:text-sky-400 transition-colors ${isActive ? 'text-sky-500' : ''}`
                            }
                        >
                            Youtube
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/instagram"
                            className={({ isActive }) =>
                                `hover:text-sky-400 transition-colors ${isActive ? 'text-sky-500' : ''}`
                            }
                        >
                            Instagram
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/twitter"
                            className={({ isActive }) =>
                                `hover:text-sky-400 transition-colors ${isActive ? 'text-sky-500' : ''}`
                            }
                        >
                            Twitter
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
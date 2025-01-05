import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="hover:opacity-90 transition-opacity">
                            <h1 className="text-xl font-bold">
                                Download<span className="text-sky-600">Hub.</span>
                            </h1>
                        </Link>
                    </div>
                    
                    {/* Mobile menu button */}
                    <div className="sm:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger icon */}
                            <svg
                                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Close icon */}
                            <svg
                                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden sm:block">
                        <ul className="flex space-x-8 text-white">
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
                    <li>
                        <NavLink
                            to="/howtouse"
                            className={({ isActive }) =>
                                `hover:text-sky-400 transition-colors ${isActive ? 'text-sky-500' : ''}`
                            }
                        >
                            How to use ?
                        </NavLink>
                    </li>
                </ul>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
                    <ul className="px-2 pt-2 pb-3 space-y-3">
                        <li>
                            <NavLink
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md text-base font-medium hover:text-sky-400 hover:bg-gray-700 transition-colors ${isActive ? 'text-sky-500 bg-gray-900' : 'text-gray-300'}`
                                }
                            >
                                Youtube
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/instagram"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md text-base font-medium hover:text-sky-400 hover:bg-gray-700 transition-colors ${isActive ? 'text-sky-500 bg-gray-900' : 'text-gray-300'}`
                                }
                            >
                                Instagram
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/twitter"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md text-base font-medium hover:text-sky-400 hover:bg-gray-700 transition-colors ${isActive ? 'text-sky-500 bg-gray-900' : 'text-gray-300'}`
                                }
                            >
                                Twitter
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/howtouse"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md text-base font-medium hover:text-sky-400 hover:bg-gray-700 transition-colors ${isActive ? 'text-sky-500 bg-gray-900' : 'text-gray-300'}`
                                }
                            >
                                How to use ?
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
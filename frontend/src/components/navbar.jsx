import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar flex justify-between items-center p-4 px-32 bg-gray-800 text-white">
            <div className="navbarLeft">
                <h1 className="text-xl font-bold">
                    Download<span className="text-sky-600">Hub.</span>
                </h1>
            </div>
            <div className="navbarRight">
                <ul className="flex space-x-10 text-white">
                    <li>
                        <Link to="/">Youtube</Link>
                    </li>
                    <li>
                        <Link to="/">Instagram</Link>
                    </li>
                    <li>
                        <Link to="/">Twitter</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;

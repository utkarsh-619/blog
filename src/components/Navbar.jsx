import React, { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex justify-between items-center py-4">
            {/* Logo */}            
            <Link to="/" className="w-12 h-12 flex items-center cursor-pointer z-10">
                <img src="./logo.svg" alt="Logo" />
                <span className="font-bold ml-4 text-2xl">BLOG</span>
            </Link>

            {/* Navbar Links for Desktop */}
            <div className="hidden md:flex space-x-6 text-lg z-10 items-center">
                <Link to="/" className="text-gray-800 hover:text-gray-500">Home</Link>
                <Link to="#" className="text-gray-800 hover:text-gray-500">About</Link>
                <Link to="#" className="text-gray-800 hover:text-gray-500">Services</Link>
                <Link to="#" className="text-gray-800 hover:text-gray-500">Contact</Link>
                <Link to="/login" className="text-white bg-blue-700 py-2 px-4 rounded-3xl hover:bg-blue-800 ">Login 🥳</Link>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden z-10">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    ) : (
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                    )}
                </button>
            </div>

            {/* Navbar Links for Mobile */}
            <div className={`absolute top-0 w-full h-full ${isOpen?"right-0":"-right-full"} bg-blue-200 flex flex-col items-center justify-center space-y-6 transition-all duration-300`}>
                <div className='absolute h-full bg-blue-200 w-full flex flex-col items-center justify-center space-y-6 text-lg '>
                    <Link to="/" className="text-gray-800 hover:text-gray-500">Home</Link>
                    <Link to="#" className="text-gray-800 hover:text-gray-500">About</Link>
                    <Link to="#" className="text-gray-800 hover:text-gray-500">Services</Link>
                    <Link to="#" className="text-gray-800 hover:text-gray-500">Contact</Link>
                    <Link to="/login" className="text-white bg-blue-700 py-2 px-4 rounded-3xl hover:bg-blue-800 ">Login 🥳</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

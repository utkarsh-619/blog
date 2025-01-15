import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex justify-between items-center py-4">
            {/* Logo */}
            
            <div className="w-12 h-12 flex items-center cursor-pointer z-10">
                <img src="/allSVG/logo.svg" alt="Logo" />
                <span className="font-bold ml-4 text-2xl">BLOG</span>
            </div>

            {/* Navbar Links for Desktop */}
            <div className="hidden md:flex space-x-6 text-lg z-10">
                <a href="#" className="text-gray-800 hover:text-gray-500">Home</a>
                <a href="#" className="text-gray-800 hover:text-gray-500">About</a>
                <a href="#" className="text-gray-800 hover:text-gray-500">Services</a>
                <a href="#" className="text-gray-800 hover:text-gray-500">Contact</a>
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
            <div className={`absolute top-0 w-full h-full ${isOpen?"right-0":"-right-full"} bg-purple-300 flex flex-col items-center justify-center space-y-6 transition-all duration-300`}>
                <div className='absolute h-full bg-purple-300 w-full flex flex-col items-center justify-center space-y-6 text-lg '>
                    <a href="#" className="text-gray-800 hover:text-gray-500">Home</a>
                    <a href="#" className="text-gray-800 hover:text-gray-500">About</a>
                    <a href="#" className="text-gray-800 hover:text-gray-500">Services</a>
                    <a href="#" className="text-gray-800 hover:text-gray-500">Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

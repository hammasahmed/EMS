import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='main flex justify-between bg-purple-50 p-1 pb-2 pt-2'>
            <div className="hamburger p-3 sm:hidden" onClick={toggleMenu}>
                <div className="line w-3 h-0.5 m-0.5 bg-black"></div>
                <div className="line w-3 h-0.5 m-0.5 bg-black"></div>
                <div className="line w-3 h-0.5 m-0.5 bg-black"></div>
            </div>
            {!menuOpen && (
                <div className="logo p-2 ">
                    <img src={logo} alt="logo" className='h-5' />
                </div>
            )}
            <div className={`features ${menuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row`}>
                <ul className='flex flex-col items-center sm:flex-row  space-y-3 sm:space-y-0 sm:space-x-3 text-sm md:space-x-10'>
                    <li className='hover:bg-purple-100 p-2 rounded-md'><a href="#">Home</a></li>
                    <li className='hover:bg-purple-100 p-2 rounded-md'><a href="#">Venues</a></li>
                    <li className='hover:bg-purple-100 p-2 rounded-md'><a href="#">Catering</a></li>
                    <li className='hover:bg-purple-100 p-2 rounded-md'><a href="#">Reviews</a></li>
                    <li className='hover:bg-purple-100 p-2 rounded-md'><a href="#">Contact Us</a></li>
                    <li className='hover:bg-purple-100 p-2 rounded-md'><a href="#">Login</a></li>
                </ul>
            </div>
            <div className="signup mr-3 mt-1 ">
                <button className='bg-purple-300 p-1 text-sm rounded-xl pr-2 pl-2 '>Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;

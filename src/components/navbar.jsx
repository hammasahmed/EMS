

import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };



    return (
        <div className={'main sticky top-0 z-10 flex justify-between bg-purple-50 p-1 pb-2 pt-2 h-14'}>
            <div className="hamburger p-3 sm:hidden" onClick={toggleMenu}>
                <div className="line w-5 h-0.5 m-0.5 bg-black"></div>
                <div className="line w-5 h-0.5 m-0.5 bg-black"></div>
                <div className="line w-5 h-0.5 m-0.5 bg-black"></div>
            </div>
            <div className="logo p-2">
                <img src={logo} alt="logo" className='h-5' />
            </div>
            <div className={`features absolute top-14 left-0 w-full ${menuOpen ? 'flex' : 'hidden'} sm:relative sm:flex sm:top-0 sm:left-auto sm:w-auto sm:flex-row bg-white sm:bg-transparent flex-col sm:flex-row transition-all duration-300 ease-in-out`}>
                <ul className='flex flex-col items-center sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 text-sm md:space-x-10 p-3 sm:p-0'>
                    <li className='hover:bg-purple-100 p-2 rounded-md'><Link to="/">Home</Link></li>
                    <li className='hover:bg-purple-100 p-2 rounded-md'><Link to="/">Venue</Link></li>
                    <li className='hover:bg-purple-100 p-2 rounded-md'><Link to="/">Catering</Link></li>
                    <li className='hover:bg-purple-100 p-2 rounded-md'><a href="#">Reviews</a></li>
                    <li className='hover:bg-purple-100 p-2 rounded-md'><a href="#">Contact Us</a></li>
                    <li className='hover:bg-purple-100 p-2 rounded-md'><a href="#">Login</a></li>
                </ul>
            </div>
            <div className="signup ">
            <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;


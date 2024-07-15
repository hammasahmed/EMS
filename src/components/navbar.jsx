
import React, { useState } from 'react';

import logo from "../assets/logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-100 p-4 w-full">
      <div className="container flex justify-between items-center w-full">
    <div className=""><img src={logo} alt="logo" className='h-10'/></div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-black">Home</a>
          <a href="#" className="text-black">About</a>
          <a href="#" className="text-black">Services</a>
          <a href="#" className="text-black">Contact</a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <a href="#" className="block text-white">Home</a>
          <a href="#" className="block text-white">About</a>
          <a href="#" className="block text-white">Services</a>
          <a href="#" className="block text-white">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

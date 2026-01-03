import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between h-[70px] px-6 md:px-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Logo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center gap-10 text-lg font-bold">
          <Link to="/" className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300">About</Link>
          <Link to="/service" className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300">Services</Link>
          <Link to="/project" className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300">Projects</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300">Contact</Link>
        </div>

        {/* Contact / Phone */}
        <div className="hidden md:block text-gray-300 hover:text-white transition-all duration-300">
          <Link to="#">03000089667</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
            {isOpen ? <HiOutlineX size={30} /> : <HiOutlineMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 w-full px-6 py-4 flex flex-col gap-4 transition-all duration-300">
          <Link onClick={toggleMenu} to="/" className="text-gray-300 hover:text-white font-bold">Home</Link>
          <Link onClick={toggleMenu} to="/about" className="text-gray-300 hover:text-white font-bold">About</Link>
          <Link onClick={toggleMenu} to="/service" className="text-gray-300 hover:text-white font-bold">Services</Link>
          <Link onClick={toggleMenu} to="/project" className="text-gray-300 hover:text-white font-bold">Projects</Link>
          <Link onClick={toggleMenu} to="/contact" className="text-gray-300 hover:text-white font-bold">Contact</Link>
          <Link onClick={toggleMenu} to="#" className="text-gray-300 hover:text-white font-bold">03000089667</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

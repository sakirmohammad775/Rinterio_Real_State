import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import { MdArrowOutward } from 'react-icons/md';
import { RiMenuLine } from 'react-icons/ri';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <a href="#home" className="font-bold">Home</a>
      <a href="#services">Services</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#blog">Blog</a>
      <a href="#contact">Contact Us</a>
    </>
  );

  const mobileDropdown = (
    <>
      {navLinks}
      {/* Search & Cart icons for small devices only */}
      <div className="flex gap-4 mt-4 lg:hidden">
        <IoIosSearch className="text-xl" />
        <IoCartOutline className="text-xl" />
      </div>
    </>
  );

  return (
    <div className="navbar w-full fixed top-0 left-0 px-4 md:px-6 lg:px-16 z-50 bg-white shadow">
      {/* Left: Logo */}
      <div className="navbar-start flex items-center justify-between gap-2">
        <div className='flex'>
          <div className="bg-lime-400 rounded-full w-7 h-7 flex items-center justify-center mr-2">
            <MdArrowOutward className="text-black text-xl" />
          </div>
          <h1 className="text-xl font-bold text-black">Rinterio</h1>
        </div>

       
      </div>

      {/* Center Nav Tabs for large devices only */}
      <div className="navbar-center hidden lg:flex gap-8 text-black">
        {navLinks}
      </div>

      {/* Right: Search, Cart, Button - visible from medium devices and up */}
      <div className="navbar-end items-center gap-4 md:flex hidden"> {/* Hidden on small devices */}
        <IoIosSearch className="text-xl text-black" />
        <IoCartOutline className="text-xl text-black" />
        <button className="hover:bg-lime-500 bg-lime-200 text-black font-semibold py-2 px-5 rounded-full flex items-center">
          Book Consult
          <div className="bg-lime-500 ml-2 rounded-full w-6 h-6 flex items-center justify-center">
            <MdArrowOutward className="text-gray-700 text-xl" />
          </div>
        </button>
      </div>
       {/* Dropdown for small and medium devices */}
       <div className="dropdown lg:hidden pl-48 md:pr-10 relative sm:left-10">

          <button
            onClick={() => setIsOpen(!isOpen)}
            className=""
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <RiMenuLine className="text-2xl text-black" />
          </button>
          {isOpen && (
            <ul
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white rounded-box w-52 text-gray-500 absolute right-0"
              onClick={() => setIsOpen(false)} // close after selecting a link
            >
              {mobileDropdown}
            </ul>
          )}
        </div>
    </div>
  );
};

export default Navbar;

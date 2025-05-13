import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';

const FooterResponsive = () => {
  const navTab = <>
    <a>Home</a>
    <a>Services</a>
    <a>Portfolio</a>
    <a>Blog</a>
    <a>Contact Us</a>
  </>
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto text-center">
        {/* Logo and Description */}
        <div className="mb-6">
          <div className="inline-flex items-center text-white text-lg font-semibold gap-3">
            <div className="bg-lime-500 ml-2 bg- rounded-full w-6 h-6 flex items-center justify-center">
                          <MdArrowOutward className="text-black text-xl" />
                        </div>
            <span className='font-bold'>Rinterio</span>
          </div>
          <p className="text-md mt-2  mx-auto text-gray-500">
            The barn house captivates with its blend of rustic charm and modern sophistication, <br /> featuring weathered wood, sleek metal accents.
          </p>
        </div>

        {/* Navigation Links */}

        <div className="navbar-center  grid sm:grid-cols-5 text-gray-300 gap-5 m-5">
          {navTab}
        </div>

        {/* Book Consult Button */}
        {/* Book Consult Button */}
        <div>
          <button className="bg-lime-300 hover:bg-green-500 text-black font-semibold py-2 px-4 rounded-full inline-flex items-center text-sm md:text-base mt-5 w-full text-center sm:w-auto justify-center">
            Book Consult
            <div className="bg-black ml-2 bg- rounded-full w-6 h-6 flex items-center justify-center">
                          <MdArrowOutward className="text-white text-xl" />
                        </div>
          </button>
        </div>

        {/* Copyright (Optional) */}
        <div className="mt-8 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Rinterio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterResponsive;
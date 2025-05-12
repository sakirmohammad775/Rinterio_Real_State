import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const FooterResponsive = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto text-center">
        {/* Logo and Description */}
        <div className="mb-6">
          <div className="inline-flex items-center text-white text-lg font-semibold">
            <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center mr-2">
              <FaArrowRight className="text-white text-sm" />
            </div>
            <span>Rinterio</span>
          </div>
          <p className="text-sm mt-2 max-w-md mx-auto">
            The barn house captivates with its blend of rustic charm and modern
            sophistication, featuring weathered wood, sleek metal accents.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="mb-8">
          <ul className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8">
            <li>
              <a href="#" className="hover:text-white transition duration-200 text-sm md:text-base">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-200 text-sm md:text-base">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-200 text-sm md:text-base">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-200 text-sm md:text-base">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-200 text-sm md:text-base">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Book Consult Button */}
        <div>
          <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-full inline-flex items-center text-sm md:text-base">
            Book Consult
            <FaArrowRight className="ml-2" />
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
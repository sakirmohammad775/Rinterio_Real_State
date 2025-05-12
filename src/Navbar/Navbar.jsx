import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import { MdArrowOutward } from 'react-icons/md';
import { RxDropdownMenu } from 'react-icons/rx';

const Navbar = () => {
  const navTab = <>
    <a className='font-bold'>Home</a>
    <a>Services</a>
    <a>Portfolio</a>
    <a>Blog</a>
    <a>Contact Us</a>
  </>
  return (
    <>
      <div className="navbar fixed top-0 left-0 w-full z-50 bg-white shadow">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn  btn-circle">
              <RxDropdownMenu/>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
              {navTab}
            </ul>
          </div>
        </div>
        <div className="navbar-center gap-5 text-black">
          {navTab}
        </div>
        <div className="navbar-end">
          <IoIosSearch />
          <IoCartOutline />
          <button
            className=" hover:bg-lime-500 bg-lime-200 text-black font-semibold py-3 px-6 rounded-full flex items-center justify-center mx-auto"
          >
            View Details
            <div className="bg-lime-500 ml-2 bg- rounded-full w-6 h-6 flex items-center justify-center">
              <MdArrowOutward className="text-gray-700 text-xl" />
            </div>

          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
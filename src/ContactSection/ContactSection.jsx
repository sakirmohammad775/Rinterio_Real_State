import React from 'react';
import { FaArrowRight, FaUserCircle } from 'react-icons/fa';
import backgroundImage from "../assets/bg.jpg";
import { MdArrowOutward } from 'react-icons/md';

const ContactSection = () => {
  return (
    <div
      className="py-16 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto text-center px-4">
        {/* Let's Connect Button */}
        <button className="bg-white text-gray-700 py-2 px-4 rounded-full shadow-sm hover:shadow-md transition duration-200 inline-flex items-center">
          <FaArrowRight className="mr-2" /> Let's Connect
        </button>

        {/* Main Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mt-8">
          Let's Discuss Next Project
        </h2>

        {/* Description */}
        <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
          The barn house captivates with its blend of rustic charm and modern
          sophistication, featuring weathered wood, sleek metal accents.
        </p>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto rounded-lg p-4 sm:p-6 md:p-8 my-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              id="firstName"
              placeholder="First name*"
              className="shadow appearance-none rounded-4xl w-full py-4 px-5 text-gray-700 bg-white focus:outline-none focus:shadow-outline"
            />
            <input
              type="text"
              id="lastName"
              placeholder="Last name*"
              className="shadow bg-white appearance-none rounded-4xl w-full py-4 px-5 text-gray-700 focus:outline-none focus:shadow-outline"
            />
            <input
              type="text"
              id="phone"
              placeholder="Phone number*"
              className="shadow  bg-white appearance-none rounded-4xl w-full py-4 px-5 text-gray-700 focus:outline-none focus:shadow-outline"
            />
            <input
              type="email"
              id="email"
              placeholder="Email address*"
              className="shadow bg-white appearance-none rounded-4xl w-full py-4 px-5 text-gray-700 focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Message */}
          <div className="mt-4">
            <textarea
              id="message"
              rows="4"
              placeholder="Tell us about your project"
              className="shadow bg-white appearance-none rounded-4xl w-full h-[250px] py-5 px-5 text-gray-700 focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>

          {/* Send Mail Button */}
          <button className="bg-lime-400 hover:bg-green-500 text-black font-bold py-3 px-6 rounded-full mt-6 flex items-center justify-center mx-auto w-full">
            Send Mail
            <div className="bg-black ml-2 rounded-full w-6 h-6 flex items-center justify-center">
              <MdArrowOutward className="text-white text-xl" />
            </div>
          </button>
        </div>

        {/* User Icon (Top Right) */}
        <div className="absolute top-8 right-8 bg-black bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center">
          <FaUserCircle className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

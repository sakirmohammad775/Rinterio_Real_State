import React from 'react';
import { FaArrowRight, FaUserCircle } from 'react-icons/fa';
import backgroundImage from "../assets/bg.jpg"
const ContactSection = () => {
  return (
    <div className="py-16" style={{
      backgroundImage: `url(${backgroundImage})`,backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',}}>
      <div className="container mx-auto text-center">
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
        <div className="mt-8 max-w-lg mx-auto rounded-lg bg-white shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Email Number */}
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                Email Number*
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mt-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2 text-left">
              Write your message here
            </label>
            <textarea
              id="message"
              rows="4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>

          {/* Send Mail Button */}
          <button
            className="bg-green-400 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-full mt-6 flex items-center justify-center mx-auto"
          >
            Send Mail
            <FaArrowRight className="ml-2" />
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

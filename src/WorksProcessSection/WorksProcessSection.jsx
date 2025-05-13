import React from 'react';
import { FaLightbulb, FaCogs, FaEye, FaDollarSign, FaArrowRight } from 'react-icons/fa';

const WorksProcessSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Button */}
        <button className="bg-white text-gray-700 py-2 px-4 rounded-full shadow-sm hover:shadow-md transition duration-200 inline-flex items-center">
          <FaArrowRight className="mr-2" /> How we works
        </button>

        {/* Section Heading */}
        <h2 className="text-3xl font-extrabold text-gray-800 mt-8">
          Our Works Process
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-xl mx-auto">
          The barn house captivates with its blend of rustic charm and modern
          sophistication, featuring weathered wood, sleek metal accents.
        </p>

        {/* Process Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Concept */}
          <div className="bg-pink-100 rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-pink-200 text-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaLightbulb className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Concept</h3>
            <p className="mt-2 text-gray-600 text-sm">
              The barn house captivates
              <br />
              with its blend of rustic charm
              <br />
              and modern.
            </p>
          </div>

          {/* Design Process */}
          <div className="bg-yellow-100 rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-yellow-200 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCogs className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Design Process</h3>
            <p className="mt-2 text-gray-600 text-sm">
              The barn house captivates
              <br />
              with its blend of rustic charm
              <br />
              and modern.
            </p>
          </div>

          {/* Supervision */}
          <div className="bg-green-100 rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-green-200 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEye className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Supervision</h3>
            <p className="mt-2 text-gray-600 text-sm">
              The barn house captivates
              <br />
              with its blend of rustic charm
              <br />
              and modern.
            </p>
          </div>

          {/* Budget Planning */}
          <div className="bg-blue-100 rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-blue-200 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaDollarSign className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Budget Planning</h3>
            <p className="mt-2 text-gray-600 text-sm">
              The barn house captivates
              <br />
              with its blend of rustic charm
              <br />
              and modern.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksProcessSection;

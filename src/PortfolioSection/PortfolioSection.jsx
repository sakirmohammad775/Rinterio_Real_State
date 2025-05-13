import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import portfolio1 from '../assets/img1.png';
import portfolio2 from '../assets/img2.png';
import portfolio3 from '../assets/img3.png';
import portfolio4 from '../assets/img4.png';
import portfolio5 from '../assets/img5.png';
import portfolio6 from '../assets/img5.png';

const PortfolioSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <button className="bg-lime-200 text-gray-700 py-2 px-4 rounded-full shadow-sm hover:shadow-md transition duration-200 inline-flex items-center">
          <FaArrowRight className="mr-2" /> Explore our Latest works
        </button>

        <h2 className="text-3xl font-bold text-gray-800 mt-8">
          Our Latest Portfolio
        </h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
          The barn house captivates with its blend of rustic charm and modern
          sophistication, featuring weathered wood, sleek metal accents.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Portfolio Item 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={portfolio1} alt="Commercial Project" className="w-full h-auto" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Commercial</h3>
              <p className="mt-2 text-gray-600 text-sm">
                The barn house captivates with its blend of rustic charm and modern.
              </p>
              <button className="mt-4 text-green-500 inline-flex items-center">
                View Details
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <img src={portfolio2} alt="Residential Project" className="w-full h-auto" />
            <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center">
              {/* Placeholder for user initials/image */}
              <span>WA</span>
            </div>
          </div>

          {/* Portfolio Item 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={portfolio3} alt="Commercial Project" className="w-full h-auto" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Commercial</h3>
              <p className="mt-2 text-gray-600 text-sm">
                The barn house captivates with its blend of rustic charm and modern.
              </p>
              <button className="mt-4 text-green-500 inline-flex items-center">
                View Details
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>

          {/* Portfolio Item 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={portfolio4} alt="Residential Project" className="w-full h-auto" />
          </div>

          {/* Portfolio Item 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <img src={portfolio5} alt="Commercial Project" className="w-full h-auto" />
            <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center">
              {/* Placeholder for user initials/image */}
              <span>Si</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Commercial</h3>
              <p className="mt-2 text-gray-600 text-sm">
                The barn house captivates with its blend of rustic charm and modern.
              </p>
              <button className="mt-4 text-green-500 inline-flex items-center">
                View Details
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>

          {/* Portfolio Item 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={portfolio6} alt="Residential Project" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;


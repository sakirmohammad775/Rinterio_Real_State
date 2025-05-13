import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import portfolio1 from '../assets/img1.png';
import portfolio2 from '../assets/img2.png';
import portfolio4 from '../assets/img4.png';
import portfolio6 from '../assets/img5.png';
import { MdArrowOutward } from 'react-icons/md';

const PortfolioSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
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

        {/* Section 1 */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Portfolio Item 1 */}
          <div className="bg-white rounded-4xl shadow-md overflow-hidden lg:col-span-2 grid grid-cols-1 lg:grid-cols-3">
            <img src={portfolio1} alt="Commercial Project" className="my-5 mx-auto" />
            <div className="p-6 text-left lg:col-span-2 ">
              <h3 className="text-xl font-bold mt-5 text-gray-800">Commercial</h3>
              <p className="mt-4 text-gray-600 text-sm">
                The barn house captivates with its blend of rustic charm and modern. The barn house captivates with its blend of rustic charm and modern.
              </p>
              <button className="text-black font-medium inline-flex items-center mt-5">
                View Details
                <div className="bg-lime-400 ml-2 rounded-full w-6 h-6 flex items-center justify-center">
                  <MdArrowOutward className="text-black text-xl" />
                </div>
              </button>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div className="bg-white rounded-4xl shadow-md overflow-hidden">
            <img src={portfolio2} alt="Residential Project" className="p-6 mx-auto block" />
          </div>
        </div>

        {/* Section 2 */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Portfolio Item 4 */}
          <div className="bg-white rounded-4xl shadow-md overflow-hidden">
            <img src={portfolio4} alt="Residential Project" className="mx-auto m-7 block" />
          </div>

          {/* Portfolio Item 5 */}
          <div className="bg-white rounded-4xl shadow-md overflow-hidden md:col-span-2 grid grid-cols-1 lg:grid-cols-2">
            <img src={portfolio1} alt="Commercial Project" className="my-5 mx-auto" />
            <div className="p-6 mt-5 text-left">
              <h3 className="text-xl font-bold text-gray-800">Commercial</h3>
              <p className="mt-4 text-gray-600 text-sm">
                The barn house captivates with its blend of rustic charm and modern.
              </p>
              <button className="text-black font-medium inline-flex items-center mt-5">
                View Details
                <div className="bg-lime-400 ml-2 rounded-full w-6 h-6 flex items-center justify-center">
                  <MdArrowOutward className="text-black text-xl" />
                </div>
              </button>
            </div>
          </div>

          {/* Portfolio Item 6 */}
          <div className="bg-white rounded-4xl shadow-md overflow-hidden">
            <img src={portfolio6} alt="Residential Project" className="mx-auto m-7 block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;

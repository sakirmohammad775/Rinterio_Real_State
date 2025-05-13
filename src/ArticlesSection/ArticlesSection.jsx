import React from 'react';
import { FaArrowRight, FaCalendarAlt, FaUser } from 'react-icons/fa';

// Import your article images
import article1 from '../assets/article1.png';
import article2 from '../assets/article2.png';
import article3 from '../assets/article3.png';
import { MdArrowOutward } from 'react-icons/md';

const ArticlesSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-10">
      <div className="container mx-auto text-center">
        <button className="bg-lime-200 text-gray-700 py-2 px-4 rounded-full shadow-sm hover:shadow-md transition duration-200 inline-flex items-center">
          <FaArrowRight className="mr-2" /> Rinterio News
        </button>

        <h2 className="text-3xl font-bold text-gray-800 mt-8">
          Read Our Articles and News
        </h2>
        <p className="mt-4 text-md text-gray-700   mx-auto">
          The barn house captivates with its blend of rustic charm and modern
          sophistication,<br /> featuring weathered wood, sleek metal accents.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Article 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={article1} alt="Furniture Choice Article" className="mx-auto mt-5 h-auto" />
            <div className="p-6 pl-10 text-left">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <FaCalendarAlt className="mr-2" /> July 14, 2024
                <span className="mx-2">•</span>
                <FaUser className="mr-2" /> By Admin
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                How to choose the furniture right of your home.
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                The barn house captivates with its blend of rustic charm and modern.
              </p>
              <button className="text-black font-medium inline-flex items-center">
                Read More
                <div className="bg-lime-400 ml-2 bg- rounded-full w-7 h-7 flex items-center justify-center">
                              <MdArrowOutward className="text-black text-xl" />
                            </div>
              </button>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={article2} alt="Furniture Choice Article" className="mx-auto mt-5 h-auto" />
            <div className="p-6 pl-10 text-left">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <FaCalendarAlt className="mr-2" /> July 14, 2024
                <span className="mx-2">•</span>
                <FaUser className="mr-2" /> By Admin
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                How to choose the furniture right of your home.
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                The barn house captivates with its blend of rustic charm and modern.
              </p>
              <button className="text-black font-medium inline-flex items-center">
                Read More
                <div className="bg-lime-400 ml-2 bg- rounded-full w-7 h-7 flex items-center justify-center">
                              <MdArrowOutward className="text-black text-xl" />
                            </div>
              </button>
            </div>
          </div>

          {/* Article 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={article3} alt="Furniture Choice Article" className="mx-auto mt-5 h-auto" />
            <div className="p-6 pl-10 text-left">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <FaCalendarAlt className="mr-2" /> July 14, 2024
                <span className="mx-2">•</span>
                <FaUser className="mr-2" /> By Admin
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                How to choose the furniture right of your home.
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                The barn house captivates with its blend of rustic charm and modern.
              </p>
              <button className="text-black font-medium inline-flex items-center">
                Read More
                <div className="bg-lime-400 ml-2 bg- rounded-full w-7 h-7 flex items-center justify-center">
                              <MdArrowOutward className="text-black text-xl" />
                            </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;

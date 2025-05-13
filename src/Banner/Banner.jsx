import React from 'react';
import bannerImg from "../assets/banner.png";
import { MdArrowOutward } from "react-icons/md";

const Banner = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Image */}
        <img
          src={bannerImg}
          alt="Barn House Design"
          className="w-full max-w-lg mx-auto rounded-lg shadow-md"
        />

        {/* Text */}
        <div className="mt-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
            A barn house of this design has a <br className="hidden sm:block" />
            striking appearance
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            The barn house captivates with its blend of rustic charm and modern
            sophistication, featuring weathered wood, sleek metal accents, and
            large windows that flood the space with natural light.
          </p>

          {/* Button */}
          <button
            className="mt-8 inline-flex items-center gap-2 bg-lime-200 hover:bg-lime-500 text-black font-semibold py-3 px-6 rounded-full transition duration-200"
          >
            View Details
            <span className="bg-lime-500 w-6 h-6 flex items-center justify-center rounded-full">
              <MdArrowOutward className="text-gray-700 text-lg" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

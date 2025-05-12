import React from 'react';
import bannerImg from "../assets/banner.png";
import { MdArrowOutward } from "react-icons/md";
const Banner = () => {
    return (
        <>
            <div className="bg-white py-10 mt-16">
                <div className="container mx-auto text-center">
                    <img
                        src={bannerImg}
                        alt="Barn House Design"
                        className="max-w-lg mx-auto rounded-lg shadow-md"
                    />
                    <div className="mt-8">
                        <h2 className="text-5xl font-extrabold text-gray-800">
                            A barn house of this design has a <br />
                            striking appearance
                        </h2>
                        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                            The barn house captivates with its blend of rustic charm and modern
                            sophistication, featuring weathered wood, sleek metal <br /> accents, and
                            large windows that flood the space with natural light.
                        </p>
                        <button
                            className=" hover:bg-lime-500 bg-lime-200 text-black font-semibold py-3 px-6 rounded-full mt-8 flex items-center justify-center mx-auto"
                        >
                            View Details
                            <div className="bg-lime-500 ml-2 bg- rounded-full w-6 h-6 flex items-center justify-center">
                                <MdArrowOutward className="text-gray-700 text-xl" />
                            </div>

                        </button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;
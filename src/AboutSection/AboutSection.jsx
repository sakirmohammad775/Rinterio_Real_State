import React from 'react';
import rectangleImage from '../assets/Rectangle.png'
import commercialImg from '../assets/commercial.png'
import residentialImg from '../assets/residential.png'
import { FaArrowRight } from 'react-icons/fa';
const AboutSection = () => {
    return (
        <>
            <div className="hero bg-[#F4F4F4] min-h-screen">
                <div className="hero-content grid lg:grid-cols-2 gap-20">
                    {/*right side*/}
                    <div className="container mx-auto px-12 ">
                        <div className="relative w-16 h-8 mx-auto mb-4">
                        </div>

                        <button className="bg-white text-gray-700 py-2 px-4 rounded-full shadow-sm hover:shadow-md transition duration-200 inline-flex items-center">
                            <FaArrowRight className="mr-2" /> About Us
                        </button>

                        <h2 className="text-3xl font-extrabold text-gray-800 mt-8">
                            We design thoughtful,<br />
                              liveable spaces
                        </h2>
                        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                            The barn house captivates with its blend of rustic charm and <br />modern
                            sophistication, featuring weathered wood, sleek metal accents.
                        </p>

                        <div className="mt-10 grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-6 max-w-3xl mx-auto">
                            {/* Commercial Card */}
                            <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
                                <div className="w-16 h-16 rounded-md flex items-center justify-center mr-8">
                                    <img src={commercialImg} alt="" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">Commercial</h3>
                                    <p className="mt-2 text-gray-600 text-sm">
                                        The barn house captivates with its blend
                                        <br />
                                        of rustic charm and modern.
                                    </p>
                                </div>
                            </div>

                            {/* Residential Card */}
                            <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
                                <div className="w-16 h-16  rounded-md flex items-center justify-center mr-8">
                                    <img src={residentialImg} alt="" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">Residential</h3>
                                    <p className="mt-2 text-gray-600 text-sm">
                                        The barn house captivates with its blend
                                        <br />
                                        of rustic charm and modern.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/*left side*/}
                    <img
                        src={rectangleImage}
                        className="max-w-md rounded-lg shadow-2xl items-center pr-12 pb-5 mt-30"
                    />
                  
                </div>
            </div>
        </>
    );
};

export default AboutSection;
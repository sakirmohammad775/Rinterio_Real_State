import React from 'react';
import { FaCommentDots, FaLayerGroup, FaUsers, FaUserFriends } from 'react-icons/fa';

const StatsSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto rounded-2xl bg-white shadow-md p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {/* Happy Client Review */}
        <div>
          <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center mx-auto mb-2">
            <FaCommentDots className="text-2xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">235+</h2>
          <p className="text-sm text-gray-500">Happy Client Review</p>
        </div>

        {/* Work Departments */}
        <div>
          <div className="w-12 h-12 rounded-full bg-green-100 text-green-500 flex items-center justify-center mx-auto mb-2">
            <FaLayerGroup className="text-2xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">50+</h2>
          <p className="text-sm text-gray-500">Work Departments</p>
        </div>

        {/* Our Happy Client */}
        <div>
          <div className="w-12 h-12 rounded-full bg-yellow-100 text-yellow-500 flex items-center justify-center mx-auto mb-2">
            <FaUsers className="text-2xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">30k+</h2>
          <p className="text-sm text-gray-500">Our Happy Client</p>
        </div>

        {/* Staff Members */}
        <div>
          <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mx-auto mb-2">
            <FaUserFriends className="text-2xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">307+</h2>
          <p className="text-sm text-gray-500">Staff Members</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;

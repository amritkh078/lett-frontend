import React from 'react';
import { FiSearch, FiPlus, FiFileText, FiSettings } from 'react-icons/fi';

const ProductSearchBar = ({ onAdd }) => {
  return (
    <div className="w-full px-4 py-2 mb-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Search Fields */}
        <div className="flex flex-col space-y-4 w-full md:w-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Article No..."
              className="w-full pr-8 pl-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-green-500">
              <FiSearch />
            </span>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search Product..."
              className="w-full pr-8 pl-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-green-500">
              <FiSearch />
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0 w-full md:w-auto">
          <button
            onClick={onAdd}
            className="w-full md:w-auto px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 flex items-center justify-center space-x-2 border border-black shadow-lg"
          >
            <FiPlus />
            <span>New Product</span>
          </button>

          <button className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 flex items-center justify-center space-x-2 border border-black shadow-lg">
            <FiFileText />
            <span>Print List</span>
          </button>

          <button className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 flex items-center justify-center space-x-2 border border-black shadow-lg">
            <FiSettings />
            <span>Advanced Mode</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSearchBar;

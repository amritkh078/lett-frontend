import React from 'react';
import { FiSearch, FiPlus, FiFileText, FiSettings } from 'react-icons/fi';

const ProductSearchBar = () => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-2  mb-4">
      
      
      <div className="flex flex-col space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Article No..."
            className="pr-8 pl-4 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span className="absolute inset-y-0 right-2 flex items-center text-green-500">
            <FiSearch />
          </span>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search Product..."
            className="pr-8 pl-4 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span className="absolute inset-y-0 right-2 flex items-center text-green-500">
            <FiSearch />
          </span>
        </div>
      </div>

      
      <div className="flex space-x-2">
         <button className="px-4 py-1 bg-green-500 text-white rounded-full hover:bg-green-600 flex items-center space-x-2 border border-black shadow-lg">
          <FiPlus />
          <span>New Product</span>
        </button>


        <button className="px-4 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 flex items-center space-x-2 border border-black shadow-lg">
          <FiFileText />
          <span>Print List</span>
        </button>

        <button className="px-4 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 flex items-center space-x-2 border border-black shadow-lg">
          <FiSettings />
          <span>Advanced Mode</span>
        </button>
      </div>
    </div>
  );
};

export default ProductSearchBar;

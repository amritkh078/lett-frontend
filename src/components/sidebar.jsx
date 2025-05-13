import React, { useState } from 'react';
import { FaFileInvoice, FaUserAlt, FaBusinessTime, FaRegFileAlt, FaList, FaLayerGroup, FaSignOutAlt, FaBoxOpen, FaGift, FaFileImport, FaFileExport } from 'react-icons/fa';

const menuItems = [
  { name: 'Invoices', icon: <FaFileInvoice />, color: 'text-blue-800' },
  { name: 'Customers', icon: <FaUserAlt />, color: 'text-green-500' },
  { name: 'My Business', icon: <FaBusinessTime />, color: 'text-purple-500' },
  { name: 'Invoice Journal', icon: <FaRegFileAlt />, color: 'text-orange-500' },
  { name: 'Price List', icon: <FaList />, color: 'text-teal-500' },
  { name: 'Multiple Invoicing', icon: <FaLayerGroup />, color: 'text-yellow-500' },
  { name: 'Unpaid Invoices', icon: <FaFileInvoice />, color: 'text-red-500' },
  { name: 'Offer', icon: <FaGift />, color: 'text-pink-500' },
  { name: 'Inventory Control', icon: <FaBoxOpen />, color: 'text-indigo-500' },
  { name: 'Member Invoicing', icon: <FaFileInvoice />, color: 'text-green-500' },
  { name: 'Import/Export', icon: <FaFileImport />, color: 'text-blue-800' },
  { name: 'Log out', icon: <FaSignOutAlt />, color: 'text-red-500' },
];

function Sidebar() {
  const [activeItem, setActiveItem] = useState('Price List');
  return (
    <div>
      <div className="p-4 border-b border-blue-500 w-[95%] mx-auto">
        <p className="text-xl text-center">Menu</p>
      </div>
      <nav className="p-2">
        <ul className="space-y-2">
          {menuItems.map(item => (
            <li
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`text-black flex items-center space-x-2 p-2 rounded-md cursor-pointer 
                ${activeItem === item.name ? 'bg-blue-500 text-white shadow-xl' : 'hover:bg-gray-200'}`}
            >
              <span className={`text-lg ${item.color}`}>
                {item.icon}
              </span>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;

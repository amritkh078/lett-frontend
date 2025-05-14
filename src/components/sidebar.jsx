import React, { useState } from 'react';
import {
  FaFileInvoice,
  FaUserAlt,
  FaBusinessTime,
  FaRegFileAlt,
  FaList,
  FaLayerGroup,
  FaSignOutAlt,
  FaBoxOpen,
  FaGift,
  FaFileImport,
} from 'react-icons/fa';
import '../styles/SideBar.css';

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

function Sidebar({ isVisible }) {
  const [activeItem, setActiveItem] = useState('Price List');

  return (
    <div className={`sidebar ${isVisible ? 'visible' : 'hidden-mobile'}`}>
      <div className="sidebar-header">
        <p className="sidebar-title">Menu</p>
      </div>
      <nav>
        <ul className="sidebar-list">
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`sidebar-item ${activeItem === item.name ? 'active' : ''}`}
            >
              <span className={`sidebar-icon ${item.color}`}>{item.icon}</span>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}


export default Sidebar;


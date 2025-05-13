import { useState } from 'react';
import Sidebar from '../components/sidebar';
import TopBar from '../components/topbar';
import ProductTable from '../components/producttable';

const PriceList = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Default hidden on mobile

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      
      {/* TopBar */}
      <div className="h-[60px] w-full">
        <TopBar toggleSidebar={toggleSidebar} />
      </div>

      {/* Layout */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isVisible={isSidebarVisible} />

        <div className="flex-1 p-4 overflow-y-auto">
          <ProductTable />
        </div>
      </div>
    </div>
  );
};

export default PriceList;

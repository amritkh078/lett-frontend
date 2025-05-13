import Sidebar from "../components/sidebar";
import TopBar from '../components/topbar';
import ProductTable from '../components/producttable';

const PriceList = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <div style={{ height: '60px', width: '100%' }}>
        <TopBar />
      </div>

      <div style={{ display: 'flex', flex: 1}}>
        <div style={{ width: '250px', backgroundColor: '#f0f0f0'}}>
          <Sidebar />
        </div>
        
        <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
          <ProductTable />
        </div>
      </div>
    </div>
  );
};

export default PriceList;
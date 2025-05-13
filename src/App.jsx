import './i18n';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import PriceList from './page/pricelist';
import TermsPage from './page/termpage';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  return (
    <>
      <div className='fixed w-full h-screen -z-10'>
        <img src="https://storage.123fakturera.se/public/wallpapers/sverige43.jpg" alt="" id="background-image" />
      </div>

      {location.pathname !== '/pricelist' && <Navbar />}
      
      <Routes>
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/pricelist" element={<PriceList />} />
      </Routes>
    </>
  );
}

export default App;

import './i18n';
import Navbar from './components/navbar'
import { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';


function App() {
  const [content, setContent] = useState("");

const {t, i18n } = useTranslation();

useEffect( () => {
  const fetchContent = async () => {
      try {
          const response = await fetch(`/api/terms/${i18n.language}`);
          const data = await response.json();
          setContent(data.content);
      } catch (error) {
          console.error('Error fetching content:', error);
      }
  };

  fetchContent();
}, [i18n.language])
  return (
    <>
      <div className='fixed w-full h-screen -z-10'>
        <img src="https://storage.123fakturera.se/public/wallpapers/sverige43.jpg" alt="" id="background-image" />
      </div>
      <Navbar />
      <main>
        <div>
          <a className=" text-white flex items-center text-3xl font-semibold justify-center mb-4">{t('home.terms')}</a>
        </div>
        <div className='text-white flex items-center justify-center'> 
          <a onClick={() => window.location.href = 'https://google.com'} className="bg-green-600 font-medium rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 px-4 py-2 m-2">{t('home.goBack')}</a>
        </div>

        <div className='p-4 bg-white rounded-lg shadow-md max-w-2xl mx-auto mt-10'>
          {content}
        </div>

        <div className='text-white flex items-center justify-center'> 
          <a onClick={() => window.location.href = 'https://google.com'} className="bg-green-600 font-medium rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 px-4 py-2 m-4 ">{t('home.goBack')}</a>
        </div>

      </main>
      
      
    </>
  )
}

export default App

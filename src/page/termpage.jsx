import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const TermsPage = () => {
  const [content, setContent] = useState("");
  const { t, i18n } = useTranslation();
   const navigate = useNavigate();

   const closeAndGoBack = () => {
    navigate(-1); 
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`https://task-lett.onrender.com/terms/${i18n.language}`);
        const data = await response.json();
        setContent(data.content);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };
    fetchContent();
  }, [i18n.language]);

  return (
    <main className="bg-cover bg-no-repeat min-h-screen py-6">
      <div className="flex justify-center mb-4">
        <a className="text-white text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">{t('home.terms')}</a>
      </div>

      <div className="text-white flex items-center justify-center">
        <a
          onClick={() => closeAndGoBack()}
          className="bg-green-600 font-medium rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 m-2"
        >
          {t('home.goBack')}
        </a>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-md max-w-2xl mx-auto mt-10">
        {content}
      </div>

      <div className="text-white flex items-center justify-center mt-6">
        <a
          onClick={() => closeAndGoBack()}
          className="bg-green-600 font-medium rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 m-4"
        >
          {t('home.goBack')}
        </a>
      </div>
    </main>
  );
};

export default TermsPage;

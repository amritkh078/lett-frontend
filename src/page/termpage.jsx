import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import '../styles/Terms.css';

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
    <main className="terms-main">
      <section className="terms-section">
        <a className="terms-heading">{t('home.terms')}</a>

        <button
          onClick={closeAndGoBack}
          className="terms-button"
        >
          {t('home.goBack')}
        </button>

        <div className="terms-content">
          {content}
        </div>

        <button
          onClick={closeAndGoBack}
          className="terms-button"
        >
          {t('home.goBack')}
        </button>
      </section>
    </main>
  );
};

export default TermsPage;

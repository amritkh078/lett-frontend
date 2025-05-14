import { Menu } from 'lucide-react';
import profileImage from '../assets/profile.jpg';
import GbImage from '../assets/GB.png';
import SeImage from '../assets/SE.png';
import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/TopBar.css';

const languages = [
  { code: 'en', name: 'English', img: GbImage },
  { code: 'sv', name: 'Svenska', img: SeImage },
];

function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const currentLanguage = useMemo(
    () => languages.find((lang) => lang.code === i18n.language),
    [i18n.language]
  );

  return (
    <div className="top-bar">
      {/* <button className="menu-button" onClick={toggleSidebar}>
        <Menu size={24} />
      </button> */}

      <div className="profile-info">
        <img src={profileImage} alt="Profile" className="profile-image" width="40" />
        <div className="profile-text">
          <span className="profile-name">John Andre</span>
          <span className="profile-company">Storfjord AS</span>
        </div>
      </div>

      <div className="language-selector">
        <div className="language-toggle" onClick={() => setIsOpen(true)}>
          <span>{currentLanguage?.name}</span>
          <img src={currentLanguage?.img} alt={currentLanguage?.name} className="flag-icon" />
        </div>
        {isOpen && (
          <div className="language-dropdown">
            <ul>
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  className="language-option"
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setIsOpen(false);
                  }}
                >
                  <span>{lang.name}</span>
                  <img src={lang.img} alt={lang.name} className="flag-icon" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopBar;

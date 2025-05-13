import { Menu } from 'lucide-react';
import profileImage from '../assets/profile.jpg';
import GbImage from '../assets/GB.png';
import SeImage from '../assets/SE.png';
import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'English', img: GbImage },
  { code: 'sv', name: 'Svenska', img: SeImage },
];

function TopBar({ toggleSidebar }) {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const currentLanguage = useMemo(
    () => languages.find((lang) => lang.code === i18n.language),
    [i18n.language]
  );

  return (
    <div className="bg-blue-500 text-white flex justify-between items-center px-4 py-2">
      
      {/* Burger icon on mobile */}
      <button className="md:hidden mr-2" onClick={toggleSidebar}>
        <Menu size={24} />
      </button>

      {/* Profile */}
      <div className="flex items-center">
        <img src={profileImage} alt="Profile" className="mr-2 rounded-full" width="40" />
        <div className="flex flex-col">
          <span className="font-bold">John Andre</span>
          <span className="text-xs">Storfjord AS</span>
        </div>
      </div>

      {/* Language selector */}
      <div className="relative">
        <div className="flex items-center p-1 gap-2 cursor-pointer" onClick={() => setIsOpen(true)}>
          <span>{currentLanguage?.name}</span>
          <img src={currentLanguage?.img} alt={currentLanguage?.name} className="w-6 h-6" />
        </div>
        {isOpen && (
          <div className="absolute right-0 mt-8 bg-white text-black rounded shadow-lg p-2">
            <ul className="space-y-2">
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setIsOpen(false);
                  }}
                >
                  <span>{lang.name}</span>
                  <img src={lang.img} alt={lang.name} className="w-6 h-6" />
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

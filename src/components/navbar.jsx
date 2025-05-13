import { useState, useMemo } from 'react';
import GbImage from '../assets/GB.png';
import SeImage from '../assets/SE.png';
import logo from '../assets/diamond.png';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const languages = [
    { code: 'en', name: 'English', img: GbImage },
    { code: 'sv', name: 'Svenska', img: SeImage },
]

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const currentLanguage = useMemo(() => languages.find((lang) => lang.code === i18n.language), [i18n.language]);

    console.log(currentLanguage, i18n.languages, i18n.resolvedLanguage);



    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className=" text-white p-4 flex flex-row justify-between items-center z-100 text-white">


            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden"
            >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>


            <nav
                className={`
          flex-col text-center md:flex md:flex-row md:items-center md:space-x-4 
          ${mobileMenuOpen ? 'flex absolute top-full left-0 w-full bg-black p-4' : 'hidden md:flex'}
        `}
            >

                <div className="flex items-center  w-190">

                    <img src={logo} alt="MyLogo" className="h-10 w-auto mr-2" />
                </div>

                <Link to="/terms" className="hover:text-gray-400 w-15">{t('home.nav.home')}</Link>
                <a href="#about" className="hover:text-gray-400 w-20">{t('home.nav.about')}</a>
                <a href="#about" className="hover:text-gray-400 w-25">{t('home.nav.contact')}</a>
                <a href="#services" className="hover:text-gray-400 w-15">{t('home.nav.order')}</a>
                <a href="#services" className="hover:text-gray-400 w-27">{t('home.nav.customers')}</a>
                <Link to="/pricelist"  className="hover:text-gray-400 w-20">{t('home.price')}</Link>

            </nav>

            <div className='relative'>
                <div className='flex items-center p-1 justify-center gap-2' onClick={() => setIsOpen(true)}>
                    {
                        currentLanguage && (
                            <>
                                <span>
                                    {currentLanguage.name}
                                </span>
                                <img src={currentLanguage.img} alt={currentLanguage.name} className="w-6 h-6 mr-2" />
                            </>
                        )
                    }
                </div>
                {
                    isOpen ? (
                        <div className='absolute top-0 right-0 mt-8 bg-white text-black rounded shadow-lg p-2'>
                            <ul className="space-y-2">
                                {languages.map(lang => (
                                    <li key={lang.code} className="flex items-center cursor-pointer gap-2" onClick={() => {
                                        changeLanguage(lang.code)
                                        setIsOpen(false);
                                    }}>
                                        <span>{lang.name}</span>
                                        <img src={lang.img} alt={lang.name} className="w-6 h-6 mr-2" />
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ) : null
                }
            </div>
        </header>
    );
}
import { useState, useMemo } from 'react';
import GbImage from '../assets/GB.png';
import SeImage from '../assets/SE.png';
import logo from '../assets/diamond.png';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const languages = [
    { code: 'en', name: 'English', img: GbImage },
    { code: 'sv', name: 'Svenska', img: SeImage },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const currentLanguage = useMemo(() => languages.find((lang) => lang.code === i18n.language), [i18n.language]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className="navbar">
            <div className="logo hide-on-mobile">
                <img src={logo} alt="MyLogo" />
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="navbar-toggle">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <nav className={`navbar-menu ${mobileMenuOpen ? 'mobile' : ''}`}>
                <Link to="/terms" className="nav-link">{t('home.nav.home')}</Link>
                <a href="#about" className="nav-link">{t('home.nav.about')}</a>
                <a href="#contact" className="nav-link">{t('home.nav.contact')}</a>
                <a href="#services" className="nav-link">{t('home.nav.order')}</a>
                <a href="#customers" className="nav-link">{t('home.nav.customers')}</a>
                <Link to="/pricelist" className="nav-link">{t('home.price')}</Link>
            </nav>

            <div className="lang-toggle">
                <div className="lang-display" onClick={() => setIsOpen(true)}>
                    {currentLanguage && (
                        <>
                            <span>{currentLanguage.name}</span>
                            <img src={currentLanguage.img} alt={currentLanguage.name} className="lang-icon" />
                        </>
                    )}
                </div>

                {isOpen && (
                    <div className="lang-dropdown">
                        <ul>
                            {languages.map((lang) => (
                                <li
                                    key={lang.code}
                                    className="lang-item"
                                    onClick={() => {
                                        changeLanguage(lang.code);
                                        setIsOpen(false);
                                    }}
                                >
                                    <span>{lang.name}</span>
                                    <img src={lang.img} alt={lang.name} className="lang-icon" />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}

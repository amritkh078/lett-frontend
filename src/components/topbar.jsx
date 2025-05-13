import GbImage from '../assets/GB.png';
import SeImage from '../assets/SE.png';
import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import profileImage from '../assets/profile.jpg';

const languages = [
    { code: 'en', name: 'English', img: GbImage },
    { code: 'sv', name: 'Svenska', img: SeImage },
]

function TopBar() {

    const [isOpen, setIsOpen] = useState(false);
    const { i18n } = useTranslation();

    const currentLanguage = useMemo(() => languages.find((lang) => lang.code === i18n.language), [i18n.language]);

    console.log(currentLanguage, i18n.languages, i18n.resolvedLanguage);



    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className='bg-blue-500 text-white flex justify-between items-center px-4 py-2'>

            <div className="flex items-center">
                <img
                    src={profileImage}
                    alt="Profile"
                    className="mr-2 rounded-full"
                    width="40"
                />
                <div className="flex flex-col">
                    <span className="font-bold text-white">John Andre</span>
                    <span className="text-xs text-white">Storfjord AS</span>
                </div>
            </div>



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
                                        <span >{lang.name}</span>
                                        <img src={lang.img} alt={lang.name} className="w-6 h-6 mr-2" />
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ) : null
                }
            </div>

        </div>
    );
}

export default TopBar;

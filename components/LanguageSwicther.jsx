import { useState } from 'react';
import Image from 'next/image';

const LanguageSwitcher = () => {
    const [language, setLanguage] = useState('en');

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const getFlagSrc = (lang) => {
        switch (lang) {
            case 'en':
                return '/assets/angleterre.jpg';
            case 'fr':
                return '/assets/france.png';
            default: '/assets/france.png'
        }
    };

    return (
        <div className="flex items-center gap-2 px-1 bg-slate-800 rounded-md z-50">
            <Image src="/language.svg" alt="Language Flag" width={17} height={24} />
            <div className="w-[1rem] h-[1rem]">
                <img src={getFlagSrc(language)} alt="Language Flag" className="object-fill w-full h-full rounded-[50%]" />
            </div>
            <select value={language} onChange={handleLanguageChange} className=" bg-slate-800
             text-[#dce5e2] text-[1rem]   border-none rounded  py-1 outline-none">
                <option value="en">en</option>
                <option value="fr">fr</option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;

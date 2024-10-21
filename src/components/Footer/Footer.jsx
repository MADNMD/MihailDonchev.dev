import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import WorldFlag from 'react-world-flags';
import { AppContext } from "../../contexts/AppContext.jsx";

export const Footer = () => {

    const { handleChangeLanguage, text, currentLanguage } = useContext(AppContext);

    return (
        <div className='bg-navigation-bg p-4 text-center'>
            <button className="inline-block mx-2" onClick={() => handleChangeLanguage('en')}>
                {currentLanguage === 'en'}
                <WorldFlag code="GB" className="w-8 h-8 inline-block" title="English" />
            </button>
            <button className="inline-block mx-2" onClick={() => handleChangeLanguage('bg')}>
                {currentLanguage === 'bg'}
                <WorldFlag code="BG" className="w-8 h-8 inline-block" title="Bulgarian" />
            </button>
        </div>
    )
}

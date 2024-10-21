import React, { createContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../config/i18n';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const { t: text, i18n: { changeLanguage, language } } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language);

    const handleChangeLanguage = (newLanguage) => {
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    }

    return (
        <AppContext.Provider value={{ handleChangeLanguage, text, currentLanguage }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;

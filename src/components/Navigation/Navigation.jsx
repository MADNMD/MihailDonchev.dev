import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

import { AppContext } from '../../contexts/AppContext';

export const Navigation = ({ closeMenu }) => {

    const { text } = useContext(AppContext);

    return (
        <nav className="flex-grow flex items-center justify-center">
            <ul className='flex flex-col gap-4'>
                <li className='text-center'>
                    <Link to={"/about"} className="text-lg text-decoration-none text-navigation-text py-2 px-4" onClick={closeMenu}>{text('navigation.about')}</Link>
                </li>
                <li className='text-center'>
                    <Link to={"/projects"} className="text-lg text-decoration-none text-navigation-text py-2 px-4" onClick={closeMenu}>{text('navigation.projects')}</Link>
                </li>
                <li className='text-center'>
                    <Link to={"/certificates"} className="text-lg text-decoration-none text-navigation-text py-2 px-4" onClick={closeMenu}>{text('navigation.certificates')}</Link>
                </li>
                <li className='text-center'>
                    <Link to={"/contacts"} className="text-lg text-decoration-none text-navigation-text py-2 px-4" onClick={closeMenu}>{text('navigation.contacts')}</Link>
                </li>
            </ul>
        </nav>
    )
}

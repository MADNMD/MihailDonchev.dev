import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className='bg-navigation-bg p-4 text-center'>
            <p className="inline-block mx-2">
                <Link to={'https://www.linkedin.com/in/mihail-donchev-6a400025a/'} target='_blank'><FaGithub className="text-navigation-text text-2xl" /></Link>
            </p>
            <p className="inline-block mx-2">
                <Link to={'https://github.com/MADNMD'} target='_blank'><FaLinkedin className="text-navigation-text text-2xl" /></Link>
            </p>
        </div>
    )
}

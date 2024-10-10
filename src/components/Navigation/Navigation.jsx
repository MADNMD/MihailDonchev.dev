import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
            <nav className="flex-grow flex items-center justify-center">
                <ul className='flex flex-col gap-4'>
                    <li>
                        <Link to={"/about"} className="text-lg text-decoration-none text-navigation-text py-2 px-4 hover:bg-red-600">About </Link>
                    </li>
                    <li>
                        <Link to={"/projects"} className="text-lg text-decoration-none text-navigation-text py-2 px-4 hover:bg-red-600" >Projects </Link>
                    </li>
                    <li>
                        <Link to={"/certificates"} className="text-lg text-decoration-none text-navigation-text py-2 px-4 hover:bg-red-600" >Certificates </Link>
                    </li>
                    <li>
                        <Link to={"/contacts"} className="text-lg text-decoration-none text-navigation-text py-2 px-4 hover:bg-red-600" >Contacts </Link>
                    </li>
                </ul>
            </nav>
    )
}

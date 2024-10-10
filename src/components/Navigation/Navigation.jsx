import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <div className='bg-red-500 text-center p-4'>
            <nav>
                <ul className='flex space-x-4'>
                    <li>
                        <Link to={"/about"} className="text-decoration-none">About </Link>
                    </li>
                    <li>
                        <Link to={"/projects"} >Projects </Link>
                    </li>
                    <li>
                        <Link to={"/certificates"} >Certificates </Link>
                    </li>
                    <li>
                        <Link to={"/contacts"} >Contacts </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

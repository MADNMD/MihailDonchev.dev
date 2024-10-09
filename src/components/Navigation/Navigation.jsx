import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <div className='flex flex-col gap-2 bg-[#202020]'>
            <Link to={"/"} >Home </Link>
            <Link to={"/about"} >About </Link>
            <Link to={"/projects"} >Projects </Link>
            <Link to={"/certificates"} >Certificates </Link>
            <Link to={"/contacts"} >Contacts </Link>
        </div>
    )
}

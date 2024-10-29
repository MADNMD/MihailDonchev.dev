import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '../../contexts/AppContext';

export const Certificates = () => {

    const { text } = useContext(AppContext);

    return (
        <motion.div className='flex flex-col items-center justify-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}>
            <motion.h1 className='mt-12 text-4xl font-bold navigation-text header-font'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}>{text('certificates.header')}</motion.h1>
            <div className={`
                grid gap-4 mt-8 mr-4 ml-4
                xxs:grid-cols-1
                xs:grid-cols-1
                sm:grid-cols-1
                md:grid-cols-2
                lg:grid-cols-2
                xl:grid-cols-3
                `}>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>Intern</h5>
                        <img src="/intern.png" alt="intern" className={`
                            w-full rounded-lg 
                            xxs:h-full
                            xs:h-full
                            sm:h-full
                            md:h-max
                            lg:h-max
                            xl:h-max
                            `} />
                    </div>
                    <div className='flex-grow'>
                        <p className={`
                            text-white mb-4
                            xxs:mt-16
                            xs:mt-16
                            sm:mt-16
                            md:mt-4
                            lg:mt-4
                            xl:mt-4
                            `}>{text('certificates.intern')}</p>

                    </div>
                    <div className='flex justify-evenly gap-20'>
                        <Link to={'https://huutgnkansvslafnbtbg.supabase.co/storage/v1/object/public/files/certificates/season1/Certificate-Intern-Mihail-Donchev.pdf'} target='_blank' className='
                        inline-block 
                        text-white 
                        text-base 
                        bg-body-bg 
                        m-2 
                        px-10 
                        py-2 
                        rounded 
                        button-font
                        transition-colors 
                        duration-300 
                        ease-in-out
                        hover:bg-hover'>{text('certificates.btn')}</Link>
                    </div>
                </div>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>MySQL</h5>
                        <img src="/MySQL.jpeg" alt="Online supermarket" className={`
                            w-full rounded-lg 
                            xxs:h-full
                            xs:h-full
                            sm:h-full
                            md:h-max
                            lg:h-max
                            xl:h-max
                            `} />
                    </div>
                    <div className='flex-grow'>
                        <p className={`
                            text-white mb-4
                            xxs:mt-16
                            xs:mt-16
                            sm:mt-16
                            md:mt-4
                            lg:mt-4
                            xl:mt-4
                        `}>{text('certificates.mysql')}</p>

                    </div>
                    <div className='flex justify-evenly gap-20'>
                        <Link to={'https://softuni.bg/certificates/details/202854/0b07aec6'} target='_blank' className='
                        inline-block 
                        text-white 
                        text-base 
                        bg-body-bg 
                        m-2 
                        px-10 
                        py-2 
                        rounded 
                        button-font
                        transition-colors 
                        duration-300 
                        ease-in-out
                        hover:bg-hover'>{text('certificates.btn')}</Link>
                    </div>
                </div>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>ReactJS</h5>
                        <img src="/ReactJS.jpeg" alt="Online supermarket" className={`
                            w-full rounded-lg 
                            xxs:h-full
                            xs:h-full
                            sm:h-full
                            md:h-max
                            lg:h-max
                            xl:h-max
                        `} />
                    </div>
                    <div className='flex-grow'>
                        <p className={`
                            text-white mb-4
                            xxs:mt-16
                            xs:mt-16
                            sm:mt-16
                            md:mt-4
                            lg:mt-4
                            xl:mt-4
                        `}>{text('certificates.react')}</p>
                    </div>
                    <div className='flex justify-evenly gap-20'>
                        <Link to={'https://softuni.bg/certificates/details/197803/9cd256fd'} target='_blank' className='
                        inline-block 
                        text-white 
                        text-base 
                        bg-body-bg 
                        m-2 
                        px-10 
                        py-2 
                        rounded 
                        button-font
                        transition-colors 
                        duration-300 
                        ease-in-out
                        hover:bg-hover'>{text('certificates.btn')}</Link>
                    </div>
                </div>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>HTML & CSS</h5>
                        <img src="/HTML-CSS.jpeg" alt="Online supermarket" className={`
                            w-full rounded-lg 
                            xxs:h-full
                            xs:h-full
                            sm:h-full
                            md:h-max
                            lg:h-max
                            xl:h-max
                        `} />
                    </div>
                    <div className='flex-grow'>
                        <p className={`
                            text-white mb-4
                            xxs:mt-16
                            xs:mt-16
                            sm:mt-16
                            md:mt-4
                            lg:mt-4
                            xl:mt-4
                        `}>{text('certificates.htmlCss')}</p>

                    </div>
                    <div className='flex justify-evenly gap-20'>
                        <Link to={'https://softuni.bg/certificates/details/190743/f5f99347'} target='_blank' className='
                        inline-block 
                        text-white 
                        text-base 
                        bg-body-bg 
                        m-2 
                        px-10 
                        py-2 
                        rounded 
                        button-font
                        transition-colors 
                        duration-300 
                        ease-in-out
                        hover:bg-hover'>{text('certificates.btn')}</Link>
                    </div>
                </div>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>Angular</h5>
                        <img src="/Angular.jpeg" alt="Online supermarket" className={`
                            w-full rounded-lg 
                            xxs:h-full
                            xs:h-full
                            sm:h-full
                            md:h-max
                            lg:h-max
                            xl:h-max
                            `} />
                    </div>
                    <div className='flex-grow'>
                        <p className={`
                            text-white mb-4
                            xxs:mt-16
                            xs:mt-16
                            sm:mt-16
                            md:mt-4
                            lg:mt-4
                            xl:mt-4
                        `}>{text('certificates.angular')}</p>

                    </div>
                    <div className='flex justify-evenly gap-20'>
                        <Link to={'https://softuni.bg/certificates/details/182949/3dbe155d'} target='_blank' className='
                        inline-block 
                        text-white 
                        text-base 
                        bg-body-bg 
                        m-2 
                        px-10 
                        py-2 
                        rounded 
                        button-font
                        transition-colors 
                        duration-300 
                        ease-in-out
                        hover:bg-hover'>{text('certificates.btn')}</Link>
                    </div>
                </div>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>JS Back-End</h5>
                        <img src="/beck-end.jpeg" alt="Online supermarket" className={`
                            w-full rounded-lg 
                            xxs:h-full
                            xs:h-full
                            sm:h-full
                            md:h-max
                            lg:h-max
                            xl:h-max
                            `} />
                    </div>
                    <div className='flex-grow'>
                        <p className={`
                            text-white mb-4
                            xxs:mt-16
                            xs:mt-16
                            sm:mt-16
                            md:mt-4
                            lg:mt-4
                            xl:mt-4
                        `}>{text('certificates.jsBackEnd')}</p>

                    </div>
                    <div className='flex justify-evenly gap-20'>
                        <Link to={'https://softuni.bg/certificates/details/175192/e2879762'} target='_blank' className='
                        inline-block 
                        text-white 
                        text-base 
                        bg-body-bg 
                        m-2 
                        px-10 
                        py-2 
                        rounded 
                        button-font
                        transition-colors 
                        duration-300 
                        ease-in-out
                        hover:bg-hover'>{text('certificates.btn')}</Link>
                    </div>
                </div>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>JS Applications</h5>
                        <img src="/applications.jpg" alt="Online supermarket" className={`
                            w-full rounded-lg 
                            xxs:h-full
                            xs:h-full
                            sm:h-full
                            md:h-max
                            lg:h-max
                            xl:h-max
                        `} />
                    </div>
                    <div className='flex-grow'>
                        <p className={`
                            text-white mb-4
                            xxs:mt-16
                            xs:mt-16
                            sm:mt-16
                            md:mt-4
                            lg:mt-4
                            xl:mt-4
                        `}>{text('certificates.jsApp')}</p>

                    </div>
                    <div className='flex justify-evenly gap-20'>
                        <Link to={'https://softuni.bg/certificates/details/167737/36191901'} target='_blank' className='
                        inline-block 
                        text-white 
                        text-base 
                        bg-body-bg 
                        m-2 
                        px-10 
                        py-2 
                        rounded 
                        button-font
                        transition-colors 
                        duration-300 
                        ease-in-out
                        hover:bg-hover'>{text('certificates.btn')}</Link>
                    </div>
                </div>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>JS Advanced</h5>
                        <img src="/advanced.jpg" alt="Online supermarket" className={`
                            w-full rounded-lg 
                            xxs:h-full
                            xs:h-full
                            sm:h-full
                            md:h-max
                            lg:h-max
                            xl:h-max
                        `} />
                    </div>
                    <div className='flex-grow'>
                        <p className={`
                            text-white mb-4
                            xxs:mt-16
                            xs:mt-16
                            sm:mt-16
                            md:mt-4
                            lg:mt-4
                            xl:mt-4
                        `}>{text('certificates.jsAdvanced')}</p>

                    </div>
                    <div className='flex justify-evenly gap-20'>
                        <Link to={'https://softuni.bg/certificates/details/160047/4d6266f1'} target='_blank' className='
                        inline-block 
                        text-white 
                        text-base 
                        bg-body-bg 
                        m-2 
                        px-10 
                        py-2 
                        rounded 
                        button-font
                        transition-colors 
                        duration-300 
                        ease-in-out
                        hover:bg-hover'>{text('certificates.btn')}</Link>
                    </div>
                </div>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>Programing Fundamentals with JS</h5>
                        <img src="/fundamentals.jpg" alt="Online supermarket" className={`
                            w-full rounded-lg 
                            xxs:h-full
                            xs:h-full
                            sm:h-full
                            md:h-max
                            lg:h-max
                            xl:h-max
                        `} />
                    </div>
                    <div className='flex-grow'>
                        <p className={`
                            text-white mb-4
                            xxs:mt-24
                            xs:mt-16
                            sm:mt-16
                            md:mt-4
                            lg:mt-4
                            xl:mt-4
                        `}>{text('certificates.fundamentals')}</p>

                    </div>
                    <div className='flex justify-evenly gap-20'>
                        <Link to={'https://softuni.bg/certificates/details/149376/5a154b00'} target='_blank' className='
                        inline-block 
                        text-white 
                        text-base 
                        bg-body-bg 
                        m-2 
                        px-10 
                        py-2 
                        rounded 
                        button-font
                        transition-colors 
                        duration-300 
                        ease-in-out
                        hover:bg-hover'>{text('certificates.btn')}</Link>
                    </div>
                </div>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>Programing basics with JavaScript</h5>
                        <img src="/basics.jpg" alt="Online supermarket" className={`
                            w-full rounded-lg 
                            xxs:h-full
                            xs:h-full
                            sm:h-full
                            md:h-max
                            lg:h-max
                            xl:h-max
                        `} />
                    </div>
                    <div className='flex-grow'>
                        <p className={`
                            text-white mb-4
                            xxs:mt-24
                            xs:mt-16
                            sm:mt-16
                            md:mt-4
                            lg:mt-4
                            xl:mt-4
                        `}>{text('certificates.basic')}</p>

                    </div>
                    <div className='flex justify-evenly gap-20'>
                        <Link to={'https://softuni.bg/certificates/details/133701/a951a7f2'} target='_blank' className='
                        inline-block 
                        text-white 
                        text-base 
                        bg-body-bg 
                        m-2 
                        px-10 
                        py-2 
                        rounded 
                        button-font
                        transition-colors 
                        duration-300 
                        ease-in-out
                        hover:bg-hover'>{text('certificates.btn')}</Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

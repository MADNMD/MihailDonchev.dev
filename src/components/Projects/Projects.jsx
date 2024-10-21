import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {AppContext} from '../../contexts/AppContext';

export const Projects = () => {

    const {text} = useContext(AppContext);

    return (
        <motion.div className='flex flex-col items-center justify-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}>
            <motion.h1 className='mt-12 text-4xl font-bold navigation-text header-font'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}>{text('projects.header')}</motion.h1>
            <div className='grid grid-cols-2 gap-4 mt-8 mr-4 ml-4'>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>VANIMI online supermarket</h5>
                        <img src="/vanimi-supermaket.png" alt="Online supermarket" className='w-full h-4/5 rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mt-2 mb-4'><span className='font-bold'>{text('projects.vanimi.description')}: </span>{text('projects.vanimi.contentDescription')}</p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>{text('projects.vanimi.catalog')}: </span>{text('projects.vanimi.contentCatalog')}</li>
                            <li className='mb-2'><span className='font-bold'>{text('projects.vanimi.search')}: </span>{text('projects.vanimi.searchContent')}</li>
                            <li className='mb-2'><span className='font-bold'>{text('projects.vanimi.user')}: </span>{text('projects.vanimi.userContent')}</li>
                            <li className='mb-2'><span className='font-bold'>{text('projects.vanimi.discounts')}: </span>{text('projects.vanimi.discountsContent')}</li>
                            <li className='mb-2'><span className='font-bold'>{text('projects.vanimi.delivery')}: </span>{text('projects.vanimi.deliveryContent')}</li>

                        </ul>
                        <p className='text-white mt-2 mb-4 font-bold'>{text('projects.usedTechnologies')}: </p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>Frontend: </span>ReactJS, HTML, CSS</li>
                            <li className='mb-2'><span className='font-bold'>Backend: </span>Node.js, Express.js</li>
                            <li className='mb-2'><span className='font-bold'>Database: </span>MongoDB with Mongoose</li>
                        </ul>
                    </div>
                    <div className='flex justify-evenly gap-20'>
                        <Link to={'https://vanimi-supermarket.netlify.app/'} target='_blank' className='
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
                        hover:bg-hover'>{text('projects.btn.visit')}</Link>
                        <Link to={'https://github.com/MADNMD/Ecommerce-Supermarket'} target='_blank' className='
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
                        hover:bg-hover'>{text('projects.btn.code')}</Link>
                    </div>
                </div>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>Family tree</h5>
                        <img src="/family-tree.png" alt="Online supermarket" className='w-full h-4/5 rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mt-2 mb-4'><span className='font-bold'>{text('projects.familyTree.description')}: </span>{text('projects.familyTree.descriptionContent')}</p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>{text('projects.familyTree.freeVersion')}: </span>{text('projects.familyTree.freeVersionContent')}</li>
                            <li className='mb-2'><span className='font-bold'>{text('projects.familyTree.paidVersion')}: </span>{text('projects.familyTree.padiVersionContent')}</li>
                            <li className='mb-2'><span className='font-bold'>{text('projects.familyTree.user')}: </span>{text('projects.familyTree.userContent')}</li>
                            <li className='mb-2'><span className='font-bold'>{text('projects.familyTree.multilingual')}: </span>{text('projects.familyTree.multiContent')}</li>
                        </ul>
                        <p className='text-white mt-2 mb-4 font-bold'>{text('projects.usedTechnologies')}: </p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>Frontend: </span>ReactJS, HTML, CSS</li>
                            <li className='mb-2'><span className='font-bold'>Libraries: </span>Material UI, Formik, EmailJS, i18next, D3.js, and others</li>
                            <li className='mb-2'><span className='font-bold'>Database and Authentication: </span>Firebase</li>
                        </ul>
                    </div>
                    <div className='flex justify-evenly gap-20'>
                        <Link to={'https://project-30-two.vercel.app/'} target='_blank' className='
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
                        hover:bg-hover'>{text('projects.btn.visit')}</Link>
                        <div className='relative group'>
                            <Link to={''} target='_blank' className='
                        cursor-not-allowed
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
                        hover:bg-hover'
                                onClick={e => e.preventDefault()}>{text('projects.btn.code')}</Link>
                            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max p-2 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {text('projects.btn.private')}
                            </span>
                        </div>
                    </div>
                </div>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>Евро проекти</h5>
                        <img src="/euro-projects.png" alt="Online supermarket" className='w-full h-4/5 rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mt-2 mb-4'><span className='font-bold'>{text('projects.euroProjects.description')}: </span>{text('projects.euroProjects.descriptionContent')}</p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>{text('projects.euroProjects.investments')}: </span>{text('projects.euroProjects.investmentsContent')}</li>
                            <li className='mb-2'><span className='font-bold'>{text('projects.euroProjects.marketing')}: </span>{text('projects.euroProjects.marketingContent')}</li>
                            <li className='mb-2'><span className='font-bold'>{text('projects.euroProjects.activities')}: </span>{text('projects.euroProjects.activitiesContent')}</li>
                            <li className='mb-2'><span className='font-bold'>{text('projects.euroProjects.innovation')}: </span>{text('projects.euroProjects.innovationContent')}</li>
                            <li className='mb-2'><span className='font-bold'>{text('projects.euroProjects.other')}: </span>{text('projects.euroProjects.otherContent')}</li>
                        </ul>
                        <p className='text-white mt-2 mb-4 font-bold'>{text('projects.usedTechnologies')}: </p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>Content management system(CMS): </span>Joomla 5</li>
                            <li className='mb-2'><span className='font-bold'>Database: </span>MySql</li>
                        </ul>
                    </div>
                    <div className='flex justify-evenly gap-20'>
                        <Link to={'https://europrojects-ruse.com/'} target='_blank' className='
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
                        hover:bg-hover'>{text('projects.btn.visit')}</Link>
                        <Link to={''} target='_blank' className='
                        cursor-not-allowed
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
                        hover:bg-hover'
                            onClick={e => e.preventDefault()}>{text('projects.btn.code')}</Link>
                    </div>
                </div>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>Shared trip</h5>
                        <img src="/shared-trip.png" alt="Online supermarket" className='w-full h-4/5 rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mt-2 mb-4'><span className='font-bold'>{text('projects.sharedTrip.description')}: </span>{text('projects.sharedTrip.descriptionContent')}</p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>{text('projects.sharedTrip.user')}: </span>{text('projects.sharedTrip.userContent')}</li>
                            <li className='mb-2'><span className='font-bold'>{text('projects.sharedTrip.search')}: </span>{text('projects.sharedTrip.searchContent')}</li>
                            <li className='mb-2'><span className='font-bold'>{text('projects.sharedTrip.comment')}: </span>{text('projects.sharedTrip.commentContent')}</li>
                        </ul>
                        <p className='text-white mt-2 mb-4 font-bold'>{text('projects.usedTechnologies')}: </p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>Frontend: </span>ReactJS, HTML, CSS</li>
                            <li className='mb-2'><span className='font-bold'>Backend: </span>Node.js, Express.js</li>
                            <li className='mb-2'><span className='font-bold'>Database: </span>MongoDB with Mongoose</li>
                        </ul>
                    </div>
                    <div className='flex justify-evenly gap-20'>
                        <Link to={'https://shared-trip.netlify.app/'} target='_blank' className='
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
                        hover:bg-hover'>{text('projects.btn.visit')}</Link>
                        <Link to={'https://github.com/MADNMD/SharedTrip-React-Project'} target='_blank' className='
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
                        hover:bg-hover'>{text('projects.btn.code')}</Link>
                    </div>
                </div>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>Crossfit workout</h5>
                        <img src="/crossfit.png" alt="Online supermarket" className='w-full h-4/5 rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mt-2 mb-4'><span className='font-bold'>{text('projects.crossFit.description')}: </span>{text('projects.crossFit.descriptionContent')}</p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>{text('projects.crossFit.user')}: </span>{text('projects.crossFit.userContent')}</li>
                            <li className='mb-2'><span className='font-bold'>{text('projects.crossFit.share')}: </span>{text('projects.crossFit.userContent')}</li>
                            <li className='mb-2'><span className='font-bold'>{text('projects.crossFit.like')}: </span>{text('projects.crossFit.userContent')}</li>
                        </ul>
                        <p className='text-white mt-2 mb-4 font-bold'>{text('projects.usedTechnologies')}: </p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>Frontend: </span>Angular, TypeScript</li>
                            <li className='mb-2'><span className='font-bold'>Backend: </span>Node.js, Express.js</li>
                            <li className='mb-2'><span className='font-bold'>Database: </span>MongoDB with Mongoose</li>
                        </ul>
                    </div>
                    <div className='flex justify-evenly gap-20'>
                        <Link to={'https://corssfit.netlify.app/home'} target='_blank' className='
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
                        hover:bg-hover'>{text('projects.btn.visit')}</Link>
                        <Link to={'https://github.com/MADNMD/CrossFit-Angular-Project'} target='_blank' className='
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
                        hover:bg-hover'>{text('projects.btn.code')}</Link>
                    </div>
                </div>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>Date and clock</h5>
                        <img src="/clock.png" alt="Online supermarket" className='w-full h-4/5 rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mt-2 mb-4'><span className='font-bold'>{text('projects.dateAndClock.description')}: </span>{text('projects.dateAndClock.descriptionContent')}</p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>{text('projects.dateAndClock.currentTime')}: </span>{text('projects.dateAndClock.currentTimeContent')}</li>
                            <li className='mb-2'><span className='font-bold'>{text('projects.dateAndClock.currentDate')}: </span>{text('projects.dateAndClock.currentDateContent')}</li>
                            <li className='mb-2'><span className='font-bold'>{text('projects.dateAndClock.responsive')}: </span>{text('projects.dateAndClock.responsiveContent')}</li>
                        </ul>
                        <p className='text-white mt-2 mb-4 font-bold'>{text('projects.usedTechnologies')}: </p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>Frontend: </span>Vanila JavaScript, HTML, CSS</li>
                        </ul>
                    </div>
                    <div className='flex justify-evenly gap-20'>
                        <Link to={'https://madnmd.github.io/date-and-clock.github.io/'} target='_blank' className='
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
                        hover:bg-hover'>{text('projects.btn.visit')}</Link>
                        <Link to={'https://github.com/MADNMD/date-and-clock.github.io?tab=readme-ov-file'} target='_blank' className='
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
                        hover:bg-hover'>{text('projects.btn.code')}</Link>
                    </div>
                </div>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>Generate quotes</h5>
                        <img src="/generate-quotes.png" alt="Online supermarket" className='w-full h-4/5 rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mt-2 mb-4'><span className='font-bold'>{text('projects.quotes.description')}: </span>{text('projects.quotes.descriptionContent')}</p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>{text('projects.quotes.quotes')}: </span>{text('projects.quotes.quotesContent')}</li>
                            <li className='mb-2'><span className='font-bold'>{text('projects.quotes.interface')}: </span>{text('projects.quotes.interfaceContent')}</li>
                        </ul>
                        <p className='text-white mt-2 mb-4 font-bold'>{text('projects.usedTechnologies')}: </p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>Frontend: </span>Vanila JavaScript, HTML, CSS</li>
                        </ul>
                    </div>
                    <div className='flex justify-evenly gap-20'>
                        <Link to={'https://madnmd.github.io/Generate-Quotes.github.io/'} target='_blank' className='
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
                        hover:bg-hover'>{text('projects.btn.visit')}</Link>
                        <Link to={'https://github.com/MADNMD/Generate-Quotes.github.io?tab=readme-ov-file'} target='_blank' className='
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
                        hover:bg-hover'>{text('projects.btn.code')}</Link>
                    </div>
                </div>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>To Do List</h5>
                        <img src="/todos.png" alt="Online supermarket" className='w-full h-4/5 rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mt-2 mb-4'><span className='font-bold'>{text('projects.toDo.description')}: </span>{text('projects.toDo.descriptionContent')}</p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>{text('projects.toDo.task')}: </span>{text('projects.toDo.taskContent')}</li>
                            <li className='mb-2'><span className='font-bold'>{text('projects.toDo.interactive')}: </span>{text('projects.toDo.interactiveContent')}</li>
                            <li className='mb-2'><span className='font-bold'>{text('projects.toDo.responsive')}: </span>{text('projects.toDo.responsiveContent')}</li>
                        </ul>
                        <p className='text-white mt-2 mb-4 font-bold'>{text('projects.usedTechnologies')}: </p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>Frontend: </span>Vanila JavaScript, HTML, CSS</li>
                        </ul>
                    </div>
                    <div className='flex justify-evenly gap-20'>
                        <Link to={'https://madnmd.github.io/To-Do-List.github.io/'} target='_blank' className='
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
                        hover:bg-hover'>{text('projects.btn.visit')}</Link>
                        <Link to={'https://github.com/MADNMD/To-Do-List.github.io?tab=readme-ov-file'} target='_blank' className='
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
                        hover:bg-hover'>{text('projects.btn.code')}</Link>
                    </div>
                </div>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>Backgourn Colors</h5>
                        <img src="/bg-colors.png" alt="Online supermarket" className='w-full h-4/5 rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mt-2 mb-4'><span className='font-bold'>{text('projects.colors.description')}: </span>{text('projects.colors.descriptionContent')}</p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>{text('projects.colors.changeColor')}: </span>{text('projects.colors.changeColorContent')}</li>
                            <li className='mb-2'><span className='font-bold'>{text('projects.colors.interface')}: </span>{text('projects.colors.interfaceContent')}</li>
                            <li className='mb-2'><span className='font-bold'>{text('projects.colors.responsive')}: </span>{text('projects.colors.responsiveContent')}</li>
                        </ul>
                        <p className='text-white mt-2 mb-4 font-bold'>{text('projects.usedTechnologies')}: </p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>Frontend: </span>Vanila JavaScript, HTML, CSS</li>
                        </ul>
                    </div>
                    <div className='flex justify-evenly gap-20'>
                        <Link to={'https://madnmd.github.io/Background-Colors.github.io/'} target='_blank' className='
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
                        hover:bg-hover'>{text('projects.btn.visit')}</Link>
                        <Link to={'https://github.com/MADNMD/Background-Colors.github.io?tab=readme-ov-file'} target='_blank' className='
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
                        hover:bg-hover'>{text('projects.btn.code')}</Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

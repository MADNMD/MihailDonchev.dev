import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaNodeJs, FaGitAlt, FaJoomla, FaAngular } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { SiExpress, SiMysql, SiMongodb, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { AppContext } from "../../contexts/AppContext";

export const About = () => {

    const { text } = useContext(AppContext);

    const skills = [
        { icon: <IoLogoJavascript className="text-yellow-500 text-4xl" /> },
        { icon: <FaReact className="text-blue-400 text-4xl" /> },
        { icon: <FaNodeJs className="text-green-600 text-4xl" /> },
        { icon: <FaHtml5 className="text-red-600 text-4xl" /> },
        { icon: <IoLogoCss3 className="text-blue-500 text-4xl" /> },
        { icon: <RiTailwindCssFill className="text-sky-400 text-4xl" /> },
        { icon: <SiMongodb className="text-green-800 text-4xl" /> },
        { icon: <SiMysql className="text-blue-700 text-4xl" /> },
        { icon: <SiExpress className="text-gray-600 text-4xl" /> },
        { icon: <FaJoomla className="text-blue-800 text-4xl" /> },
        { icon: <FaGitAlt className="text-red-700 text-4xl" /> },
        { icon: <FaAngular className="text-red-500 text-4xl" /> },
        { icon: <SiTypescript className="text-blue-500 text-4xl" /> },
    ];

    return (
        <motion.div className='flex flex-col items-center justify-center overflow-hidden'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}>
            <motion.h1 className='mt-12 text-4xl font-bold navigation-text header-font'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}>{text('about.header')}
            </motion.h1>
            <div className={`
                flex flex-row mt-8 p-4 gap-8
                xxs:flex-wrap
                xs:flex-wrap
                sm:flex-wrap
                md:flex-wrap
                lg:flex-nowrap
                xl:flex-nowrap
                `}>
                <div className={`
                    xxs:w-full xxs:h-auto
                    xs:w-full
                    sm:w-full
                    md:w-full 
                    lg:w-1/2 lg:h-4/5
                    xl:w-1/2 xl:h-4/5
                    `}>
                    <motion.img src="/PortfolioPic.jpg" alt="profile-pic" className='w-full h-screen rounded-lg'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }} />
                </div>
                <div className={`
                    felx flex-col
                    xxs:w-full 
                    xs:w-full
                    sm:w-full
                    md:w-full 
                    lg:w-1/2 
                    xl:w-1/2 
                    `}>
                    <p className='text-white text-lg mb-2'>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}>
                            {text('about.section1')}
                        </motion.span>
                    </p>
                    <p className='text-white  text-lg mt-2 mb-2'>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}>
                            {text('about.section2')}
                        </motion.span>
                    </p>
                    <p className='text-white  text-lg'>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}>
                            {text('about.section3')}
                        </motion.span>
                    </p>
                    <div>
                        <motion.h5 className='text-white text-3xl font-bold mt-4 header-font'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}>{text('about.header2')}</motion.h5>
                        <ul className=' list-inside text-white text-xl'>
                            {/* {skills.map((skill, index) => (
                                <motion.li key={index} className='flex gap-4 mt-2 mb-2'
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}>
                                    {skill.icon}
                                </motion.li>
                            ))} */}
                            <li className='flex gap-4 mt-2 mb-2'>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.7, delay: 0.5 }}>
                                    <IoLogoJavascript className="text-yellow-500 text-4xl" />
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.7, delay: 0.5 }}>
                                    <FaReact className="text-blue-400 text-4xl" />
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.7, delay: 0.5 }}>
                                    <SiTypescript className="text-blue-500 text-4xl" />
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.7, delay: 0.5 }}>
                                    <FaAngular className="text-red-500 text-4xl" />
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.7, delay: 0.5 }}>
                                    <FaHtml5 className="text-red-600 text-4xl" />
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.7, delay: 0.5 }}>
                                    <IoLogoCss3 className="text-blue-500 text-4xl" />
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.7, delay: 0.5 }}>
                                    <RiTailwindCssFill className="text-sky-400 text-4xl" />
                                </motion.div>
                            </li>

                            <li className='flex gap-4 mb-2'>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.7, delay: 0.5 }}>
                                    <FaNodeJs className="text-green-600 text-4xl" />
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.7, delay: 0.5 }}>
                                    <SiMongodb className="text-green-800 text-4xl" />
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.7, delay: 0.5 }}>
                                    <SiMysql className="text-blue-700 text-4xl" />
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.7, delay: 0.5 }}>
                                    <SiExpress className="text-gray-600 text-4xl" />
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.7, delay: 0.5 }}>
                                    <FaJoomla className="text-blue-800 text-4xl" />
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.7, delay: 0.5 }}>
                                    <FaGitAlt className="text-red-700 text-4xl" />
                                </motion.div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

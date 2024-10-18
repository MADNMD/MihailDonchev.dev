import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaNodeJs, FaGitAlt, FaJoomla, FaAngular } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { SiExpress, SiMysql, SiMongodb, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export const About = () => {

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
                transition={{ duration: 1 }}>About Me</motion.h1>
            <div className='flex flex-row mt-8 p-4 gap-8'>
                <div className='w-1/2 h-4/5'>
                    <motion.img src="/PortfolioPic.jpg" alt="profile-pic" className='w-full h-max rounded-lg'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }} />
                </div>
                <div className=' felx flex-col w-1/2'>
                    <p className='text-white text-lg mb-2'>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}>
                            Hello! I’m Mihail Donchev, a passionate junior web developer specializing in JavaScript. With a strong foundation in modern web technologies like ReactJS, HTML, CSS, Tailwind, Node.js, and Express.js, I have successfully built and contributed to various web applications and interfaces. My journey in web development began with comprehensive courses at SoftUni, where I honed my skills and applied them in real-world projects.
                        </motion.span>
                    </p>
                    <p className='text-white  text-lg mt-2 mb-2'>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}>
                            I hold a Bachelor’s degree in Civil and Corporate Security from New Bulgarian University and have furthered my technical expertise through continuous learning and hands-on experience. My technical skill set includes proficiency in databases such as MySQL and MongoDB, as well as testing frameworks like Mocha and Chai.
                        </motion.span>
                    </p>
                    <p className='text-white  text-lg'>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}>
                            In addition to my technical abilities, I am highly motivated, creative, and responsible. I thrive in collaborative environments and am always eager to tackle new challenges. My personal projects, such as the Vanimi-Supermarket eCommerce platform and the Family Tree visualization tool, showcase my ability to deliver functional and user-friendly solutions.
                        </motion.span>
                    </p>
                    <div>
                        <motion.h5 className='text-white text-3xl font-bold mt-4 header-font'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}>Skills</motion.h5>
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

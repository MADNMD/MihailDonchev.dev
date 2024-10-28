import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../../contexts/AppContext';

export const Home = () => {

    const { text } = useContext(AppContext);

    return (
        <div className="flex flex-col font-mono p-6 h-screen">
            <motion.p className="text-form-logo-text font-custom-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>&lt;html&gt;
            </motion.p>
            <motion.div className="ml-8 mt-2 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                <p className="text-form-logo-text font-custom-2">&lt;body&gt;</p>
                <motion.div className="ml-8 mt-2 mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}>
                    <p className="text-form-logo-text font-custom-2">&lt;h1&gt;</p>
                    <div className="ml-8">
                        <motion.p className={`
                                        bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent
                                        xxs:text-5xl
                                        xs:text-5xl
                                        sm:text-5xl
                                        md:text-7xl
                                        lg:text-9xl
                                        xl:text-9xl
                        `}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}>Hi,
                        </motion.p>
                        <motion.p className={`
                                        bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent
                                        xxs:text-5xl
                                        xs:text-5xl
                                        sm:text-5xl
                                        md:text-7xl
                                        lg:text-9xl
                                        xl:text-9xl
                        `}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}>I'm Mihail,
                        </motion.p>
                        <motion.p className={`
                                        text-9xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent
                                        xxs:text-5xl
                                        xs:text-5xl
                                        sm:text-5xl
                                        md:text-7xl
                                        lg:text-9xl
                                        xl:text-9xl
                        `}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}>web developer
                        </motion.p>
                    </div>
                    <p className="text-form-logo-text font-custom-2">&lt;/h1&gt;</p>
                    <p className="text-form-logo-text font-custom-2">&lt;p&gt;</p>
                    <motion.div className="ml-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}>
                        <p className={`
                                        text-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent
                                        xxs:text-xl
                                        xs:text-xl
                                        sm:text-xl
                                        md:text-xl
                                        lg:text-2xl
                                        xl:text-2xl
                            `}>
                           {text('home.p')}
                        </p>
                    </motion.div>
                    <p className="text-form-logo-text font-custom-2">&lt;/p&gt;</p>
                </motion.div>
                <p className="text-form-logo-text font-custom-2">&lt;/body&gt;</p>
            </motion.div>
            <motion.p className="text-form-logo-text font-custom-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}>&lt;/html&gt;
            </motion.p>
        </div>
    )
}

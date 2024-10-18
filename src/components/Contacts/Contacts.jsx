import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from 'react-spinners/ClipLoader';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImFolderDownload } from "react-icons/im";


export const Contacts = () => {

    const [loading, setLoading] = useState(false);

    const sendEmail = async (values) => {

        const data = {
            name: values.name,
            email: values.email,
            message: values.message,
        }

        try {
            setLoading(true);
            await emailjs.send('service_zwsjpur', 'template_vei7x1m', data, '9LprhwPM-VP2fLkmB');
            toast.success('Email sent successfully');
        } catch (error) {
            toast.error('Failed to send email');
            return;
        } finally {
            setLoading(false);
        }
    }

    const initialValues = {
        name: '',
        email: '',
        message: '',
    };

    const validate = (values) => { };

    const onSubmit = async (values, { resetForm }) => {
        await sendEmail(values);
        resetForm();
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    return (
        <motion.div className='flex flex-col items-center justify-center overflow-hidden'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}>
            <ToastContainer />
            <motion.h1 className='mt-12 text-4xl font-bold navigation-text header-font'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}>Contact Me</motion.h1>
            <div className='flex flex-row mt-8 gap-10 bg-gray-700 shadow-lg rounded-lg p-4'>
                <motion.div className='ml-12'
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}>
                    <img src="/man.png" alt="" />
                </motion.div>
                <motion.div className='mr-12'
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}>
                    <form onSubmit={formik.handleSubmit}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                                maxWidth: { xs: '100%', sm: '500px' },
                                padding: { xs: '16px', sm: '24px' }
                            }}
                        >
                            <TextField
                                label="Your Name"
                                variant="outlined"
                                name='name'
                                fullWidth
                                required
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                sx={{
                                    width: { xs: '100%', sm: '400px' },
                                    '& .MuiInputBase-input': {
                                        color: 'white', // Променя цвета на въведения текст
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white', // Променя цвета на етикета (label)
                                    },
                                    // '& .MuiOutlinedInput-notchedOutline': {
                                    //     borderColor: 'white', // Променя цвета на бордъра
                                    // },
                                    // '&:hover .MuiOutlinedInput-notchedOutline': {
                                    //     borderColor: '#ccc', // Променя цвета на бордъра при hover
                                    // },
                                    // '& .MuiInputLabel-root.Mui-focused': {
                                    //     color: 'white', // Променя цвета на етикета при фокус
                                    // },
                                    // '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    //     borderColor: 'white', // Променя цвета на бордъра при фокус
                                    // }
                                }}
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                name='email'
                                type="email"
                                fullWidth
                                required
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                sx={{
                                    width: { xs: '100%', sm: '400px' },
                                    '& .MuiInputBase-input': {
                                        color: 'white',
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                    },
                                }}
                            />
                            <TextField
                                label="Message"
                                variant="outlined"
                                name='message'
                                multiline
                                rows={5}
                                fullWidth
                                required
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                sx={{
                                    width: { xs: '100%', sm: '400px' },
                                    '& .MuiInputBase-input': {
                                        color: 'white',
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                    },
                                }}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    mt: 2,
                                    width: { xs: '100%', sm: '400px' },
                                    backgroundColor: '#1D1D1D',
                                    '&:hover': {
                                        backgroundColor: '#6c757d'
                                    }
                                }}
                                type="submit"
                                disabled={loading}
                            >{loading ? <ClipLoader size={20} color={"#ffffff"}
                                loading={loading} /> : 'Send Message'}
                            </Button>
                        </Box>
                    </form>
                    <div className='flex items-center justify-center gap-6'>
                        <Link to={'https://github.com/MADNMD'} target='_blank'><FaGithub className="text-form-logo-text text-2xl" /></Link>
                        <Link to={'https://www.linkedin.com/in/mihail-donchev-6a400025a/'} target='_blank'><FaLinkedin className="text-form-logo-text text-2xl" /></Link>
                        <a href='/MihailDonchevResume.pdf' download target='_blank'><ImFolderDownload className="text-form-logo-text text-2xl" title="Download CV" /></a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Certificates = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
            <h1 className='mt-12 text-4xl font-bold navigation-text header-font'>My Certificates</h1>
            <div className='grid grid-cols-3 gap-4 mt-8 mr-4 ml-4'>

                <motion.div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>MySQL</h5>
                        <img src="/MySQL.jpeg" alt="Online supermarket" className='w-full h-max rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mb-4 mt-4'>One of the most widely used database management systems in the development of modern applications. Relational databases, basic functionalities such as working with tables, grouping functions, transactions, procedures, etc.</p>
                       
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
                        hover:bg-hover'>To Do Certificate</Link>
                    </div>
                </motion.div>

                <motion.div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>ReactJS</h5>
                        <img src="/ReactJS.jpeg" alt="Online supermarket" className='w-full h-max rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mb-4 mt-4'>Knowledge and practical skills for SPA development using ReactJS technology. JSX syntax working with requests and promises, splitting an application into components, form routing and validation, different ways to style components using techniques like CSS modules and Styled Components. React Hooks, Context API.</p> 
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
                        hover:bg-hover'>To Do Certificate</Link>
                    </div>
                </motion.div>
                
                <motion.div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>HTML & CSS</h5>
                        <img src="/HTML-CSS.jpeg" alt="Online supermarket" className='w-full h-max rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mb-4 mt-4'>In this course, I learned the basics of HTML5 and CSS3 web technologies. I learned the basic HTML tags, paragraphs, lists, tables, forms, controls and semantic HTML tags. Emphasis is on basic CSS selectors and styles, working with classes, presentation rules, positioning and layout rules in CSS. The course emphasizes hands-on exercises with HTML and CSS, working on real web page development projects, implementation of site fragments and creating complete modern websites with a good look, modern structure and mobile support.</p>
                       
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
                        hover:bg-hover'>To Do Certificate</Link>
                    </div>
                </motion.div>

                <motion.div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>Angular</h5>
                        <img src="/Angular.jpeg" alt="Online supermarket" className='w-full h-max rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mb-4 mt-4'>The "Angular" course provides knowledge and practical skills for building client applications (Single Page Applications) with Angular technology, a working framework created by Google and one of the most popular at the moment. You will learn what TypeScript is, basic syntax and concepts, and what more it offers over JavaScript, such as conveniences for development in the browser and on mobile platforms. Learn what Single Page Application (SPA) is, architectural patterns for SPA applications, components, directives and their implementation in Angular. Views and templates for data visualization (templates), models, components, data binding, working with many views, observables, routing, extracting data from a REST service and dependency injection are studied. DI</p>
                       
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
                        hover:bg-hover'>To Do Certificate</Link>
                    </div>
                </motion.div>

                <motion.div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>JS Back-End</h5>
                        <img src="/beck-end.jpeg" alt="Online supermarket" className='w-full h-max rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mb-4 mt-4'>In the "JS Back-End" course, you will learn how to develop server-side JavaScript applications on the Node.js platform using Express.js as a framework. Also during the training you will learn how to create a server with Node.js, learn the server-client architecture and how to make easy and fast data-driven web applications with Node.js, Express.js and MongoDB using modern techniques and tools. One of the most popular non-relational databases, MongoDB, will be covered, along with the Mongoose library for retrieving data from it. At the end of the course, a complete REST API will be built from scratch using Express.js and MongoDB.</p>
                       
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
                        hover:bg-hover'>To Do Certificate</Link>
                    </div>
                </motion.div>

                <motion.div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>JS Applications</h5>
                        <img src="/applications.jpg" alt="Online supermarket" className='w-full h-max rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mb-4 mt-4'>In the course "JS Applications" you will learn what HTTP requests are and how to use them. You will learn about REST Services, what a Baas (backend as a service) is and how to work with it, what asynchronous code means (Promises, using async/await), what Templating and Routing are. During the course, you will create a Single Page Application, using the techniques learned from previous lectures, on which you will be assessed. You will understand what is the architecture of an application and how to properly structure your applications.</p>
                       
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
                        hover:bg-hover'>To Do Certificate</Link>
                    </div>
                </motion.div>

                <motion.div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>JS Advanced</h5>
                        <img src="/advanced.jpg" alt="Online supermarket" className='w-full h-max rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mb-4 mt-4'>In the "JS Advanced" course, you will get a deep knowledge of the JavaScript language, such as the basics of syntax, working with arrays, matrices, objects, classes and writing functions. You will study more complex concepts like function context, explicit binding, event loop. The course will develop your algorithmic thinking. After successful completion of this course, you will be able to work with the DOM tree, do manipulations on it and work with "events". Functional and OOP approaches to JavaScript programming will be explored, studying concepts such as inheritance, object composition, and prototype chaining.</p>
                       
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
                        hover:bg-hover'>To Do Certificate</Link>
                    </div>
                </motion.div>

                <motion.div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>Programing Fundamentals with JS</h5>
                        <img src="/fundamentals.jpg" alt="Online supermarket" className='w-full h-max rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mb-4 mt-4'>The course "Programming Fundamentals" examines fundamental concepts in programming, which are the basis for effective and quality training in the professional modules. Learners build on the knowledge gained in the Programming Basics course and begin to use more complex programming concepts and structures such as: arrays, objects and classes. Additional technologies needed by every software developer are studied, such as HTML and CSS, HTTP, bit operations, and more. The fundamentals of web development are covered, as well as one of the most common technologies and tools with which the course successfully builds students' ideas about the upcoming professional modules and the knowledge they will gain from them to become successful software developers.</p>
                       
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
                        hover:bg-hover'>To Do Certificate</Link>
                    </div>
                </motion.div>

                <motion.div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>Programing basics with JavaScript</h5>
                        <img src="/basics.jpg" alt="Online supermarket" className='w-full h-max rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mb-4 mt-4'>The "Programming Basics" course provides the initial programming skills necessary for all technology majors at Software University. This includes writing entry-level programming code (basic coding skills), working with a development environment (IDE), using variables and data, operators and expressions, working with the console (reading input and printing results), using of conditional constructions (if, if-else) and loops (for, while).</p>
                       
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
                        hover:bg-hover'>To Do Certificate</Link>
                    </div>
                </motion.div>
            </div>
        </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export const Projects = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='mt-12 text-4xl font-bold navigation-text header-font'>My Projects</h1>
            <div className='grid grid-cols-2 gap-4 mt-8 mr-4 ml-4'>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>VANIMI online supermarket</h5>
                        <img src="/vanimi-supermaket.png" alt="Online supermarket" className='w-full h-4/5 rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mt-2 mb-4'><span className='font-bold'>Description: </span>VANIMI online supermarket is a website that offers a variety of food and household goods that you can order and get delivered directly to your door.</p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>Product catalog: </span>A variety of categories such as fruits and vegetables, meat and fish, dairy products, beverages, cleaning products and more.</li>
                            <li className='mb-2'><span className='font-bold'>Search engine: </span>Easily find products by keywords, brands, prices and other criteria.</li>
                            <li className='mb-2'><span className='font-bold'>User profile </span>Ability to create an account, save favorite products and view previous orders.</li>
                            <li className='mb-2'><span className='font-bold'>Promotions and discounts: </span>Special offers and discount coupons.</li>
                            <li className='mb-2'><span className='font-bold'>Delivery: </span>Options to choose the time and place of delivery.</li>

                        </ul>
                        <p className='text-white mt-2 mb-4 font-bold'>Technologies used: </p>
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
                        hover:bg-hover'>Visit Website</Link>
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
                        hover:bg-hover'>Source code</Link>
                    </div>
                </div>


                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>Family tree</h5>
                        <img src="/family-tree.png" alt="Online supermarket" className='w-full h-4/5 rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mt-2 mb-4'><span className='font-bold'>Description: </span>Working with a team of 5-6 people, we developed an innovative family tree site that allows users to easily track and document their family history. The site offers both free and paid versions to meet a variety of needs and preferences.</p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>Free version: </span>Possibility to create and download the family tree in PDF format.</li>
                            <li className='mb-2'><span className='font-bold'>Paid version: </span>Additional features such as advanced personalization options, adding photos and documents, and sharing the tree with other users.</li>
                            <li className='mb-2'><span className='font-bold'>Login and registration: </span>Secure registration and login system with both Google and Facebook</li>
                            <li className='mb-2'><span className='font-bold'>Multilingual: </span>Support for two languages (English and Bulgarian) to make the site accessible to a wider audience.</li>
                        </ul>
                        <p className='text-white mt-2 mb-4 font-bold'>Technologies used: </p>
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
                        hover:bg-hover'>Visit Website</Link>
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
                                onClick={e => e.preventDefault()}>Source code</Link>
                            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max p-2 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Private repository
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
                        <p className='text-white mt-2 mb-4'><span className='font-bold'>Description: </span>The site offers professional project development and management services for farmers, business people and interested rural organisations. We help our clients to obtain funding under various programs.</p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>Project investments: </span>Preparation of the farm development project and rooftop photovoltaics.</li>
                            <li className='mb-2'><span className='font-bold'>Marketing and processing of agricultural produce: </span>Produce marketing projects.</li>
                            <li className='mb-2'><span className='font-bold'>Non-agricultural activities: </span>Projects for doctor's surgeries, car washes, car service stations and rooftop photovoltaic plants.</li>
                            <li className='mb-2'><span className='font-bold'>Innovation Task Forces: </span>Preparation of rural innovation projects.</li>
                            <li className='mb-2'><span className='font-bold'>Other projects: </span>Consultancy and project preparation for various operational programmes.</li>
                        </ul>
                        <p className='text-white mt-2 mb-4 font-bold'>Technologies used: </p>
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
                        hover:bg-hover'>Visit Website</Link>
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
                            onClick={e => e.preventDefault()}>Source code</Link>
                    </div>
                </div>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>Shared trip</h5>
                        <img src="/shared-trip.png" alt="Online supermarket" className='w-full h-4/5 rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mt-2 mb-4'><span className='font-bold'>Description: </span>"Shared trip" makes it easy and convenient to find or create a shared trip.</p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>Register and Sign In: </span>Create an account and sign in quickly and easily.</li>
                            <li className='mb-2'><span className='font-bold'>Create and search listings: </span>Post your own travel listings or find relevant listings from other users.</li>
                            <li className='mb-2'><span className='font-bold'>Login and registration: </span>Secure registration and login system with both Google and Facebook</li>
                            <li className='mb-2'><span className='font-bold'>Comments and Reviews: </span>Leave comments and ratings about the trips to help the community choose the best options.</li>
                        </ul>
                        <p className='text-white mt-2 mb-4 font-bold'>Technologies used: </p>
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
                        hover:bg-hover'>Visit Website</Link>
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
                        hover:bg-hover'>Source code</Link>
                    </div>
                </div>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>Crossfit workout</h5>
                        <img src="/crossfit.png" alt="Online supermarket" className='w-full h-4/5 rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mt-2 mb-4'><span className='font-bold'>Description: </span>Here is where you can share or find the most diverse workouts.</p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>Sign up and login: </span>Easily create an account and start training.</li>
                            <li className='mb-2'><span className='font-bold'>Share and discover workouts: </span>Post your own workouts or find inspiration from other users.</li>
                            <li className='mb-2'><span className='font-bold'>You like and appreciate workouts: </span>Express your approval and help others discover the best workouts.</li>
                        </ul>
                        <p className='text-white mt-2 mb-4 font-bold'>Technologies used: </p>
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
                        hover:bg-hover'>Visit Website</Link>
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
                        hover:bg-hover'>Source code</Link>
                    </div>
                </div>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>Date and clock</h5>
                        <img src="/clock.png" alt="Online supermarket" className='w-full h-4/5 rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mt-2 mb-4'><span className='font-bold'>Description: </span>This project is a web application that displays the current time and date in real time. The clock is designed with a clean and intuitive interface that includes.</p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>Current Time: </span>Hours, minutes and seconds formatted in 12-hour format with AM/PM indication.</li>
                            <li className='mb-2'><span className='font-bold'>Current date: </span>Day, month and year presented in an easy-to-read format.</li>
                            <li className='mb-2'><span className='font-bold'>Responsive design: </span>The interface is optimized for different devices and screens thanks to the CSS styles used.</li>
                        </ul>
                        <p className='text-white mt-2 mb-4 font-bold'>Technologies used: </p>
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
                        hover:bg-hover'>Visit Website</Link>
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
                        hover:bg-hover'>Source code</Link>
                    </div>
                </div>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>Generate quotes</h5>
                        <img src="/generate-quotes.png" alt="Online supermarket" className='w-full h-4/5 rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mt-2 mb-4'><span className='font-bold'>Description: </span>This generator randomly pulls of quotes.</p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>Variety of quotes: </span>Every time you press the button, a new quote is displayed, chosen at random from a predefined list.</li>
                            <li className='mb-2'><span className='font-bold'>Interactive interface: </span>Users can easily interact with the app through an intuitive button to generate a new quote.</li>
                        </ul>
                        <p className='text-white mt-2 mb-4 font-bold'>Technologies used: </p>
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
                        hover:bg-hover'>Visit Website</Link>
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
                        hover:bg-hover'>Source code</Link>
                    </div>
                </div>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>To Do List</h5>
                        <img src="/todos.png" alt="Online supermarket" className='w-full h-4/5 rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mt-2 mb-4'><span className='font-bold'>Description: </span>Make a list of your daily tasks that you have to do</p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>Task management: </span>Users can easily add new tasks and delete existing ones to keep their list up-to-date.</li>
                            <li className='mb-2'><span className='font-bold'>Interactive Interface: </span>The application offers an intuitive and easy-to-use task management interface.</li>
                            <li className='mb-2'><span className='font-bold'>Responsive design: </span>The interface is optimized for different devices and screens thanks to the CSS styles used.</li>
                        </ul>
                        <p className='text-white mt-2 mb-4 font-bold'>Technologies used: </p>
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
                        hover:bg-hover'>Visit Website</Link>
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
                        hover:bg-hover'>Source code</Link>
                    </div>
                </div>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>Backgourn Colors</h5>
                        <img src="/bg-colors.png" alt="Online supermarket" className='w-full h-4/5 rounded-lg ' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-white mt-2 mb-4'><span className='font-bold'>Description: </span>Change the background color after clicking the button.</p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>Change the background colour: </span>Each time you press the button, the background colour of the screen changes randomly.</li>
                            <li className='mb-2'><span className='font-bold'>Interactive Interface: </span>Users can easily interact with the app through an intuitive color change button.</li>
                            <li className='mb-2'><span className='font-bold'>Responsive design: </span>The interface is optimized for different devices and screens thanks to the CSS styles used.</li>
                        </ul>
                        <p className='text-white mt-2 mb-4 font-bold'>Technologies used: </p>
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
                        hover:bg-hover'>Visit Website</Link>
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
                        hover:bg-hover'>Source code</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

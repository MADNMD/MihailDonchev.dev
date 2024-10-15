import React from 'react'
import { Link } from 'react-router-dom'

export const Projects = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='mt-12 text-4xl font-bold navigation-text header-font'>My Projects</h1>
            <div className='grid grid-cols-2 gap-4 mt-8 mr-4 ml-4'>

                <div className='bg-gray-700 shadow-lg rounded-lg p-4'>
                    <div>
                        <h5 className='text-xl font-bold text-center mt-2 mb-4 text-white'>VANIMI online supermarket</h5>
                        <img src="/vanimi-supermaket.png" alt="Online supermarket" className='w-full h-4/5 rounded-lg ' />
                    </div>
                    <div>
                        <p className='text-white mt-2 mb-4'><span className='font-bold'>Description: </span>VANIMI online supermarket is a website that offers a variety of food and household goods that you can order and get delivered directly to your door.</p>
                        <ul className='list-disc list-inside ml-4 mb-4 text-white'>
                            <li className='mb-2'><span className='font-bold'>Product catalog: </span>A variety of categories such as fruits and vegetables, meat and fish, dairy products, beverages, cleaning products and more.</li>
                            <li className='mb-2'><span className='font-bold'>Search engine: </span>Easily find products by keywords, brands, prices and other criteria.</li>
                            <li className='mb-2'><span className='font-bold'>User profile </span>Ability to create an account, save favorite products and view previous orders.</li>
                            <li className='mb-2'><span className='font-bold'>Promotions and discounts: </span>Special offers and discount coupons.</li>
                            <li className='mb-2'><span className='font-bold'>Delivery: </span>Options to choose the time and place of delivery.</li>
                            
                        </ul>
                        <p className='text-white'>Description</p>
                    </div>
                    <div className='flex justify-evenly gap-20'>
                        <Link to={'/'} className='text-white'>Link</Link>
                        <Link to={'/'} className='text-white'>Link</Link>
                    </div>
                </div>


                <div className='bg-gray-700 shadow-lg rounded-lg p-4'>
                    <div>
                        <h5 className='text-center mt-2 mb-4 text-white'>Online supermarket</h5>
                        <img src="/vanimi-supermaket.png" alt="Online supermarket" className='w-full h-4/5 rounded-lg ' />
                    </div>
                    <div>
                        <p className='text-white'>Description</p>
                        <p className='text-white'>Description</p>
                    </div>
                    <div className='flex justify-evenly gap-20'>
                        <Link to={'/'} className='text-white'>Link</Link>
                        <Link to={'/'} className='text-white'>Link</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

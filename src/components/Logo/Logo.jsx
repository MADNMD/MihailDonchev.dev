import React from 'react';

export const Logo = () => {
  return (
    <div className='flex flex-col bg-black p-4 text-center'>
      <div className='flex items-center justify-center'><img src='/m-logo.png' alt="" className='w-24 h-24' /></div>
      <p className='text-navigation-text font-custom-1'>MIHAIL</p>
      <p className='text-navigation-text font-custom-2'>Junior web developer</p>
    </div>
  )
}

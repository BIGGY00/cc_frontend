import React from 'react'
import Navlink from './Navlink'
import Image from 'next/image'
import Logo from '@/assets/photos/Logo.png'
const Navbar = () => {


  return (
    <div className='h-[6vh] md:h-24 w-5/6 mx-auto sm:w-full sm:mx-0 flex flex-row justify-between items-center  sm:px-12 md:px-14 lg:px-20 xl:px-28 text-sm md:text-base'>
      <div className='flex justify-center items-center cursor-pointer gap-2 md:gap-4 xl:gap-6'>
        <div className='relative'>
           <Image
              alt=''
              src={Logo}
              className='md:object-contain w-6 md:w-8 lg:w-10'
            />
       </div>
        <div className='flex md:text-lg font-semibold'>
          CARBON COIN
        </div>
      </div>
      <div className='hidden sm:flex items-center justify-between gap-2 lg:gap-8 xl:gap-14'>
        <Navlink name='Products'/>
        <Navlink name='Features'/>
        <Navlink name='About'/>
        <Navlink name='Contact'/>
        
        <div className='flex items-center gap-2 md:gap-4 lg:gap-8 xl:gap-14 '>
          <Navlink name='Login'/>
          <p className='font-extralight'>|</p>
          <div className='transition duration-100 ease-in-out cursor-pointer py-2 px-4 md:py-3 md:px-6 xl:py-4 xl:px-8 bg-[#05BE70] rounded-full hover:text-black font-bold hover:bg-white'>
            Register
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
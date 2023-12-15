import React from 'react'
import ManyCoins from '@/assets/photos/ManyCoins.png'
import Image from 'next/image'
import ForwardGreen from '@/assets/icons/ForwardGreen.svg' 
import ForwardWhite from '@/assets/icons/ForwardWhite.svg' 
const page = () => {
  return (
    <div className='h-[968px] flex flex-row justify-center items-center text-sm md:text-base gap-32'>
      <div className='flex w-1/2 h-full items-center justify-center'>
        <div className='flex flex-col gap-7 w-[420px]'>
          {/* Free */}
          <div className='text-lg flex flex-row items-center justify-center bg-[#05BE70] rounded-full px-2 opacity-70'>
            <div className='py-1 px-4  text-black font-bold bg-white rounded-full'>
              Free
            </div>
            <div className='py-3 px-14 text-white font-bold w-full'>
              Carbon Coins System
            </div>
          </div>


          {/* Welcome */}
          <div className='text-6xl font-bold'>
            <p className='tracking-widest'>Welcome to</p>
            <p>Carbon Coins</p>
            <div className='tracking-widest'>System ! ! !</div>
          </div>
          <div className='text-justify'>
            Carbon Coin is our revolutionary digital currency backed by real-world carbon credits. When you engage in eco-friendly practices or offset your carbon footprint.
          </div>


          {/* Try it for FREE */}
          <div className='w-fit transition duration-100 ease-in-out cursor-pointer py-2 px-4 md:py-3 md:px-6 xl:py-4 xl:px-8 bg-[#05BE70] rounded-full font-bold flex flex-row gap-6 items-center justify-center group hover:bg-white'>
            <p className='group-hover:text-black text-lg'>Try it for FREE</p>
            <div className='relative bg-white p-2 rounded-full group-hover:hidden'>
              <Image src={ForwardGreen} alt='' className='w-6 h-6'/>
            </div>
            <div className='hidden bg-black p-2 rounded-full group-hover:flex'>
              <Image src={ForwardWhite} alt='' className='w-6 h-6'/>
            </div>
          </div>
        </div>
      </div>
      <div className='relative w-1/2 flex h-full'>
        <Image
          src={ManyCoins}
          alt=''
          className='object-cover w-full h-full'
        />
      </div>
    </div>
  )
}

export default page
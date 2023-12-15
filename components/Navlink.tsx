import React from 'react'
import { NavlinkProps } from '@/dto/NavlinkProps'
const Navlink = ({ name}:NavlinkProps) => {
  return (
    <div className='hover:underline hover:text-black transition duration-100 ease-in-out cursor-pointer'>{ name }</div>
  )
}

export default Navlink
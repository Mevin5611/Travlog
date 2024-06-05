import React from 'react'
import logo_nav from '../../assets/img/logo-nav.png'
import menu from '../../assets/img/menu (2).png'
const Navbar = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className=' w-[400px] lg:w-[984px] xl:w-[1184px] h-[113px] flex items-center justify-between'>
      <div className='flex items-center col-span-3 ms-5 xl:ms-0 lg:ms-[450px] '>
        <img className='w-[40px] h-[40px]' src={logo_nav} alt="" />
        <h1 className='font-bold ps-3 text-lg'>Travlog</h1>
      </div>
      <div className='hidden xl:block'>
        <ul className='flex'>
            <li className='ps-10 font-semibold text-sm'>Home</li>
            <li className='ps-10 font-semibold text-sm'>Discover</li>
            <li className='ps-10 font-semibold text-sm'>Special Deals</li>
            <li className='ps-10 font-semibold text-sm'>Contact</li>
        </ul>
      </div>
      <div className='flex items-center hidden lg:block'>
        <button className='h-[49px] w-[115px]  rounded-full text-base font-semibold'>Log In</button>
        <button className='h-[49px] w-[115px] bg-[#5D50C6] text-white rounded-full '>Sign Up</button>
      </div>
      <div className='mr-5 xl:hidden lg:absolute relative'>
        <img src={menu} alt="" />
      </div>
    </div>
    </div>
    
  )
}

export default Navbar

import React from 'react'
import { NavLink } from "react-router-dom";
import Router from '../../router/router'


const Banner = () => {

  return (
    <div className='mx-6 p-6 xs:hidden'>
      <div className='relative '>
        <img src="https://orebishopping.reactbd.com/static/media/productOfTheYear.2c30f10b51873bab4630.webp" alt="" className='xs:hidden w-full' />
        <div className='absolute banner_home lg:w-[42%] mbl:hidden top-[10%] xs:right-0 xs:p-6 xs:rounded-lg xs:gap-5 xs:top-0 xs:z-10 lg:top-[7%] right-24 flex flex-col  gap-6 lg:gap-5 md:gap-3 w-[38%] xs:bg-[#cccc] xs:w-full'>
          <h1 className='md:text-lg text-4xl font-bold'>Product of The year</h1>
          <span className='font-normal md:text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat cupiditate modi amet! Facilis, aperiam quaerat.</span>
          <NavLink to={`/${Router.shop}`}
            className='border text-center w-1/3 p-4 lg:p-1 md:p-2 md:text-sm xs:w-full xs:p-3 text-xl bg-black text-white font-bold rounded-md'>
            Shop now
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Banner
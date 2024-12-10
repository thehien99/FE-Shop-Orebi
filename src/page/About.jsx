import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()


  return (
    <div className='mx-6 p-6 flex flex-col gap-4'>
      <h1 className='text-[50px] font-bold'>About</h1>
      <div className='flex gap-1 text-lg '>
        <span className='font-bold'>
          Orebi
          is one of the world's leading ecommerce brands and is internationally recognized for celebrating the
          essence of classic Worldwide cool looking style.
        </span>
      </div>
      <Link to={'/Shop'} className='border-2 rounded-md p-2 xs:text-sm xs:w-full w-[15%] lg:w-1/3 lg:py-3 bg-black text-white font-bold text-center'>
        Continue Shopping
      </Link>
    </div >
  )
}

export default About
import React from 'react'

const Footer = () => {
  const menuFooter = [
    { id: 1, name: 'Accesories' },
    { id: 2, name: 'Clothes' },
    { id: 3, name: 'Electronics' },
    { id: 4, name: 'Home appliances' },
    { id: 5, name: 'New Arrivals' },
  ]
  const footerAccount = [
    { id: 1, name: 'Profile' },
    { id: 2, name: 'Orders' },
    { id: 3, name: 'Addresses' },
    { id: 4, name: 'Account Details' },
    { id: 5, name: 'Payment Options' },
  ]
  return (
    <div className='mx-6 p-6 mt-7'>
      <div className='grid grid-cols-4 xs:grid-cols-1 gap-8 p-6'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-2xl font-bold'>
            More about Orebi Shop
          </h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint ab ullam, numquam nesciunt in.</span>
        </div>
        <div className='flex flex-col gap-6  xs:hidden'>
          <h1 className='text-2xl font-bold'>Shop</h1>
          <ul>
            {menuFooter.map((item) => {
              return (
                <a href="" key={item?.id}>
                  <li className='mt-3'>{item?.name}</li>
                </a>
              )
            })}
          </ul>
        </div>
        <div className='xs:hidden'>
          <h1 className='text-2xl font-bold'>
            Your account
          </h1>
          <ul>
            {footerAccount.map((item) => {
              return (
                <a href="" key={item?.id}>
                  <li className='mt-3'>{item?.name}</li>
                </a>
              )
            })}
          </ul>
        </div>
        <div className='flex flex-col gap-6 xs:hiddenk'>
          <h1 className='text-xl font-bold'>
            Subscribe to our newsletter.
          </h1>
          <span>
            A at pellentesque et mattis porta enim elementum.
          </span>
        </div>
      </div >
      <hr className='w-full border border-[#ccc]' />
      <div className='mt-3 text-center text-slate-600'>Copyright 2022 | Orebi shopping | All Rights Reserved | Build by <a className='text-black' href="">thehien9299@gmail.com</a>      </div>
    </div >
  )
}

export default Footer
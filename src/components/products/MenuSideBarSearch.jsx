import React from 'react'
import { menuSideBar, searchByBrand, searchByPrice } from "../../lib/menuSidebar"
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion';

const MenuSideBarSearch = ({ title, options, icon }) => {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(!show)
  }
  return (
    <motion.div
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 60 }}
    >

      <div className='flex flex-col gap-4'>
        <div onClick={handleShow} className='cursor-pointer font-extrabold text-xl flex items-center justify-between'>
          {title}
          {icon}
        </div>
        {options === 'category' && menuSideBar?.map((item) => {
          return (
            <div key={item.idx} className='flex flex-col gap-5 '>
              <Link to='/' className='border-b-2 text-slate-500 p-2 hover:bg-slate-300'>
                <span>{item?.name}</span>
              </Link>
            </div>
          )
        })}

        {
          !show && (
            options === 'brand' && searchByBrand?.map((item) => {
              return (
                <motion.div
                  initial={{ y: -60 }}
                  animate={{ y: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 60 }}
                  key={item.id}
                >
                  <ul className='flex flex-col gap-5 '>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-black p-2 bg-red-600' : 'border-b-2 text-slate-500 p-2 flex items-center gap-3 hover:bg-blue-100 hover:text-red-500 hover:border-black'}>
                      <li>{item?.name}</li>
                    </NavLink>
                  </ul>
                </motion.div>
              )
            })
          )
        }

        {options === 'price' && searchByPrice?.map((item) => {
          return (
            <div key={item.id} className='flex flex-col gap-5 '>
              <Link to='/' className='border-b-2 text-slate-500 p-2 hover:bg-orange-200'>
                <span>{item?.name}</span>
              </Link>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default MenuSideBarSearch
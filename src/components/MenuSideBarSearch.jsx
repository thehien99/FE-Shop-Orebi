import React from 'react'
import { menuSideBar, searchByBrand, searchByColor, searchByPrice } from "../lib/menuSidebar"
import { Link } from 'react-router-dom'
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
            options === 'color' && searchByColor?.map((item) => {
              return (
                <motion.div
                  initial={{ y: -60 }}
                  animate={{ y: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 60 }}
                  key={item.id}
                >
                  <ul className='flex flex-col gap-5'>
                    <Link to='/' className='border-b-2 text-slate-500 p-2 flex items-center gap-3 hover:bg-blue-300'>
                      <div className={`w-[13px] h-[13px] border rounded-full ${item.color}`}></div>
                      <li>{item?.name}</li>
                    </Link>
                  </ul>
                </motion.div>
              )
            })
          )
        }

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
                    <Link to='/' className='border-b-2 text-slate-500 p-2 flex items-center gap-3 hover:border-b-2 hover:border-black'>
                      <li>{item?.name}</li>
                    </Link>
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
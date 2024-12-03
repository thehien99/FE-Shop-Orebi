import React from 'react'
import { menuSideBar, searchByBrand, searchByPrice } from "../../lib/menuSidebar"
import { Link, NavLink, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';

const MenuSideBarSearch = ({ title, options, icon }) => {
  const [show, setShow] = useState(false)
  const [active, setActive] = useState()
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()
  const handleShow = () => {
    setShow(!show)
  }

  const handleSearch = (name, idx) => {
    setSearchParams({ q: name.toLowerCase() })
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
              <div onClick={() => handleSearch(item?.name, item?.idx)} className={`border-b-2 text-slate-500 p-2 hover:bg-slate-300 cursor-pointer ${active === item?.idx ? 'bg-blue-500 text-white' : ''}`} >
                <span>{item?.name}</span>
              </div>
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
                  key={item.idx}
                >
                  <ul className='flex flex-col gap-5 '>
                    <div onClick={() => handleSearch(item?.name, item?.idx)} className={`border-b-2 text-slate-500 p-2 hover:bg-slate-300 cursor-pointer ${active === item?.idx ? 'bg-blue-500 text-white' : ''}`} >
                      <li>{item?.name}</li>
                    </div>
                  </ul>
                </motion.div>
              )
            })
          )
        }

        {/* {options === 'price' && searchByPrice?.map((item) => {
          return (
            <div key={item.id} className='flex flex-col gap-5 '>
              <div onClick={() => handleSearch(item?.name, item?.idx)} className={`border-b-2 text-slate-500 p-2 hover:bg-slate-300 cursor-pointer ${active === item?.idx ? 'bg-blue-500 text-white' : ''}`} >
                <span>{item?.name}</span>
              </div>
            </div>
          )
        })} */}
      </div>
    </motion.div >
  )
}

export default MenuSideBarSearch
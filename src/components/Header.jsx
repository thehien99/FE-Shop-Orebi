import React, { useState } from 'react'
import { image } from '../asset/img'
import { Link, NavLink, Route, useNavigate } from 'react-router-dom'
import Router from '../router/router'
import { motion } from 'framer-motion';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import icon from '../icons/icons'
const Header = () => {
  const menuHeader = [
    { idx: 1, name: 'Home' },
    { idx: 2, name: 'Shop' },
    { idx: 3, name: 'About' },
    { idx: 4, name: 'Contact' },
    { idx: 5, name: 'Login' },
  ]
  const { IoMenu } = icon
  const navigation = useNavigate()
  const handleHome = () => {
    navigation(Router.home)
  }
  return (
    <div className='mx-6 p-6'>
      <div className='w-full h-full flex justify-between items-center xs:justify-between'>
        <div onClick={handleHome}>
          <img src={image} alt="" />
        </div>
        <div className='text-lg text-slate-500 font-medium '>

          {/* reponsive */}
          <div className='hidden xs:block'>
            <Sheet>
              <SheetTrigger>
                <IoMenu />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  {menuHeader?.map((item) => {
                    return <div key={item}>
                      <NavLink to={item?.name} className={`hover:text-black hover:underline  ${item?.idx === 1 && 'text-black underline'}`} >
                        {item?.name}
                      </NavLink>
                    </div>
                  })}
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          {/* desktop */}
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 50 }} // Thiết lập animation với spring

          >
            <div className='xs:hidden flex justify-center items-center gap-8'>
              {menuHeader?.map((item) => {
                return <NavLink
                  className={({ isActive }) => (isActive ? 'text-black underline' : 'hover:underline hover:text-black')}
                  to={item.name} key={item.idx}  >
                  {item?.name}
                </NavLink>
              })}
            </div>
          </motion.div>
        </div>
      </div >
    </div >
  )
}

export default Header
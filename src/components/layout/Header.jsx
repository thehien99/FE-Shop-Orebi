import React, { useState } from 'react'
import { image } from '../../asset/img'
import { Link, NavLink, Route, useNavigate } from 'react-router-dom'
import Router from '../../router/router'
import { motion } from 'framer-motion';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import icon from '../../icons/icons'
import { useDispatch, useSelector } from 'react-redux';
import { logoutActions } from '../../redux/actions/authActions';
import { axiosClient } from '../../axios/axios';
const Header = () => {
  const menuHeader = [
    { idx: 1, name: 'Home' },
    { idx: 2, name: 'Shop' },
    { idx: 3, name: 'About' },
    { idx: 4, name: 'Contact' },
  ]
  const { IoMenu } = icon
  const navigation = useNavigate()
  const dispatch = useDispatch()
  const isLogin = useSelector(state => state.auth.isLogin)
  const handleHome = () => {
    navigation(Router.home)
  }
  const handleAuth = () => {
    if (isLogin) {
      dispatch(logoutActions())
      delete axiosClient.defaults.headers['Authorization'];
      navigation(Router.home)

    } else (
      navigation(Router.login)
    )
  }
  return (
    <div className='mx-6 p-6'>
      <div className='w-full h-full flex justify-between items-center xs:justify-between'>
        <div onClick={handleHome}>
          <img src={image} alt="" />
        </div>
        <div className='text-lg text-slate-500 font-medium '>

          {/* reponsive */}
          <div className='hidden xs:block mbl:block'>
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
                  <div className='cursor-pointer' onClick={handleAuth}>{isLogin ? 'Logout' : 'Login'}</div>
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
            <div className='xs:hidden mbl:hidden  flex justify-center items-center gap-8'>
              {menuHeader?.map((item) => {
                return <NavLink
                  className={({ isActive }) => (isActive ? 'text-black underline' : 'hover:underline hover:text-black')}
                  to={item.name} key={item.idx}  >
                  {item?.name}
                </NavLink>
              })}
              <div className='cursor-pointer' onClick={handleAuth}>{isLogin ? 'Logout' : 'Login'}</div>
            </div>
            <div>
            </div>
          </motion.div>
        </div>
      </div >
    </div >
  )
}

export default Header
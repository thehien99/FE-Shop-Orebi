import React, { useState } from 'react'
import { image } from '../../asset/img'
import { NavLink, useNavigate } from 'react-router-dom'
import Router from '../../router/router'
import { motion } from 'framer-motion';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import icon from '../../icons/icons'
import { useDispatch, useSelector } from 'react-redux';
import { logoutActions } from '../../redux/actions/authActions';
import Cookies from 'js-cookie'

const Header = () => {
  const menuHeader = [
    { idx: 1, name: 'Home' },
    { idx: 2, name: 'Shop' },
    { idx: 3, name: 'About' },
  ]
  const { IoMenu } = icon
  const navigation = useNavigate()
  const dispatch = useDispatch()
  const isLogin = useSelector(state => state.auth.isLogin)
  const [open, setOpen] = useState(false)
  const handleHome = () => {
    navigation(Router.home)
  }

  const handleAuth = () => {
    if (isLogin) {
      dispatch(logoutActions());
      localStorage.removeItem("token");
      Cookies.remove("refreshToken", { path: "/", domain: "yourdomain.com" });
      navigation(Router.home);
    } else {
      navigation(Router.login);
    }
  };

  const handleCloseMenu = () => {
    setOpen(false)
  }

  return (
    <div className='mx-6 p-6'>
      <div className={`w-full h-full flex justify-between items-center  xs:justify-between`}>
        <div onClick={handleHome} >
          <img src={image} alt="" />
        </div>
        <div className='text-lg text-slate-500 font-medium '>
          {/*icon header reponsive */}
          <div className={`hidden xs:flex mbl:block mbs:block`}>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger>
                <IoMenu className='text-red-500 text-4xl' />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  {menuHeader?.map((item) => {
                    return <div key={item}>
                      <NavLink to={`/${item?.name}`}
                        onClick={handleCloseMenu}
                        className={`hover:text-black hover:underline ${item?.idx === 1 && 'text-black underline'}`} >
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
            <div className=' xs:hidden mbl:hidden mbs:hidden flex justify-center items-center gap-8'>
              {menuHeader?.map((item) => {
                return <NavLink
                  className={({ isActive }) => (isActive ? 'text-black underline' : 'hover:underline hover:text-black')}
                  to={`/${item.name}`} key={item.idx}  >
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
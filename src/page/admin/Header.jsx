import React, { useState } from 'react'
import icon from '../../icons/icons'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/reducers/adminReducer'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import SideBar from './SideBar'
import NotificationNewOrder from './notifyOrderNew/NotificationNewOrder'
import { useNavigate } from 'react-router-dom'
import Router from '../../router/router'
import AdminChat from './chatAdmin/ChatAdmin'
import Cookies from 'js-cookie'

const Header = () => {
  const { FaRegMessage, IoMenu } = icon
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [flag, setFlag] = useState(false)
  const [open, setOpen] = useState(false)
  const nameAdmin = useSelector(state => state.admin.name?.detail?.name)
  const roleAdmin = useSelector(state => state.admin.name?.detail?.role)

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('readIds')
    Cookies.remove('refreshToken')
    dispatch(logout())
    navigate(`/${Router.login_admin}`, { replace: true })
  }

  const handleToggle = () => {
    setFlag(!flag)
  }

  // Hàm đóng sidebar khi chọn mục
  const handleCloseSidebar = () => {
    setOpen(false)
  }

  return (
    <div className='header_admin p-2.5 flex justify-around items-center gap-9 border-b-2 bg-slate-100 shadow-lg '>

      {/* responsive */}
      <div className='hidden md:block'>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <IoMenu className='text-3xl text-center' />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription >
                <SideBar closeSidebar={handleCloseSidebar} />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <NotificationNewOrder />

      <div className='relative'>
        <div className='message cursor-pointer w-fit text-2xl p-2 bg-slate-200 rounded-full border-slate-600 lg:text-xl' onClick={handleToggle}>
          {<FaRegMessage />}
        </div>
        {
          flag &&
          <div className='absolute z-20 top-12 mbl:right-[-130px]'>
            <AdminChat />
          </div>
        }
      </div>

      <div className='name flex flex-col'>
        <span className='text-xl font-bold'>
          {nameAdmin}
        </span>
        <span className='text-xs text-slate-600'>{roleAdmin}</span>
      </div>
      <button onClick={handleLogout} className='mbl:w-[80%] mbl:text-[15px] border p-2 rounded-lg bg-red-500 text-white font-medium hover:bg-slate-400 hover:text-black mbl:text-xs'>Đăng xuất</button>
    </div>
  )
}

export default Header

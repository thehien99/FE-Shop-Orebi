import React from 'react'
import icon from '../../icons/icons'
import { useDispatch } from 'react-redux'
import { logoutActions } from '../../redux/actions/authActions'
import { useNavigate } from 'react-router-dom'
import Router from '../../router/router'
import { logout } from '../../redux/reducers/adminReducer'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import SideBar from './SideBar'

const Header = () => {
  const { LuBellRing, FaRegMessage, IoMenu } = icon
  const dispatch = useDispatch()
  const handleLogout = () => {
    localStorage.removeItem('admin')
    localStorage.removeItem('token')
    dispatch(logout())
  }
  return (
    <div className='header_admin p-2.5 flex justify-around items-center gap-9 border-b-2 bg-slate-100 shadow-lg '>

      {/* responsive */}
      <div className='hidden md:block'>
        <Sheet>
          <SheetTrigger>
            <IoMenu className='text-3xl text-center' />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <SideBar />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className='notification text-2xl p-2 bg-slate-200 rounded-full border-slate-600 lg:text-xl'>{<LuBellRing />}</div>
      <div className='message text-2xl p-2 bg-slate-200 rounded-full border-slate-600 lg:text-xl'>{<FaRegMessage />}</div>
      <div className='name flex flex-col'>
        <span className='text-xl font-bold'>
          hien
        </span>
        <span className='text-xs text-slate-600'>admin</span>
      </div>
      <button onClick={handleLogout} className=' border p-2 rounded-lg bg-red-500 text-white font-medium hover:bg-slate-400 hover:text-black'>Đăng xuất</button>
    </div>
  )
}

export default Header
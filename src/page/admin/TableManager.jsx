import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import Router from '../../router/router'
import SideBar from './SideBar'
import Header from './Header'
import { getAllProductActions } from '../../redux/actions/productActions'


const TableManager = () => {
  const dispatch = useDispatch()
  const isLogin = useSelector(state => state.admin.isLogin)

  useEffect(() => {
    dispatch(getAllProductActions())
  }, [])
  if (!isLogin) {
    return <Navigate to={`/${Router.login_admin}`} replace={true} />
  }
  return (
    <div className='table_mananger w-full h-full flex'>
      <div className='side_bar w-[20%] md:hidden lg:w-1/3 h-screen bg-slate-50 shadow-2xl'>
        <SideBar />
      </div>
      <div className='content w-[80%] lg:w-[90%] md:w-full h-full'>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default TableManager
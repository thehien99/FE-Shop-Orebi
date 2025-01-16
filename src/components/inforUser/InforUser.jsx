import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, NavLink, Outlet, useLocation } from 'react-router-dom'
import Router from '../../router/router'
import Header from '../layout/Header'
import Search from '../home/Search'
import Dropmenu from './component/Dropmenu'
import { getAddressActions } from '../../redux/actions/authActions'

const InforUser = () => {
  const menuInfo = [
    { id: '1', path: 'general_user', name: 'Thông tin chung của bạn' },
    { id: '2', path: 'payment', name: 'Phương thức thanh toán' },
    { id: '3', path: 'historyShip', name: 'Lịch sử giao hàng' },
    { id: '4', path: 'itemOrder', name: 'Các đơn hàng đã đặt' },
    { id: '5', path: 'statusItem', name: 'Trạng thái đơn hàng' }
  ]
  //đăng nhập mới cho dô
  const isLogin = useSelector(state => state.auth?.isLogin)
  if (!isLogin) {
    return <Navigate to={`/${Router.login}`} replace={true} />
  }
  const location = useLocation()
  const pathname = location.pathname.replace("/infor_user/", "")
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAddressActions())
  }, [isLogin])
  return (
    <div className='w-full h-screen'>
      <Header />
      <div className='bg-slate-400'>
        <Search />
      </div>
      <div className='infor_user w-full h-full p-6'>

        <div className='border-2 rounded-xl shadow-2xl'>
          <div className='mbl:flex  mbl:justify-around mbl:items-center mbl:border-b-2'>
            <div className='hidden mbl:block mbl:mt-3'> <Dropmenu menuInfo={menuInfo} /></div>
            {
              menuInfo?.map((item) => {
                return (
                  item.path === pathname
                  &&
                  <div className='text-center text-2xl mbl:text-xl font-bold border-b-2 mbl:border-b-0 p-3'>
                    {item?.name}
                  </div>

                )
              })
            }
          </div>
          <div className='flex w-full'>
            <div className='w-[40%] flex flex-col gap-8 p-8 border-e-2 mbl:hidden'>
              {menuInfo?.map((item) => {
                return <NavLink to={item?.path} key={item.id} className={`border-b-2 p-3 hover:bg-blue-400 ${item.path === pathname && 'bg-slate-300 text-teal-700 font-bold'}`}>
                  {item?.name}
                </NavLink>
              })}
            </div>
            <div className='w-full p-8'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default InforUser
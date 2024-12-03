import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, NavLink, Outlet } from 'react-router-dom'
import Router from '../../router/router'
import Header from '../layout/Header'
import Search from '../home/Search'
import { getAddressActions } from '../../redux/actions/authActions'

const InforUser = () => {
  const menuInfo = [
    { path: 'general_user', name: 'Thông tin chung của bạn' },
    { path: 'payment', name: 'Phương thức thanh toán' },
    { path: 'historyShip', name: 'Lịch sử giao hàng' },
    { path: 'itemOrder', name: 'Các đơn hàng đã đặt' },
    { path: 'statusItem', name: 'Trạng thái đơn hàng' }
  ]
  //đăng nhập mới cho dô
  const isLogin = useSelector(state => state.auth?.isLogin)
  if (!isLogin) {
    return <Navigate to={`/${Router.login}`} replace={true} />
  }
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAddressActions())
  }, [])
  return (
    <div>
      <Header />
      <div className='bg-slate-400'>
        <Search />
      </div>
      <div className='infor_user w-full h-full p-6'>

        <div className='border-2'>
          <div className='text-center text-2xl font-bold border-b-2 p-3'>Thông tin của bạn</div>
          <div className='flex w-full'>
            <div className='w-[40%] flex flex-col gap-8 p-8 border-e-2'>
              {menuInfo?.map((item) => {
                return <NavLink to={item?.path} key={item} className='border-b-2 p-3 hover:bg-blue-400'>
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
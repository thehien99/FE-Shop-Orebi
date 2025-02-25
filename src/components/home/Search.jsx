import React, { memo, useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { NavLink, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import icon from '../../icons/icons'
import Router from '../../router/router'

const Search = () => {
  const { FaShoppingCart, FaUser } = icon
  const isLogin = useSelector(state => state.auth?.isLogin)
  const nameUser = useSelector(state => state.getUser.userInfo?.name)
  const totalCart = useSelector(state => state.cartReducer.cartProduct)
  const [cartLength, setCartLength] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    setCartLength(totalCart.length)
  }, [totalCart])
  const handleInforUser = () => {
    navigate(`/${Router.infoUser}`)
  }

  return (
    <div className={`search mx-6 p-6 xs:ms-1 flex justify-between xs:justify-between mbl:flex-col mbl:gap-4 items-center ${location.pathname === '/order_page' && 'xs:block'}`}>
      <div className={`${isLogin ? 'w-1/2' : 'w-full'} xs:w-full mbl:w-full input_search `}>
        <Input placeholder='Search Product' search='search' />
      </div>
      <div className='cursor-pointer flex justify-center items-center gap-4 xs:absolute xs:top-7 xs:right-[93px] xs:items-center '>
        {isLogin && (
          <>
            <NavLink to={`/${Router.shopping_cart}`} className='relative xs:flex xs:justify-center xs:items-center'>
              <FaShoppingCart className='text-2xl' />
              <span className='absolute top-5 left-3 text-red-500 px-[3px] bg-white font-bold text-[16px]'>{cartLength}</span>
            </NavLink>
            <div className='flex items-center justify-center gap-5'>
              <FaUser className='text-xl' onClick={handleInforUser} />
              <div className='flex gap-2  xs:text-sm xs:hidden'>
                Xin chào,
                <i className='font-bold uppercase font-serif xs:truncate xs:text-center'>
                  {nameUser}
                </i>
              </div>
            </div>
          </>
        )
        }
      </div>
    </div >
  )
}

export default memo(Search)
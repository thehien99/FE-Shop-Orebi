import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
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

  useEffect(() => {
    setCartLength(totalCart.length)
  }, [totalCart])
  console.log(cartLength)
  const handleInforUser = () => {
    navigate(Router.infoUser)
  }

  return (
    <div className='mx-6 p-6 xs:ms-1 flex justify-between xs:justify-between mbl:flex-col mbl:gap-4 items-center'>
      <div className='w-1/2 xs:w-full mbl:w-full'>
        <Input placeholder='Search Product' search='search' />
      </div>
      <div className='cursor-pointer flex justify-center items-center gap-4 xs:hidden'>
        <NavLink to={`${Router.shopping_cart}`} className='relative'>
          <FaShoppingCart className='text-2xl' />
          <span className='absolute top-5 left-3 text-red-500 px-[3px] bg-white font-bold text-[16px]'>{cartLength}</span>
        </NavLink>
        {isLogin
          &&
          <div className='flex items-center justify-center gap-5'>
            <FaUser className='text-xl' onClick={handleInforUser} />
            <div className='flex gap-2'>
              Xin chào,
              <i className='font-bold uppercase font-serif'>
                {nameUser}
              </i>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Search
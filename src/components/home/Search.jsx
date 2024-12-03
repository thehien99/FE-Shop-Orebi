import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import icon from '../../icons/icons'
import Router from '../../router/router'

const Search = () => {
  const { FaShoppingCart, FaUser } = icon
  const isLogin = useSelector(state => state.auth?.isLogin)
  const nameUser = useSelector(state => state.getUser.userInfo?.name)
  const navigate = useNavigate()

  const handleInforUser = () => {
    navigate(Router.infoUser)
  }

  return (
    <div className='mx-6 p-6 xs:ms-1 flex justify-between xs:justify-between mbl:flex-col mbl:gap-4 items-center'>
      <div className='w-1/2 xs:w-full mbl:w-full'>
        <Input placeholder='Search Product' search='search' />
      </div>
      <div className='cursor-pointer flex justify-center items-center gap-4 xs:hidden'>
        <FaShoppingCart className='text-xl' />
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
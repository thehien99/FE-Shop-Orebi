import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import icon from '../../icons/icons'
import { searchProductApi } from '../../api/api'
import { ProductSearchActions } from '../../redux/actions/productActions'
const Search = () => {
  const { FaShoppingCart, FaUser } = icon
  const isLogin = useSelector(state => state.auth?.isLogin)
  const nameUser = useSelector(state => state.getUser.userInfo.name)


  return (
    <div className='mx-6 p-6 xs:ms-1 flex justify-between xs:justify-between items-center'>
      <div className='w-1/2 xs:w-full'>
        <Input placeholder='Search Product' search='search' />
      </div>
      <div className='cursor-pointer flex justify-center items-center gap-4 xs:hidden'>
        <FaShoppingCart className='text-xl' />
        {isLogin
          &&
          <div className='flex items-center justify-center gap-5'>
            <FaUser className='text-xl' />
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
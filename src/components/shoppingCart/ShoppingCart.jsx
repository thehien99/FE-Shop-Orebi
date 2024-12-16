import React, { useEffect, useState } from 'react'
import { TableCart } from './TableCart'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Router from '../../router/router'

const ShoppingCart = () => {
  const cartProduct = useSelector(state => state.cartReducer.cartProduct)
  const [dataProduct, setDataProduct] = useState(cartProduct)
  const isLogin = useSelector(state => state.auth.isLogin)
  if (!isLogin) {
    return <Navigate to={`/${Router.login}`} replace />
  }
  useEffect(() => {
    setDataProduct(cartProduct)
  }, [cartProduct])
  return (
    <div className='cart w-full h-full p-6'>
      <TableCart cartProduct={dataProduct} />
    </div >
  )
}

export default ShoppingCart
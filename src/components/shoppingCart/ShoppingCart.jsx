import React, { useEffect, useState } from 'react'
import { TableCart } from './TableCart'
import { useDispatch, useSelector } from 'react-redux'
const ShoppingCart = () => {
  const cartProduct = useSelector(state => state.cartReducer.cartProduct)
  const [dataProduct, setDataProduct] = useState(cartProduct)
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
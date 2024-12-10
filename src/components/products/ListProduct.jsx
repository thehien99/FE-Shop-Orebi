import React, { useEffect, useState } from 'react'
import ProductDetailShop from './ProductDetailShop'
import { motion } from 'framer-motion';
import icon from '../../icons/icons';
import { NavLink } from 'react-router-dom';
import Router from '../../router/router';
import { useSelector } from 'react-redux';

const ListProduct = ({ allProducts }) => {
  const { FaShoppingCart } = icon
  const [cartLength, setCartLength] = useState(0)
  const totalCart = useSelector(state => state.cartReducer.cartProduct)

  useEffect(() => {
    setCartLength(totalCart.length)
  }, [totalCart])

  return (
    <motion.div
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 60 }}
    >
      {allProducts?.length === 0 && <div className='text-center'>Không có sản phẩm</div>}
      <div className='grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 xs:grid-cols-1 mbl:grid-cols-1 gap-5 xs:gap-16 w-full relative'>
        {(allProducts)?.map((item) => {
          return (
            <div className='w-full h-full' key={item?.id}>
              <ProductDetailShop id={item?.id} img={item?.image} name={item.name} price={item?.price} description={item?.description} />
            </div>
          )
        })}

        <NavLink to={`/${Router.shopping_cart}`} className='hidden z-20 xs:block fixed top-[500px] right-2 p-2 border-2 rounded-full'>
          <FaShoppingCart className='text-xl text-blue-600' />
          <span className='absolute top-6 left-5 font-medium text-white px-1 bg-black text-2'>{cartLength}</span>
        </NavLink>

      </div >
    </motion.div>
  )
}

export default ListProduct
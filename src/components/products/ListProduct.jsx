import React from 'react'
import ProductDetailShop from './ProductDetailShop'
import { motion } from 'framer-motion';

const ListProduct = ({ allProducts }) => {
  return (
    <motion.div
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 60 }}
    >
      <div className='grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 xs:grid-cols-1 mbl:grid-cols-1 gap-5 xs:gap-16 w-full'>
        {(allProducts)?.map((item) => {
          return (
            <div className='w-full h-full' key={item?.id}>
              <ProductDetailShop id={item?.id} img={item.img} name={item.name} price={item?.price} description={item?.description} />
            </div>
          )
        })}
      </div >
    </motion.div>
  )
}

export default ListProduct
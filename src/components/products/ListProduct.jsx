import React from 'react'
import ProductDetailShop from './ProductDetailShop'
import { motion } from 'framer-motion';


const ListProduct = ({ allProducts }) => {
  console.log(allProducts)
  return (
    <motion.div
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 60 }}
    >
      {allProducts?.length === 0 && <div className='text-center'>Không có sản phẩm</div>}
      <div className='grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 xs:grid-cols-1 mbl:grid-cols-1 gap-5 xs:gap-16 w-full relative'>
        {allProducts?.map((item) => {
          return (
            <div className='w-full h-full relative' key={item?.id}>
              {
                item?.totalSock < 0 && (
                  <div className='p-2 border-2 text-center bg-slate-100 absolute z-10 w-full top-1/3 font-bold text-red-500 text-2xl'>Tạm hết hàng</div>
                )
              }
              <ProductDetailShop id={item?.id} img={item?.image} name={item.name} price={item?.price} description={item?.description} totalSock={item?.totalSock} />
            </div>
          )
        })}


      </div >
    </motion.div >
  )
}

export default ListProduct
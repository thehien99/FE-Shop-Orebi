import React from 'react'
import ProductDetailShop from './ProductDetailShop'

const ListProduct = ({ allProducts }) => {
  return (
    <div className='grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 xs:grid-cols-1 gap-5 xs:gap-16 w-full h-full'>
      {allProducts?.map((item) => {
        return (
          <div className='w-full h-full' key={item?.id}>
            <ProductDetailShop img={item.img} name={item.name} />
          </div>
        )
      })}
    </div >
  )
}

export default ListProduct
import React from 'react'
import ProductDetailShop from './ProductDetailShop'

const ListProduct = ({ allProducts }) => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-5'>
      {allProducts?.map((item) => {
        return (
          <div key={item?.id}>
            <ProductDetailShop img={item.img} name={item.name} />
          </div>
        )
      })}
    </div >
  )
}

export default ListProduct
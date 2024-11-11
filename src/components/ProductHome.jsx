import React from 'react'
import Carousels from './Carousel'

const ProductHome = ({ title, options }) => {
  return (
    <div className='mx-6 p-6'>
      <div className='text-4xl font-bold'>{title}</div>
      <div className='mt-5 w-full h-full' >
        <Carousels options={options} />
      </div>
    </div>
  )
}

export default ProductHome
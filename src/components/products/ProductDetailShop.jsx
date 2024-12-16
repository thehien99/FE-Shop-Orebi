import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { formatPrice } from '../../lib/utils';
const ProductDetailShop = ({ img, name, price, description, id, totalSock }) => {
  console.log(totalSock)
  const navigate = useNavigate()
  const uppercaseFrist = description?.charAt(0).toUpperCase() + description.slice(1)

  const handleNextPage = () => {
    navigate(`/detail/${id}`, { state: { total: totalSock } }) // Điều hướng tới router với id
  }
  return (
    <div onClick={handleNextPage} className=' w-full relative rounded-md cursor-pointer'>
      <div className='absolute z-10 w-full h-full opacity-0 hover:opacity-100'>
        <div className='w-full h-[19%] absolute bottom-[36px] bg-[#ffffff]  flex gap-2'>
          {img?.map((item, index) => {
            return (
              <img key={index} src={item} alt="" className='w-[12%] flex object-cover' />
            )
          })}
        </div>
      </div>

      <div className='w-full h-full relative'>
        <div className='border'>
          <img src={img[0]} alt="" className='w-full h-[300px] object-cover' />
        </div>
        <div className='flex flex-col gap-3 py-3'>
          <h2 className={`text-xl w-full font-bold lg:text-sm ${name.length > 13 && 'truncate md:truncate lg:truncate'}`}>{name}</h2>
          <span className='text-slate-500'>{uppercaseFrist}</span>
          <span className='text-black'>Giá: {formatPrice(price)}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailShop
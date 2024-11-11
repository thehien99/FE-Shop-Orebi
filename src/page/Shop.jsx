import React from 'react'
import { useLocation } from "react-router-dom"
import icon from "../icons/icons"
import SideBarShop from '../components/SideBarShop'
import ContentShop from '../components/ContentShop'
const Shop = () => {
  const location = useLocation()
  const { MdNavigateNext } = icon

  return (
    <div className='mx-6 p-6'>
      <div className='title-shop text-[45px] font-extrabold'>Products</div>
      <div className=' flex items-center font-bold'>
        <MdNavigateNext />
        {location.pathname.slice(1)}
      </div>
      <div className='shop flex mt-[50px] gap-11 '>
        <div className='w-[40%] side_bar xs:hidden'>
          <SideBarShop />
        </div>
        <div className='w-full listProduct'>
          <ContentShop />
        </div>
      </div>
    </div>
  )
}

export default Shop
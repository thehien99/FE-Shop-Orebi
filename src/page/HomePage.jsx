import React, { useEffect } from 'react'
import SliderHome from '../components/home/SliderHome'
import ProductHome from '../components/home/ProductHome'
import BannerHome from '../components/home/BannerHome'
import Banner from '../components/home/Banner'
import { useSelector } from 'react-redux'


const HomePage = () => {
  const allProducts = useSelector(state => state.product.product)
  return (
    <div>
      <div className='w-full h-full'>
        <SliderHome />
      </div>
      <div>
        <BannerHome />
      </div>

      {
        allProducts.length > 0 &&
        <div>
          <ProductHome title='New Arrivals' options='1' />
          <ProductHome title='Our BestSeller' options='2' />
        </div>
      }

      <div>
        <Banner />
      </div>

      {allProducts.length > 1 &&
        <div className='xs:mt-44'>
          <ProductHome title='Special Offers' />
        </div>
      }
    </div>
  )
}

export default HomePage
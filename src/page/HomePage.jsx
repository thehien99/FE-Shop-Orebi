import React, { useEffect } from 'react'
import SliderHome from '../components/home/SliderHome'
import ProductHome from '../components/home/ProductHome'
import BannerHome from '../components/home/BannerHome'
import Banner from '../components/home/Banner'
import { useDispatch } from 'react-redux'
import { getAllProductApi } from '../api/api'

const HomePage = () => {

  return (
    <div>
      <div className='w-full h-full'>
        <SliderHome />
      </div>
      <div>
        <BannerHome />
      </div>
       <div>
        <ProductHome title='New Arrivals' options='1' />
        <ProductHome title='Our BestSeller' options='2' />
      </div>
      <div>
        <Banner />
      </div>
      <div className='xs:mt-44'>
        <ProductHome title='Special Offers' />
      </div> 
    </div>
  )
}

export default HomePage
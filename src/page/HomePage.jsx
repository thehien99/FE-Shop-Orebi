import React from 'react'
import Banner from '../components/Banner'
import BannerHome from '../components/BannerHome'
import ProductHome from '../components/ProductHome'
import SliderHome from '../components/SliderHome'

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
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { banner } from '../../asset/img';
import { Link } from 'react-router-dom';
import icon from '../../icons/icons';


const SliderHome = () => {
  const { TbCircleNumber2Filled, FaCarSide, GiReturnArrow } = icon
  const sliderSub = [
    {
      idx: 1,
      name: 'Two years warranty',
      icon: <TbCircleNumber2Filled />
    },
    {
      idx: 2,
      name: 'Free shipping',
      icon: <FaCarSide />
    },
    {
      idx: 3,
      name: 'Return policy in 30 days',
      icon: <GiReturnArrow />
    }
  ]
  return (
    <div className='w-full h-full2'>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {banner?.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Link to={'/'}>
                <img src={item?.img} alt="" />
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className=' py-6 border-b-2 xs:p-6'>
        <ul className='flex justify-around items-center xs:text-[0.6rem] xs:gap-4'>
          {sliderSub.map((item, index) => {
            return (
              <li key={index} className='flex justify-center items-center gap-3 xs:gap-1'>
                <div className='text-2xl'>
                  {item?.icon}
                </div>
                {item?.name}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default SliderHome
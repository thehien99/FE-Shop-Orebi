import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { banner } from '../../asset/img';
import { Link } from 'react-router-dom';
import icon from '../../icons/icons';


const SliderHome = () => {
  const { TbCircleNumber2Filled, FaCarSide, GiReturnArrow } = icon

  return (
    <div className='w-full h-full'>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper !w-full"
      >
        {banner?.map((item, idx) => {
          return (
            <SwiperSlide key={idx}
              className='w-[10px]'
            >
              <img src={item?.img} alt="" className='w-full' />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default SliderHome
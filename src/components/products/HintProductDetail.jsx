import React from 'react'
import Slider from 'react-slick';
import { formatPrice } from '../../lib/utils';
import { useNavigate } from 'react-router-dom';

const HintProductDetail = ({ allProduct }) => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const navigate = useNavigate()
  const handleNextPage = (id) => {
    navigate(`/detail/${id}`)
  }
  return (
    <div className='hint'>
      <div className='text-2xl font-bold p-6'>YOU MIGHT ALSO LIKE</div>

      <div className="slider-container slider_detail">
        <Slider {...settings}>
          {allProduct?.map((item, idx) => {
            return (
              <div onClick={() => handleNextPage(item?.id)} className='cursor-pointer' key={idx}>
                <div className='img'>
                  <img src={item?.image[0]} className='h-[300px] w-[95%] mbl:w-full object-cover rounded-md' alt="" />
                </div>
                <div className='img_price_name mt-3 flex flex-col  '>
                  <span className='text-lg font-bold'>{item?.name}</span>
                  <span className='text-slate-400'>{item?.brand || 'Shop'}</span>
                  <span className='text-lg font-medium mt-3'>{formatPrice(item?.price)}đ</span>
                </div>
              </div>
            )
          })}
        </Slider>
      </div></div>
  )
}

export default HintProductDetail
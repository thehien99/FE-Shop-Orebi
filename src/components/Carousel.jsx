import React from "react";
import Slider from "react-slick";
import icon from "../icons/icons";
import { useSelector } from 'react-redux'
import { formatPrice } from '../lib/utils'
import Router from "../router/router";
import { NavLink, useNavigate } from "react-router-dom";

const Carousels = ({ options }) => {

  const dataImg = useSelector(state => state.product.product)
  const navigate = useNavigate()

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
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
        breakpoint: 768,
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


  const handleNextPage = (item) => {
    navigate(`/detail/${item?.id}`, { state: { total: item?.totalSock } })
  }

  return (
    <div className={`slider-container w-full`}>
      <Slider {...settings} className={`${options != '1' ? 'bestseller' : ''}`}>
        {
          options === '1' ?
            dataImg?.map((item, idx) => {
              return (
                <div onClick={() => handleNextPage(item)} key={idx} className="w-full ps-6 mbl:p-0 cursor-pointer">
                  <div className="relative w-[98%] xs:w-full mbl:w-full h-full ">

                    { /* hình*/}
                    <img src={item?.image[0]} alt="" className="img_carousel w-full h-[348px] object-cover" />
                    <div className="border p-3 bg-[#ffffff] lg:w-full lg:h-full">
                      <div className="flex flex-col gap-2">
                        <div className={`font-bold ${(item?.name)?.length > '10' && 'lg:truncate'} text-xl`}>
                          {item?.name}
                        </div>
                        <div className="text-slate-400">
                          Giá: {formatPrice(item?.price)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
            :
            dataImg?.map((item, idx) => {
              return (
                <div onClick={() => handleNextPage(item)} key={idx} className="w-full ps-6 mbl:p-0 cursor-pointer">
                  <div className="relative w-[98%] xs:w-full mbl:w-full h-full ">

                    { /* hình*/}
                    <img src={item?.image[0]} alt="" className="img_carousel w-full h-[348px] object-cover" />
                    <div className="border p-3 bg-[#ffffff] lg:w-full lg:h-full">
                      <div className="flex flex-col gap-2">
                        <div className={`font-bold ${(item?.name)?.length > '10' && 'lg:truncate'} text-xl`}>
                          {item?.name}
                        </div>
                        <div className="text-slate-400">
                          Giá: {formatPrice(item?.price)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
        }
      </Slider >
    </div >
  );
}

export default Carousels;
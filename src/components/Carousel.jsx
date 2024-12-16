import React from "react";
import Slider from "react-slick";
import icon from "../icons/icons";
import { useSelector } from 'react-redux'
import { formatPrice } from '../lib/utils'
import Router from "../router/router";
import { NavLink, useNavigate } from "react-router-dom";

const Carousels = ({ options }) => {
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


  const dataImg = useSelector(state => state.product.product)
  const navigate = useNavigate()

  const handleNextPage = (item) => {
    console.log(item)
    navigate(`/detail/${item?.id}`, { state: { total: item?.totalSock } })
  }

  return (
    <div className={`slider-container w-full`}>
      <Slider {...settings} className={`${options != '1' ? 'bestseller' : ''}`}>
        {
          options === '1' ?
            dataImg?.map((item, idx) => {
              return (
                <div onClick={() => handleNextPage(item)} key={idx} className="w-full ps-6 cursor-pointer">
                  <div className="relative w-[98%] xs:w-full mbl:w-full h-full">

                    {/* <div className="absolute w-full h-full opacity-0 hover:opacity-100 group  hover:translate-y-[182px] lg:hover:translate-y-[132px] md:hover:translate-y-[80px] mbl:hover:translate-y-[168px] xs:hover:translate-y-0 cursor-pointer  duration-700">
                      <div className="absolute top-0 right-0 w-full">
                        <div className=" w-full bg-[#ffffff]">
                          {sub?.map((items, index) => {
                            return (
                              <NavLink to={`/detail/${item?.id}`} key={index} className="p-2 border-b-2 flex justify-end items-center gap-3 text-slate-500 w-full hover:text-black hover:border-black">
                                {items?.name}
                                <div className={item?.id === 4 ? ' hover:text-red-700' : ''}>
                                  {items.icon}
                                </div>
                              </NavLink>
                            )
                          })}
                        </div>
                      </div>
                    </div> */}

                    { /* hình*/}
                    <img src={item?.image[0]} alt="" className="w-full h-[348px]  object-cover" />
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
            dataImg?.map((item, index) => {
              return (
                <div onClick={() => handleNextPage(item)} key={index} className="w-full ps-6 cursor-pointer">
                  <div className="relative w-[98%] xs:w-full mbl:w-full h-full">

                    {/* <div className="absolute w-full h-full  opacity-0 hover:opacity-100 group  hover:translate-y-[182px] lg:hover:translate-y-[132px]  md:hover:translate-y-[102px] mbl:hover:translate-y-[168px] xs:hover:translate-y-0 cursor-pointer  duration-700">
                        <div className="absolute top-0 right-0 w-full">
                          <div className="border w-full bg-[#ffffff]">
                            {sub?.map((item, index) => {
                              return (
                                <div key={index} className="p-2 border-b-2 flex justify-end items-center gap-3 text-slate-500 w-full hover:text-black hover:border-black">
                                  {item?.name}
                                  <div className={item?.id === 4 ? ' hover:text-red-700' : ''}>
                                    {item.icon}
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div> */}

                    <img src={item?.image[0]} alt="" className="w-full h-[348px] object-cover" />                      <div className="border p-6 bg-[#ffffff]">
                      <div className="flex flex-col gap-2">
                        <div className={`font-bold ${(item?.name)?.length > '15' && 'lg:truncate'} text-xl`}>
                          {item?.name}
                        </div>
                        <div className="text-slate-400">
                          Giá {formatPrice(item?.price)}
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

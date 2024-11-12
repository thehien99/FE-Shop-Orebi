import React from "react";
import Slider from "react-slick";
import { carouselImg } from "../asset/img";
import { bestSellerImg } from "../asset/img";
import { offers } from "../asset/img";
import icon from "../icons/icons";

const Carousels = ({ options }) => {
  const { GiReturnArrow, FaShoppingCart, MdOutlineMore, FaRegHeart } = icon
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

  const sub = [
    { id: 1, name: 'Compare', icon: <GiReturnArrow /> },
    { id: 2, name: 'Add to Cart', icon: <FaShoppingCart /> },
    { id: 3, name: 'View Details', icon: <MdOutlineMore /> },
    { id: 4, name: 'Add to like list', icon: <FaRegHeart /> },
  ]

  return (
    <div className={`slider-container w-full`}>
      <Slider {...settings} className={`${options != '1' ? 'bestseller' : ''}`}>
        {
          options === '1' ?
            carouselImg?.map((item, idx) => {
              return (
                <div key={idx} className="w-full">
                  <div className="relative w-[98%] xs:w-full h-full">
                    <div className="absolute w-full h-full  opacity-0 hover:opacity-100 group  hover:translate-y-[182px] lg:hover:translate-y-[132px] md:hover:translate-y-[127px] xs:hover:translate-y-[167px] cursor-pointer  duration-700">
                      <div className="absolute top-0 right-0 w-full">
                        <div className=" w-full bg-[#ffffff]">
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
                    </div>

                    { /* hình*/}
                    <img key={idx} src={item?.img} alt="" className="w-full" />
                    <div className="border p-3 bg-[#ffffff] lg:w-full lg:h-full">
                      <div className="flex justify-between items-center">
                        <div className={`font-bold ${(item?.name)?.length > '10' && 'lg:truncate'}`}>
                          {item?.name}
                        </div>
                        <div className="text-slate-400">
                          $60
                        </div>
                      </div>
                      <div className="mt-2 text-slate-400">color:black</div>
                    </div>
                  </div>
                </div>
              )
            })
            :
            (options != 2 ? offers : bestSellerImg)?.map((item, index) => {
              return (
                <div className="w-full">
                  <div className=" relative" key={index}>
                    <div className="relative w-[98%] xs:w-full h-full">
                      <div className="absolute w-full h-full  opacity-0 hover:opacity-100 group  hover:translate-y-[170px] lg:hover:translate-y-[132px] md:hover:translate-y-[152px] xs:hover:translate-y-[168px] cursor-pointer  duration-700">
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
                      </div>

                      <img key={index} src={item?.img} alt="" />
                      <div className="border p-6 bg-[#ffffff]">
                        <div className="flex justify-between items-center">
                          <div className={`font-bold ${(item?.name)?.length > '15' && 'lg:truncate'}`}>
                            {item?.name}
                          </div>
                          <div className="text-slate-400">
                            $70
                          </div>
                        </div>
                        <div className="mt-2 text-slate-400">color:black</div>
                      </div>
                    </div>
                  </div>
                </div>

              )
            })
        }
      </Slider>
    </div >
  );
}

export default Carousels;

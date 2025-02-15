import React from "react";
import Slider from "react-slick";
import icon from "../icons/icons";
import { useSelector } from 'react-redux'
import { formatPrice } from '../lib/utils'
import Router from "../router/router";
import { NavLink, useNavigate } from "react-router-dom";

const Carousels = ({ options }) => {

  const dataImg = useSelector(state => state.product.product)
  console.log(dataImg)
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
    console.log(item)
    navigate(`/detail/${item?.id}`, { state: { total: item?.totalSock } })
  }

  return (
    <div className={`slider-container w-full`}>
      {

      }
    </div >
  );
}

export default Carousels;

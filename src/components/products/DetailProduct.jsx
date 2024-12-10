import React, { useEffect, useState } from 'react'
import ButtonDetail from './ButtonDetail'
import BannerOfDetail from './BannerOfDetail'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { getOneProductApi } from '../../api/api'
import { formatPrice } from '../../lib/utils'
import HintProductDetail from './HintProductDetail'
import { useDispatch, useSelector } from 'react-redux'
import { addProductSuccess, updateProductQuantity } from '../../redux/reducers/cartReducer'
import Swal from 'sweetalert2'
import Router from '../../router/router'
import icon from '../../icons/icons'

const DetailProduct = () => {
  const { FaShoppingCart } = icon
  const [quanti, setQuantity] = useState(1)
  const { id } = useParams()
  const [data, setData] = useState()
  const [activeImg, setActiveImg] = useState(0)
  const allProduct = useSelector((state) => state.product.product)
  const isLogin = useSelector(state => state.auth.isLogin)
  const dispatch = useDispatch()
  const navigate = useNavigate();


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    const fecth = async () => {
      const res = await getOneProductApi(id)
      setData(res.payload)
    }
    fecth()
  }, [id])

  const handleMouseEnter = (idx) => {
    setActiveImg(idx)
  }

  const handleMouseLeave = () => {
    setActiveImg(0)
  }

  const handleDown = () => {
    setQuantity(quanti <= 1 ? 1 : quanti - 1)
  }
  const handelUp = () => {
    setQuantity(quanti >= 1 ? quanti + 1 : 1)
  }

  const handleAddProduct = (product) => {
    if (isLogin) {
      // Kiểm tra nếu sản phẩm đã có trong giỏ hàng
      const existingProduct = cartProduct.find((item) => item?.id === product?.id);

      if (existingProduct) {
        // Nếu sản phẩm đã có, cập nhật số lượng và giá
        const updatedProduct = {
          ...existingProduct,
          quanti: existingProduct.quanti + quanti, // Cộng thêm số lượng
          priceProduct: (existingProduct.quanti + quanti) * product.price
        };

        dispatch(updateProductQuantity(updatedProduct)); // Cập nhật lại sản phẩm trong giỏ hàng
      } else {
        // Nếu sản phẩm chưa có trong giỏ hàng, thêm sản phẩm mới
        const priceProduct = product.price * quanti
        dispatch(addProductSuccess({ ...product, quanti, priceProduct }));
      }
    } else {
      Swal.fire({
        title: "Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng",
        showClass: {
          popup: `animate__animated animate__fadeInUp animate__faster`
        },
        hideClass: {
          popup: `animate__animated animate__fadeOutDown animate__faster`
        }
      }).then((result) => {
        if (result.isConfirmed) {
          // Navigate to the desired route
          navigate('/login'); // Replace with the route you want
        }
      });
    }
  }



  return (
    <div className='product_detail w-full h-full p-6'>
      <div className='grid grid-cols-2 mbl:grid-cols-1 gap-8 h-full'>

        <div className='detail_img h-full w-full'>
          <div className=' flex flex-row justify-end mbl:flex-col-reverse gap-3'>
            <div className='w-[9%] mbl:w-[15%] flex flex-col mbl:flex-row gap-3'>
              {data?.productImg?.image?.map((item, idx) => {
                return (
                  <img key={idx} className={`rounded-md ${activeImg === idx ? 'hover:bg-slate-400' : ''}`} src={item} alt=""
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={handleMouseLeave}
                  />
                )
              })}
            </div>
            {data?.productImg?.image[activeImg]?.map((item, idx) => {
              return (
                <img key={idx} className='rounded-md w-[70%] mbl:w-full h-[550px] object-cover' src={item} alt="" />
              )
            })}
          </div>
        </div>

        <div className='detail_more flex flex-col gap-10 w-[60%] mbl:w-full'>
          <div className='name_item price_item flex flex-col gap-3'>
            <div className='name_item flex flex-col'>
              <span className='text-xl font-bold'>{data?.name}</span>
              <span className='text-slate-400'>{data?.brand ? data?.brand : 'Shop'}</span>
            </div>
            <div className='price_item text-lg font-bold'>
              {formatPrice(data?.price)}đ
            </div>
          </div>

          <div className='detail_size mt-5 flex flex-col gap-5'>
            <div className='text-lg font-medium'>Select size</div>
            <span className='text-slate-500'>
              Fits large; we recommend ordering half a size down
            </span>
            <ul className='grid grid-cols-4 gap-3'>
              <li className='p-2 border text-center text-xl rounded-lg cursor-pointer hover:bg-slate-400 '>
                {data?.size}
              </li>
            </ul>
            <div className='relative'>
              <span>Số lượng</span>
              <div className='flex gap-4 justify-center items-center border-2 w-fit'>
                <button onClick={handleDown} className='border-e-2 p-1'>-</button>
                {quanti}
                <button onClick={handelUp} className='border-s-2 p-1'>+</button>
              </div>
            </div>
          </div>

          <div className='btn_add flex flex-col gap-3'>
            <ButtonDetail name='Add to Bag' options='bag' data={{ ...data, quanti }} onAddProduct={handleAddProduct} />
            <ButtonDetail name='Favourite' />
          </div>

          <div className='description flex flex-col'>
            <span className='text-xl font-medium'>Mô tả:</span>
            {data?.description}
          </div>
        </div>

      </div>

      <div className='banner_detail p-6 mt-4'>
        <BannerOfDetail img={data?.productImg?.image} name={data?.name} />
      </div>

      <div className='product_hint'>
        <HintProductDetail allProduct={allProduct} />
      </div>
    </div>
  )
}

export default DetailProduct
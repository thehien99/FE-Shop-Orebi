import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { formatPrice } from '../../lib/utils'
import { useDispatch, useSelector } from 'react-redux'
import icon from '../../icons/icons'
import Router from '../../router/router'
import Swal from 'sweetalert2'
import { removeProduct } from '../../redux/reducers/cartReducer'
import { orderProductApi } from '../../api/api'

const OrderPage = () => {
  const { FaPencilAlt } = icon
  const location = useLocation()
  const { selectedRows } = location.state
  const [total, setTotal] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userId = useSelector((state) => state.getUser.userInfo.id)
  const addressId = useSelector((state) => state.getUser.getAddress.id)
  const addressShip = useSelector((state) => state.getUser.getAddress.address)

  useEffect(() => {
    const totalProduct = selectedRows.reduce((sum, product) => {
      const price = parseFloat(product.priceProduct)
      return sum + price
    }, 0)
    setTotal(totalProduct)
    if (!totalProduct) {
      setTotal(0)
    }
  }, [selectedRows])

  //Xóa các giá trị bằng null trước khi request lên server
  const clearValueNull = selectedRows.map((item) => {
    const newItem = { ...item }
    Object.keys(newItem).forEach((key) => {
      if (newItem[key] === null) {
        delete newItem[key]
      }
    })
    return newItem
  })


  const handleOrder = async () => {
    const order = await orderProductApi({ clearValueNull, userId: userId, shippingAddressId: addressId })
    if (order.msg === 'Create success') {
      Swal.fire({
        title: "Đặt đơn hàng thành công",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      }).then((result) => {
        if (result.isConfirmed) {
          // Navigate to the desired route
          navigate(`/${Router.infoUser}/${Router.itemOrder}`); // Replace with the route you want
        }
      });
      selectedRows?.map((item) => {
        return dispatch(removeProduct(item.id))
      })
    }
  }
  return (
    <div className='oder_page w-full h-full  '>
      <div className='text-center p-6 text-2xl font-bold text-red-500'>Xác nhận đơn hàng đặt</div>
      <div className=' w-1/2 h-full border-2 rounded-xl translate-x-1/2 shadow-2xl mbl:w-fit mbl:translate-x-[14%] xs:w-fit xs:translate-x-[3%]'>
        {selectedRows?.map((item, idx) => {
          return (
            <div key={idx} className='border-b-2 p-5 flex gap-6 justify-around items-center'>
              <div>
                <img src={item.productImg?.image} className='w-[80px]' alt="" />
              </div>
              <div className='flex flex-col gap-1'>
                <span className='font-bold'>{item?.name}</span>
                <span className='text-sm'>{item?.size[0] ? item?.size[0] : 'không có size'}</span>
                <span className='text-lg'>
                  <span className='text-sm pe-2'>Số lượng: </span>
                  x{item?.quanti}
                </span>
              </div>
              <div>
                <span className='font-bold'>{formatPrice(item?.priceProduct)}vnd</span>
              </div>
            </div>
          )
        })}
        <div className='total_product flex flex-col gap-3 p-3'>
          <span>Tổng tiền:
            <span className='px-2 text-yellow-600'>
              {formatPrice(total)}
            </span>
            vnd
          </span>
          <span>Phí ship:
            <i className='text-sm ms-2 font-bold'>Shop sẽ lh báo bạn về phí ship</i>
          </span>
          <span>Voucher:
            <i className='text-sm font-bold ms-2'>Chưa có chương trình </i>
          </span>
          <span>Thành tiền:
            <span className='px-2 text-red-600'>
              {formatPrice(total)}
            </span>
            vnd
          </span>
          <span className='flex justify-start items-center xs:items-baseline gap-2'>
            Địa chỉ giao hàng:
            <span className='text-blue-600 xs:w-1/2 overflow-hidden break-words'>
              {addressShip}
            </span>
            <NavLink to={`/${Router.infoUser}/${Router.general_user}`} >
              <FaPencilAlt className='text-xs' />
            </NavLink>
          </span>
          <span>Phương thức thanh toán:
            <span className='font-bold ms-2 text-cyan-700'>
              COD
            </span>
          </span>
          <button onClick={handleOrder} className='p-2 border-2 bg-blue-700 text-white rounded-lg active:bg-red-700'>Đặt hàng</button>
        </div>
      </div>
    </div>
  )
}

export default OrderPage
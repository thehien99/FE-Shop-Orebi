import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatPrice } from '../../lib/utils'
import { getAllOrderActions } from '../../redux/actions/orderActions'
const ItemOrderUser = () => {
  const listOrder = useSelector(state => state.getOrder.order)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllOrderActions())
  }, [dispatch])
  return (
    <div className='list-order w-full h-[500px]  overflow-y-scroll '>

      {listOrder.map((item, idx) => {
        return (
          <div className='border-b-2 p-3 mbl:w-full flex gap-3 list-order-sub justify-around mbl:flex-col' key={idx}>
            <img src={item?.image} className='w-[50px] object-contain mbl:h-1/2 mbl:w-1/3' alt="hinhf" />

            <div className='flex flex-col mbl:flex-row mbl:justify-start mbl:items-center mbl:gap-6'>
              <span className='font-bold mbl:text-xl'>{item?.orderItem?.name}</span>
              <span className='text-slate-500'>x{item?.orderItem?.quantity}</span>
              <span className='text-xs text-slate-400 mbl:text-lg '>{formatPrice(item?.orderItem?.price)}</span>
            </div>

            <div className='w-[200px] order_address mbl:w-full'>
              <span className='text-sm flex flex-col font-medium'>
                Địa chỉ giao hàng:
                <i className='font-bold overflow-hidden break-words text-cyan-600'>{item?.address} đường số 3 khu phố 1 phường tam bình thủ đức hồ chí minh</i>
              </span>
            </div>

            <div className='flex flex-col gap-2'>
              <span className=' text-sm font-medium '>
                Tổng tiền:
                <i className='font-bold ms-2 text-indigo-500'>
                  {formatPrice(item?.totalPrice)}
                </i>
              </span>
              <span className=' text-sm font-medium'>
                Phí ship:
                <i className='font-bold ms-2'>
                  {formatPrice(item?.shippingPrice) == 0 && 'Shop sẽ liên hệ bạn'}
                </i>
              </span>
              <span className=' text-sm font-medium'>
                Phương thức thanh toán:
                <i className={`font-bold ms-2 ${item?.paymentMethod ? 'text-teal-500' : 'text-orange-600'}`}>
                  {item?.paymentMethod ? item?.paymentMethod : 'Ship COD'}
                </i>
              </span>
            </div>

            <div className='order_status flex flex-col'>
              <span className='text-sm cursor-pointer flex flex-col text-center gap-1'>
                <span className='font-bold'>Trạng thái:</span>
                <span className={`font-bold text-center xl:text-[12px] ${item?.isPaid ? 'text-blue-500' : 'text-red-600'}`}>{item?.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán'}</span>
                <span className={`status_acpect font-bold text-center ${item?.isDelivered ? 'text-white p-1 rounded-xl bg-blue-500 ' : 'text-white bg-red-500 p-1 rounded-xl'}`}>{item?.isDelivered ? 'Đã xác nhận' : 'Chưa xác nhận'}</span>
              </span>
            </div>

          </div>
        )
      })}

    </div >
  )
}

export default ItemOrderUser
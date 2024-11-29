import React, { useEffect, useState } from 'react'
import SelectColor from '../SelectColor';
import Swal from 'sweetalert2'
import InputAdmin from '../InputAdmin';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const FormProduct = ({ valid, payload, setPayload }) => {
  const dataOneProduct = useSelector(state => state.product.productOne)
  console.log(dataOneProduct)
  const location = useLocation()
  const [size, setSize] = useState(location.state === 'Đăng sản phẩm' ? payload?.size : dataOneProduct?.size)
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const handleSetSize = (e) => {
    setSize(e.target.value)
  }
  useEffect(() => {
    setPayload((prev) => ({
      ...prev,
      size: size
    }))
  }, [size])

  return (
    <form className='flex flex-col gap-5'>
      <label htmlFor="">
        Tên sản phẩm
        <InputAdmin payload={payload.name} setPayload={setPayload} keyPayload='name' dataOneProduct={dataOneProduct?.name} />
        {valid &&
          <i className='text-red-400'>{valid.name} </i>
        }
      </label>

      <div className=' flex items-center gap-4 justify-between'>
        <div className='flex flex-col gap-2'>
          <div>Giá
            {valid &&
              <i className='text-red-400 ms-2 text-xs'>{valid.price}</i>
            }
          </div>
          <div className='w-full'>
            <InputAdmin payload={payload.price} setPayload={setPayload} keyPayload='price' dataOneProduct={dataOneProduct?.price} />
          </div>
        </div>
        <div className=' flex flex-col gap-3'>
          <div>Số lượng
            {valid &&
              <i className='text-red-400 ms-2 text-xs'>{valid.quantity}</i>
            }
          </div>
          <div className=''>
            <InputAdmin payload={payload?.quantity} setPayload={setPayload} keyPayload='quantity' dataOneProduct={dataOneProduct?.quantity} />
          </div>
        </div>

        <div className=' flex flex-col gap-3'>
          <div>Tồn kho</div>
          <div className=''>
            <InputAdmin payload={payload?.totalSock} setPayload={setPayload} keyPayload='totalSock' dataOneProduct={dataOneProduct?.totalSock} />
          </div>
        </div>

      </div>

      <div className='flex flex-col gap-3'>
        <label htmlFor="size">Chọn Kích Cỡ:</label>
        <select
          multiple={false}
          value={size}
          id="size"
          className="size-select rounded-lg border p-3 w-full cursor-pointer "
          onChange={handleSetSize}
        >
          <option value="" disabled >Chọn kích cỡ</option>
          {sizes.map((size, index) => (
            <option key={index} value={size} >
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className='flex flex-col gap-2'>
        <div>Màu sản phẩm</div>
        <SelectColor payload={payload.color} setPayload={setPayload} keyPayload='color' />
      </div>

      <div className='description flex flex-col gap-2 '>
        <span >Chi tiết sản phẩm
          {
            valid &&
            <i className='ms-2 text-red-500'>{valid.description}</i>
          }
        </span>
        <textarea name="" value={location?.state === 'Đăng sản phẩm' ? payload?.description : dataOneProduct?.description} onChange={(e) => setPayload((prev) => (
          {
            ...prev,
            description: e.target.value
          }
        ))} id="" className='border rounded-lg p-2 resize-none' />

      </div>


    </form >
  )
}

export default FormProduct
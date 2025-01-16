import React, { useEffect, useState } from 'react'
import FormProduct from './FormProduct'
import AddImage from './AddImage'
import { axiosClient } from '../../../axios/axios'
import Swal from 'sweetalert2'
import { validateProduct } from '../../../validate/validate'
import { useDispatch } from 'react-redux'
import { getAllProductActions } from '../../../redux/actions/productActions'
const AddProduct = () => {
  const [payload, setPayload] = useState({
    name: '',
    description: '',
    price: '',
    color: '',
    size: '',
    quantity: '',
    imageId: '',
    totalSock: '' || 0
  })
  const [valid, setValid] = useState([])
  const dispatch = useDispatch()
  const handleAdd = () => {
    new Promise(async (resolve, reject) => {
      try {
        const val = validateProduct(payload, setValid)
        if (val) {
          const res = await axiosClient({
            method: 'post',
            url: 'addProduct',
            data: payload
          })
          if (res.code === 200) {
            dispatch(getAllProductActions())
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Tạo sản phẩm thành công",
              showConfirmButton: false,
              timer: 1500
            });
            setPayload({
              name: '',
              description: '',
              price: '',
              color: '',
              size: '',
              quantity: '',
              imageId: '',
              totalSock: ''
            })
            resolve(res)
          }
        }
      } catch (error) {
        reject(error)
      }
    })
  }
  return (
    <div className='p-8 lg:p-[4px] lg:px-6 w-full h-full bg-slate-200'>
      <div className='text-2xl font-bold'>
        Thêm sản phẩm
      </div>
      <div className='grid grid-cols-2 xs:grid-cols-1 py-6 lg:py-3 gap-6'>
        <div className='border rounded-lg bg-[#ffff] shadow-xl p-6 lg:p-5'>
          <FormProduct payload={payload} setPayload={setPayload} valid={valid} />
        </div>
        <div className='border rounded-lg bg-[#ffff] shadow-lg p-6 lg:p-5'>
          <AddImage payload={payload} setPayload={setPayload} />
          <div className='flex justify-center'>
            <button type="button" className="mt-10 border bg-blue-400 font-bold text-white hover:bg-slate-300 hover:text-red-400  p-3 rounded-xl" onClick={handleAdd}>Đăng sản phẩm</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
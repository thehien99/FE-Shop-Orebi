import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EditInfoUser } from './EditInfoUser'
import { createAddress, getAddress, updateUser } from '../../api/api'
import { getAddressActions, getUserActions } from '../../redux/actions/authActions'
import Swal from 'sweetalert2'
import { getAddressSuccess, getUserSuccess } from '../../redux/reducers/getUserReducer'
import { Outlet } from 'react-router-dom'

const GeneralUser = () => {
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.getUser?.userInfo)
  const addressInfo = useSelector(state => state.getUser?.getAddress)
  const [payload, setPayload] = useState({
    name: userInfo?.name || '',
    phone: addressInfo?.phone ? addressInfo?.phone : '',
    address: addressInfo?.address ? addressInfo?.address : ''
  })


  const handleCreate = async (e) => {
    const res = await createAddress({
      userId: userInfo.id,
      phone: e.phone,
      address: e.address,
    })

    if (res) {
      dispatch(getAddressActions())
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Tạo thành công",
        showConfirmButton: false,
        timer: 1500
      });
      dispatch(getUserActions())
    }

  }
  const handleUpdate = async (e) => {
    const res = await updateUser({
      name: e.name,
      phone: e.phone,
      address: e.address
    })
    if (res) {
      dispatch(getAddressActions())
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Cập nhật thành công",
        showConfirmButton: false,
        timer: 1500
      });
      dispatch(getUserActions())
    }
  }

  return (
    <div className='general_user'>
      <div className='flex flex-col gap-6 text-2xl'>
        <div className='flex gap-4 border-b-2 p-2 items-center'>Họ tên:
          <span className='text-lg text-[#FF0000]'>{payload?.name ? payload.name : 'không có'}</span>
        </div>
        <div className='flex gap-4 border-b-2 p-2 items-center'>
          SĐT:
          <span className='text-lg text-[#00ff00]'>{payload?.phone ? payload.phone : 'không có'}</span>
        </div>
        <div className='flex gap-4 border-b-2 p-2 items-center mbl:flex-col mbl:items-start'>
          Địa chỉ giao hàng:
          <span className='text-lg text-[#0000ff]'>{payload?.address ? payload.address : 'không có'}đường số 3 khu phố 1 phường tam bình thủ đức hồ chí minh</span>
        </div>
        <div>
        </div>
      </div>
      <div className='float-end'>
        <EditInfoUser payload={payload} setPayload={setPayload} onCreate={handleCreate} onUpdate={handleUpdate} />
      </div>
    </div>
  )
}

export default GeneralUser
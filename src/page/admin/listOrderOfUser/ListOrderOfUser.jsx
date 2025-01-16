import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrderAdminActions } from '../../../redux/actions/orderActions'
import TableOrder from './TableOrder'

const ListOrderOfUser = () => {
  const listOrderOfUser = useSelector(state => state.getOrder.listOrderOfUser)

  return (
    <div className='list_user_order'>
      <div className='text-center text-2xl p-4 font-bold border-b-2'> Danh sách các đơn hàng </div>
      <TableOrder  />
    </div>
  )
}

export default ListOrderOfUser
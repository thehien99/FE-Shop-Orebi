import React, { useEffect, useState } from 'react'
import icon from '../../icons/icons'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/actions/cartActions'

const ButtonDetail = ({ name, options, data, onAddProduct }) => {
  const { FaRegHeart } = icon

  return (
    <button onClick={() => onAddProduct(data)} className={`border p-3 text-xl font-bold rounded-2xl ${options ? 'bg-black text-white hover:bg-slate-500' : 'hover:border-black flex justify-center items-center gap-4'}  `}>
      {name}
      {!options && <FaRegHeart />}
    </button>
  )
}

export default ButtonDetail
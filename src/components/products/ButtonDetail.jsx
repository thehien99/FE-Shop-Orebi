import React from 'react'
import icon from '../../icons/icons'

const ButtonDetail = ({ name, options }) => {
  const { FaRegHeart } = icon
  return (
    <button className={`border p-3 text-xl font-bold rounded-2xl ${options ? 'bg-black text-white hover:bg-slate-500' : 'hover:border-black flex justify-center items-center gap-4'}  `}>
      {name}
      {!options && <FaRegHeart />}
    </button>
  )
}

export default ButtonDetail
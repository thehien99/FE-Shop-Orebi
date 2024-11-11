import React, { useState } from 'react'
import icon from '../icons/icons'
import SelectShop from "./SelectShop"

const ShopSort = () => {
  const { HiViewGrid, MdViewList } = icon
  const [active, setActive] = useState(false)
  const sort = [
    'Best Sellers',
    'Featured',
    'Final Offer'
  ]
  const handleActive = () => {
    setActive(!active)
  }
  return (
    <div className='flex justify-between items-center xs:flex-col xs:gap-4' >
      <div onClick={handleActive} className='cursor-pointer flex gap-3 items-center'>
        <HiViewGrid className={`text-3xl ${!active ? 'bg-black text-white' : 'bg-white border text-slate-400'}`} />
        <MdViewList className={`text-3xl ${active ? 'bg-black text-white' : 'bg-white border text-slate-400'}`} />
      </div>
      <div className='flex items-center gap-4'>
        <SelectShop title='Sort by:' sort={sort} />
      </div>

    </div>
  )
}

export default ShopSort
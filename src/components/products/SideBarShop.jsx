import React from 'react'
import MenuSideBarSearch from './MenuSideBarSearch'
import icon from '../../icons/icons'

const SideBarShop = () => {
  const { FaAngleDown } = icon
  return (
    <div className='side_bar'>
      <div>
        <MenuSideBarSearch title='Shop by Category' options='category' />
      </div>
      <div className='mt-10'>
        <MenuSideBarSearch title='Shop by Brand' options='brand' icon={<FaAngleDown />} />
      </div>
      {/* <div className='mt-10'>
        <MenuSideBarSearch title='Shop by Price' options='price' />
      </div> */}
    </div>
  )
}

export default SideBarShop
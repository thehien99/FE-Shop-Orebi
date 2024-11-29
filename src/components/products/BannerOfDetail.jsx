import React from 'react'

const BannerOfDetail = ({ img, name }) => {
  console.log(img)
  return (
    <div className='text-center p-5 w-full h-full'>
      <span className='text-2xl font-medium'>Explore the {name}</span>
      <div className='p-6 flex justify-center'>
        <img src={img ? img[0] : img} alt="" className=' object-scale-down' />
      </div>
      <div className='text-2xl flex-col p-6 gap-6 font-medium flex justify-center items-center'>
        <div className='w-1/2 mbl:w-full'>
          The stitched overlays on the upper add heritage style, durability and support.
          {
            img &&
            <img src={img[1]} alt="" className='w-full object-scale-down' />
          }
        </div>

      </div>
    </div >
  )
}

export default BannerOfDetail
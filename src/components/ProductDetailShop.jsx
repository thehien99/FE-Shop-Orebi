import React from 'react'
import icon from '../icons/icons'

const ProductDetailShop = ({ img, name }) => {
  const { GiReturnArrow, FaShoppingCart, MdOutlineMore, FaRegHeart } = icon

  const sub = [
    { id: 1, name: 'Compare', icon: <GiReturnArrow /> },
    { id: 2, name: 'Add to Cart', icon: <FaShoppingCart /> },
    { id: 3, name: 'View Details', icon: <MdOutlineMore /> },
    { id: 4, name: 'Add to like list', icon: <FaRegHeart /> },
  ]
  return (
    // <div className='w-full border rounded-sm h-full'>
    //   <div className='w-full h-full'>
    //     <div className="absolute w-full h-full lg:w-full md:w-full xs:w-full md:h-[50%] opacity-1 hover:opacity-100 group hover:translate-y-4 lg:hover:translate-y-7 md:hover:translate-y-[155px] xs:hover:translate-y-[213px] cursor-pointer transition-all duration-700">
    //       <div className="absolute bottom-0 right-0 w-full">
    //         <div className="border pt-3 w-full bg-[#ffffff]">
    //           {sub?.map((item, index) => {
    //             return (
    //               <div key={index} className="p-2 border-b-2 flex justify-end items-center gap-3 text-slate-500 w-full hover:text-black hover:border-black">
    //                 {item?.name}
    //                 <div className={item?.id === 4 ? ' hover:text-red-700' : ''}>
    //                   {item.icon}
    //                 </div>
    //               </div>
    //             )
    //           })}
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div>
    //     <img src={img} alt="" />
    //   </div>
    //   <div className='flex flex-col p-4 gap-1 w-full'>
    //     <div className='flex justify-between items-center w-full md:flex-col md:items-start md:gap-3'>
    //       <h2 className={`text-2xl w-full font-bold lg:text-sm ${name.length > 13 && 'md:truncate lg:truncate'}`}>{name}</h2>
    //       <span className='text-slate-500'>3500</span>
    //     </div>
    //     <div className='text-slate-500'>
    //       màu xanh
    //     </div>
    //   </div>
    // </div >

    <div className='border w-full h-full relative rounded-md'>
      <div className='absolute z-10 w-full h-full opacity-0 hover:opacity-100 hover:translate-y-[-96px]  cursor-pointer duration-700'>
        <div className='w-full absolute bottom-0 bg-[#ffffff] border'>
          {sub?.map((item, index) => {
            return (
              <div key={index} className="p-2 border-b-2 flex justify-end items-center gap-3 text-slate-500 w-full hover:text-black hover:border-black">
                {item?.name}
                <div className={item?.id === 4 ? ' hover:text-red-700' : ''}>
                  {item.icon}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='w-full h-full'>
        <div>
          <img src={img} alt="" className='w-full h-full object-cover' />
        </div>
        <div className='w-full p-3 flex flex-col gap-7'>
          <div className='flex justify-between items-center'>
            <h2 className={`text-xl w-full font-bold lg:text-sm ${name.length > 13 && 'md:truncate lg:truncate'}`}>{name}</h2>
            <span className='text-slate-500'>3500</span>
          </div>
          <div className='text-slate-500'>
            màu xanh
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductDetailShop
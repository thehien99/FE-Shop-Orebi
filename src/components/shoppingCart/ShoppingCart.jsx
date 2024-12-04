import React from 'react'

const ShoppingCart = () => {
  return (
    <div className='cart w-full h-full p-6'>
      <div className=' border-2 h-[500px] overflow-y-scroll'>
        <div className='text-center text-3xl font-sans text-yellow-500 p-6 font-bold border-b-2'>Giỏ hàng của bạn</div>
        <div className='more_item py-6'>
          <table className='w-full'>
            <thead className='p-4'>
              <tr>
                <th>Tên sản phẩm</th>
                <th>Giá sản phẩm</th>
                <th>Số lượng</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody className='text-center' >
              <tr className='border-b-2 mt-3'>
                <td className='mt-3'>nike</td>
                <td>12000</td>
                <td>12</td>
                <td>L</td>
              </tr>
              <tr className='border-b-2'>
                <td>nike</td>
                <td>12000</td>
                <td>12</td>
                <td>L</td>
              </tr>
              <tr className='border-b-2'>
                <td>nike</td>
                <td>12000</td>
                <td>12</td>
                <td>L</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div >
  )
}

export default ShoppingCart
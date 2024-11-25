
const ProductItem = () => {
  const img = 'https://raw.githubusercontent.com/noorjsdivs/orebishopping/refs/heads/master/src/assets/images/products/bestSeller/bestSellerOne.webp'
  return (
    <div className='p-8 my-6 w-full h-full'>
      <div className='bg-[#cccc] w-full h-full p-9 grid grid-cols-2 gap-4'>
        <div className='w-full h-full flex justify-center items-center'>
          <img src={img} alt="" className='w full h-full rounded-xl' />
        </div>
        <div className='flex flex-col gap-5'>
          <span className='text-4xl font-bold'>Bag of boys</span>
          <span>35000</span>
          <span className='sub text-slate-500 font-sans text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.
          </span>
          <div className='color flex gap-5'>
            <div className='border w-[30px] h-[30px] bg-black'></div>
            <div className='border w-[30px] h-[30px] bg-blue-600'></div>
            <div className='border w-[30px] h-[30px] bg-green-400'></div>
            <div className='border w-[30px] h-[30px] bg-red-700'></div>
          </div>
          <button className='border p-3 bg-black text-white font-bold text-xl rounded-lg hover:bg-slate-500'>ADD TO CART</button>
        </div>
      </div>
    </div>
  )
}




export default ProductItem
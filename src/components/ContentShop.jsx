import React, { useEffect, useState } from 'react'
import ShopSort from './ShopSort'
import ListProduct from './ListProduct'
import Paginations from './Pagination'
const ContentShop = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  const img = 'https://raw.githubusercontent.com/noorjsdivs/orebishopping/refs/heads/master/src/assets/images/products/specialOffer/spfThree.webp'
  const allProducts = [
    { id: 1, img: img, name: 'Áo thun X' },
    { id: 2, img: img, name: 'Quần jean Y' },
    { id: 3, img: img, name: 'Áo khoác Z' },
    { id: 4, img: img, name: 'Giày thể thao Aaaaaaa' },
    { id: 5, img: img, name: 'Mũ thể thao B' },
    { id: 6, img: img, name: 'Đồng hồ C' },
    { id: 7, img: img, name: 'Áo sơ mi D' },
    { id: 8, img: img, name: 'Quần short E' },
    { id: 9, img: img, name: 'Giày da F' },
    { id: 10, img: img, name: 'Balo G' },
    { id: 11, img: img, name: 'Ví tiền H' },
    { id: 12, img: img, name: 'Mắt kính I' },
    { id: 13, img: img, name: 'Áo thun J' },
    { id: 14, img: img, name: 'Áo khoác K' },
    { id: 15, img: img, name: 'Quần short L' },
    // ... Thêm nhiều sản phẩm
  ];
  const [data, setData] = useState([])
  return (
    <div className='productShop flex flex-col gap-10'>
      <ShopSort />
      <ListProduct allProducts={data} />
      <div className='pagination'>
        <Paginations allProducts={allProducts} setData={setData} />
      </div>
    </div>
  )
}

export default ContentShop
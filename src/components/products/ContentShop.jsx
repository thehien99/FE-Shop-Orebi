import React, { useEffect, useState } from 'react'
import Paginations from '../layout/Pagination'
import ShopSort from './ListProduct'
import ListProduct from './ListProduct'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { searchProductApi } from '../../api/api'
import CircleLoader from 'react-spinners/PuffLoader'

const ContentShop = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])


  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const allProduct = useSelector(state => state.product.product)

  const [allProducts, setProducts] = useState(allProduct)
  const [params] = useSearchParams()
  const param = params.get('search')

  useEffect(() => {
    if (param) {
      const fetch = async () => {
        setLoading(true)
        const res = await searchProductApi(param)
        if (res) {
          setProducts(res.productImg)
          setLoading(false)
        }
      }
      fetch()
    }
  }, [param, allProduct])
  return (

    <div className='productShop flex flex-col gap-10 w-full h-full'>
      {loading &&
        <CircleLoader
          color="#d411ff"
          size={70}
        />
      }
      <ShopSort />
      <ListProduct allProducts={data} />
      <div className='pagination'>
        <Paginations allProducts={allProducts} setData={setData} />
      </div>
    </div>

  )
}

export default ContentShop
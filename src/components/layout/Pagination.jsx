import React, { useEffect, useState } from 'react'

const Paginations = ({ allProducts, setData }) => {
  const productPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const [activePage, setActivePage] = useState(currentPage)
  const totalPage = Math.ceil(allProducts.length / productPerPage)
  const idxOfLastProduct = currentPage * productPerPage
  const idxFristProduct = idxOfLastProduct - productPerPage


  //trang cụ thể
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber)
    setActivePage(pageNumber)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  useEffect(() => {
    const currentProduct = allProducts.slice(idxFristProduct, idxOfLastProduct)
    setData(currentProduct)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [currentPage, allProducts])

  return (
    <div className='flex justify-center items-center gap-5'>

      {[...Array(totalPage).keys()].map((number) => (
        <button key={number + 1}
          onClick={() => goToPage(number + 1)}
          className={`border-2 px-4 py-2 rounded-md font-bold ${activePage === number + 1 ? 'border-2 bg-slate-600' : ''}`}
        >
          {number + 1}
        </button>
      ))
      }

    </div >


  )
}

export default Paginations
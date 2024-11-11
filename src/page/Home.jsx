import React, { useEffect } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
      <div className='border-b-2'>
        <Header />
      </div>
      <div className='bg-slate-200'>
        <Search />
      </div>
      <Outlet />
      <div className='bg-slate-200'>
        <Footer />
      </div>
    </div>
  )
}

export default Home
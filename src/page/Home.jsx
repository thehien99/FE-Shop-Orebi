import React, { useEffect } from 'react'
import Footer from '../components/layout/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/layout/Header'
import Search from '../components/home/Search'
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../redux/reducers/authReducer'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  const checkToken = localStorage.getItem('token')
  useEffect(() => {
    if (checkToken) {
      dispatch(loginSuccess({
        accessToken: checkToken,
      }))
    }
  }, [checkToken])

  const location = useLocation()
  return (
    <motion.div
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 60 }}
    >
      <div className='container '>
        <div className='border-b-2'>
          <Header />
        </div>
        <div className='bg-slate-200'>
          {location.pathname !== '/login' && < Search />}
        </div>
        <Outlet />
        <div className='bg-slate-200'>
          {location.pathname !== '/login' && <Footer />}
        </div>
      </div>
    </motion.div>
  )
}

export default Home
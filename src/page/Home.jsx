import React, { useEffect, useState } from 'react'
import Footer from '../components/layout/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/layout/Header'
import Search from '../components/home/Search'
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess } from '../redux/reducers/authReducer'
import Chat from '../components/chat/Chat'
import { getUserActions } from '../redux/actions/authActions'

const Home = () => {
  const dispatch = useDispatch()
  const isLogin = useSelector((state) => state.auth.isLogin);
  const [scrollPosition, setScrollPosition] = useState(0)
  const location = useLocation()

  useEffect(() => {
    if (isLogin) {
      dispatch(getUserActions())
    }
  }, [isLogin])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  //auto đăng nhập
  const checkToken = localStorage.getItem('token')
  useEffect(() => {
    if (checkToken) {
      dispatch(loginSuccess({
        accessToken: checkToken,
      }))
    }
  }, [checkToken])



  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const currentScroll = window.scrollY
    setScrollPosition(currentScroll)
  }

  return (
    <motion.div
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 60 }}
    >
      <div className='relative'>
        <div className={` ${scrollPosition >= 100 ? 'fixed z-20 w-full top-0 bg-white' : ''}`}>
          <div className='border-b-2'>
            <Header />
          </div>

          <div className='bg-slate-300' >
            {location.pathname !== '/login' && < Search />}
          </div>
        </div>
        <div className='fixed bottom-6 z-30 right-6'>
          <Chat />
        </div>
        <Outlet />
        <div className='bg-slate-200'>
          {location.pathname !== '/login' && <Footer />}
        </div>
      </div>
    </motion.div >
  )
}

export default Home
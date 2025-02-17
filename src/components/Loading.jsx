import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PuffLoader from 'react-spinners/PuffLoader'
import Cookies from 'js-cookie'
import { logoutSuccess } from '../redux/reducers/authReducer'

const Loading = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const refreshToken = Cookies.get('rftk')
    if (!refreshToken) {
      dispatch(logoutSuccess())
    }
  }, [dispatch])
  return (
    <div className='absolute xs:left-[35%] top-[300px] left-[46%]'>
      <PuffLoader
        color="#004b44"
        size={117}
      />
    </div>)
}

export default Loading
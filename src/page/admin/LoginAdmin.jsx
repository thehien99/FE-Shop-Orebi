import React, { useEffect } from 'react'
import FormLogin from '../../components/formLogin/FormLogin'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../redux/reducers/adminReducer'

const LoginAdmin = () => {
  const dispatch = useDispatch()
  const checkToken = localStorage.getItem('token')
  useEffect(() => {
    if (checkToken) {
      dispatch(loginSuccess({
        accessToken: checkToken
      }))
    }
  }, [checkToken])
  return (
    <FormLogin options={'Admin Panel'} />
  )
}

export default LoginAdmin
import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Link, Route, useLocation, useNavigate } from 'react-router-dom'
import Router from '../../router/router'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions, registerActions } from '../../redux/actions/authActions'
import { validate } from '../../validate/validate'
import { loginAdminActions } from '../../redux/actions/adminActions'
import InputLogin from './InputLogin'
const FormLogin = ({ options }) => {

  const [payload, setPayload] = useState({
    name: '',
    emailOrPhone: '',
    password: '',
    role: ''
  })
  const [flag, setFlag] = useState(false)
  const [valid, setValid] = useState([])
  const [selectedOption, setSelectedOption] = useState('user');

  const msg = useSelector(state => (state.auth.payload))
  const msgAdmin = useSelector(state => state.admin.msg)
  const isLoginAdmin = useSelector(state => state.admin.isLogin)
  const isLogin = useSelector(state => state.auth.isLogin)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSignup = () => {
    setFlag(!flag)
  }

  useEffect(() => {
    isLogin && navigate(Router.home)
  }, [isLogin])

  useEffect(() => {
    options && isLoginAdmin && navigate(`${Router.table}`)
  }, [isLoginAdmin])

  const handleSubmit = (e) => {
    e.preventDefault()
    const val = validate(payload, setValid)
    if (val) {
      if (options) {
        dispatch(loginAdminActions(payload))
      }
      if (flag) {
        !options && dispatch(registerActions(payload, payload.role = selectedOption))
      } else {
        !options && dispatch(loginActions(payload))
      }
    }
  }

  const handleChange = (e) => {
    setSelectedOption(e.target.value); // Cập nhật state với giá trị đã chọn
  };
  return (
    <Card className="mx-auto max-w-sm  translate-y-[25%] md:translate-x-1/2 md:translate-y-[15%] xs:translate-x-0 xs:translate-y-20">
      <CardHeader className="space-y-1">
        {options ? (<div>
          <CardTitle className="text-2xl font-bold text-red-400">
            {options}
          </CardTitle>
        </div>
        )
          : (
            <div>
              <CardTitle className="text-2xl font-bold">
                {flag ? 'Signup' : 'Login'}
              </CardTitle>
              <CardDescription>Enter your email and password to login to your account</CardDescription>
            </div>
          )
        }
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {flag && <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <InputLogin id="name" type="text" placeholder="Name for u" payload={payload.name} setPayload={setPayload} keyPayload='name' required />
            {valid && <i className='text-sm text-red-500'>{valid.name}</i>}

          </div>
          }
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <InputLogin id="email" type="email" placeholder="Email" payload={payload.emailOrPhone} setPayload={setPayload} keyPayload='emailOrPhone' required />
            {valid && <i className='text-sm text-red-500'>{valid.emailOrPhone}</i>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <InputLogin id="password" type="password" placeholder="password" payload={payload.password} setPayload={setPayload} keyPayload='password' required />
            {valid && <i className='text-sm text-red-500'>{valid.password}</i>}
          </div>
          {
            flag &&
            <div className='check_user_admin flex items-center gap-7'>
              <label>
                <input
                  type="radio"
                  name="choice"
                  value="user"
                  checked={selectedOption === 'user'}  // Kiểm tra nếu option1 được chọn
                  onChange={handleChange}  // Cập nhật giá trị khi thay đổi
                />
                User
              </label>
              <label>
                <input
                  type="radio"
                  name="choice"
                  value="admin"
                  checked={selectedOption === 'admin'}  // Kiểm tra nếu option2 được chọn
                  onChange={handleChange}  // Cập nhật giá trị khi thay đổi
                />
                Amdin
              </label>
            </div>
          }

          {msg && <i className='text-sm text-red-500'>{msg}</i>}
          {msgAdmin && <i className='text-sm text-red-500'>{msgAdmin}</i>}

          <Button onClick={handleSubmit} type="submit" className="w-full">
            {flag ? 'Sign Up' : 'Login'}
          </Button>
          {!options &&
            <div onClick={handleSignup} className="text-blue-800 mt-4 cursor-pointer">
              {flag ? 'Đã có tài khoản' : 'Đăng ký'}
            </div>
          }
        </div>
      </CardContent>
    </Card >)
}

export default FormLogin
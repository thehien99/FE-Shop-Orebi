import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Router from '../router/router'
import { axiosClient } from '../axios/axios'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions, registerActions } from '../redux/actions/authActions'
import validate from '../validate/validate'
const FormLogin = () => {
  const [payload, setPayload] = useState({
    name: '',
    emailOrPhone: '',
    password: ''
  })
  const [flag, setFlag] = useState(false)
  const [valid, setValid] = useState([])
  const msg = useSelector(state => state.auth?.payload.msg)
  const isLogin = useSelector(state => state.auth.isLogin)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSignup = () => {
    setFlag(!flag)
  }
  useEffect(() => {
    isLogin && navigate(Router.home)
  }, [isLogin])

  const handleSubmit = (e) => {
    e.preventDefault()
    const val = validate(payload, setValid)
    if (val) {
      if (flag) {
        dispatch(registerActions(payload))
      } else {
        dispatch(loginActions(payload))
      }
    }
  }



  return (
    <Card className="mx-auto max-w-sm  translate-y-[25%] md:translate-x-1/2 md:translate-y-[15%] xs:translate-x-0 xs:translate-y-20">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">
          {flag ? 'Signup' : 'Login'}
        </CardTitle>
        <CardDescription>Enter your email and password to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {flag && <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input onChange={(e) => setPayload((prev) => ({ ...prev, name: e.target.value }))} value={payload.name} id="name" type="text" placeholder="Name for u" required />
            {valid && <i className='text-sm text-red-500'>{valid.name}</i>}

          </div>
          }
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required onChange={(e) => setPayload((prev) => ({ ...prev, emailOrPhone: e.target.value }))} value={payload.emailOrPhone} />
            {valid && <i className='text-sm text-red-500'>{valid.emailOrPhone}</i>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="password" required onChange={(e) => setPayload((prev) => ({ ...prev, password: e.target.value }))} value={payload.password} />
            {valid && <i className='text-sm text-red-500'>{valid.password}</i>}
          </div>
          {msg && <i className='text-sm text-red-500'>{msg}</i>}
          <Button onClick={handleSubmit} type="submit" className="w-full">
            {flag ? 'Sign Up' : 'Login'}
          </Button>
          <div onClick={handleSignup} className="text-blue-800 mt-4">
            {flag ? 'Đã có tài khoản' : 'Đăng ký'}
          </div>
        </div>
      </CardContent>
    </Card>)
}

export default FormLogin
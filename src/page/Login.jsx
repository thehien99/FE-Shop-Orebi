
import { image } from "../asset/img"
import icon from "../icons/icons"
import { Link, Route, useLocation, useNavigate } from "react-router-dom"
import Router from '../router/router'
import { useEffect } from "react"
import FormLogin from "../components/FormLogin"
const Login = () => {
  const loginLeft = [
    {
      id: 1,
      sub: 'Get started fast with OREBI',
      sub1: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Ab omnis nisi dolor recusandae consectetur!'
    },
    {
      id: 2,
      sub: 'Access all OREBI services',
      sub1: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae consectetur!'
    },
    {
      id: 3,
      sub: 'Trusted by online Shoppers',
      sub1: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae consectetur!'
    },
  ]
  const { TiTick } = icon
  const navigate = useNavigate()
  const handleHome = () => {
    navigate(Router.home)
  }
  return (
    <div className="w-full h-screen xs:h-full login flex text-white">

      <div className="w-[30%] lg:w-1/2 md:hidden p-12 flex flex-col gap-12 bg-[rgb(38,38,38)]">
        <div className="flex flex-col gap-5">
          <Link to={Router.home}>
            <img src={image} alt="" className="w-[30%] bg-white " />
          </Link>
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-bold">
              Stay sign in for more
            </div>
            <div className="text-xl">
              When you sign in, you are with us!
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {loginLeft?.map((item, index) => {
            return (
              <div key={index} className="flex justify-center  gap-2">
                <div className="mt-1">
                  <TiTick className="text-xl bg-green-600 rounded-full" />
                </div>
                <div>
                  <div className="font-bold text-xl">{item?.sub}</div>
                  <div>{item?.sub1}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="w-[70%] lg:w-1/2 xs:w-full">
        <div className="hidden xs:flex xs:justify-center xs:items-center xs:translate-y-[190%]" onClick={handleHome}>
          <img src={image} alt="" className="w-1/3" />
        </div>
        <FormLogin />
      </div>
    </div>
  )
}
export default Login 
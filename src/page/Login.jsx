
import icon from "../icons/icons"
import { Link, useNavigate } from "react-router-dom"
import FormLogin from "../components/formLogin/FormLogin"
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

  return (
    <div className="w-full h-full xs:h-full mds:w-full login flex text-white">

      <div className="w-fit h-[655px] lg:w-fit md:hidden p-10 flex flex-col gap-12 bg-[rgb(38,38,38)]">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-bold">
              Stay sign in for more
            </div>
            <div className="text-xl">
              When you sign in, you are with us!
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 ">
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

      <div className="w-full lg:w-full md:w-fit mds:w-full xs:w-full">

        <FormLogin />
      </div>
    </div>
  )
}
export default Login 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import icon from "../../../icons/icons"
import { NavLink, useLocation } from "react-router-dom"

const Dropmenu = ({ menuInfo }) => {
  const { IoMenu } = icon
  const location = useLocation()
  const pathname = location.pathname.replace("/infor_user/", "")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <IoMenu className="text-3xl text-red-500" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {menuInfo?.map((item) => {
          return (
            <NavLink to={item?.path} key={item.id} className={`hover:bg-blue-400 ${item.path === pathname && 'bg-slate-600 text-teal-700 font-bold'}`}>
              <DropdownMenuItem>{item?.name}</DropdownMenuItem>
            </NavLink>

          )
        })}
      </DropdownMenuContent>
    </DropdownMenu >
  )
}

export default Dropmenu
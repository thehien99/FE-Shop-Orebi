import { NavLink } from "react-router-dom"
import icon from "../../icons/icons"


const SideBar = () => {
  const { GiClothes, MdPostAdd, FaShoppingBasket, FaUser } = icon
  const menuSidebar = [
    { id: 1, path: '/he-thong/all_product', icon: <GiClothes />, name: 'Tất cả sản phẩm' },
    { id: 2, path: '/he-thong/post_pd', icon: <MdPostAdd />, name: 'Đăng sản phẩm' },
    { id: 4, path: '/he-thong/order', icon: <FaShoppingBasket />, name: 'Đơn hàng được đặt' },
    { id: 5, path: '/he-thong/all_user', icon: <FaUser />, name: 'Tất cả người dùng' },
  ]

  return (
    <div className="sidebar p-6 xs:p-2">
      <div className="name text-center border-b-2 p-2"> Xin Chào</div>
      <div className="list_siderbar mt-10">
        <div className="px-4 xs:w-full lg:flex lg:justify-center lg:items-center">
          <ul className="flex flex-col gap-10 text-lg font-normal xs:text-[16px]">
            {menuSidebar.map((item) => {
              return (
                <NavLink to={item?.path} key={item.id} state={item.name} className={({ isActive }) => isActive ? 'text-yellow-500 flex items-center gap-3 xs:w-full' : 'flex items-center gap-3 xs:w-full '}>
                  <div> {item.icon}</div>
                  <div className="font-sans">{item.name}</div>
                </NavLink>
              )
            })}
          </ul>
        </div >
      </div >
    </div >
  )
}
export default SideBar
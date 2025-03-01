import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState, Suspense } from "react";
import { getAddressActions, getUserActions } from "./redux/actions/authActions";
import { getAllProductActions } from "./redux/actions/productActions";
import { getAllOrderActions } from './redux/actions/orderActions';
import { getAllProductApi } from "./api/api";
import Loading from "./components/Loading";
import Router from "./router/router";

// Lazy load các trang
const Home = React.lazy(() => import("./page/Home"));
const Shop = React.lazy(() => import("./page/Shop"));
const HomePage = React.lazy(() => import("./page/HomePage"));
const About = React.lazy(() => import("./page/About"));
const ProductItem = React.lazy(() => import("./components/products/ProductItem"));
const Login = React.lazy(() => import("./page/Login"));
const DetailProduct = React.lazy(() => import("./components/products/DetailProduct"));
const InforUser = React.lazy(() => import("./components/inforUser/InforUser"));
const GeneralUser = React.lazy(() => import("./components/inforUser/GeneralUser"));
const PaymentUser = React.lazy(() => import("./components/inforUser/PaymentUser"));
const HistoryShipUser = React.lazy(() => import("./components/inforUser/HistoryShipUser"));
const ItemOrderUser = React.lazy(() => import("./components/inforUser/ItemOrderUser"));
const ShoppingCart = React.lazy(() => import("./components/shoppingCart/ShoppingCart"));
const OrderPage = React.lazy(() => import("./page/orderPage/OrderPage"));
const TableManager = React.lazy(() => import("./page/admin/TableManager"));
const LoginAdmin = React.lazy(() => import("./page/admin/LoginAdmin"));
const AddProduct = React.lazy(() => import("./page/admin/addProduct/AddProduct"));
const Allproduct = React.lazy(() => import("./page/admin/allProduct/Allproduct"));
const UpdateProduct = React.lazy(() => import("./page/admin/updateProduct/UpdateProduct"));
const ListOrderOfUser = React.lazy(() => import("./page/admin/listOrderOfUser/ListOrderOfUser"));
const AllUser = React.lazy(() => import("./page/admin/allUser/AllUser"));

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const [loading, setLoading] = useState(true); // Mặc định là `true`

  
  // Lấy thông tin người dùng nếu đã login
  useEffect(() => {
    if (isLogin) {
      dispatch(getAddressActions());
      dispatch(getAllOrderActions());
    }
  }, [isLogin]);

  // Gọi API sản phẩm
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getAllProductApi(); // Gọi API
        if (res) {
          dispatch(getAllProductActions(res)); // Cập nhật Redux
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Kết thúc loading
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Suspense >
          <Routes>
            <Route path={Router.home} element={<Home />}>
              <Route path="*" element={<HomePage />} />
              <Route path={Router.shop} element={<Shop />} />
              <Route path={Router.about} element={<About />} />
              <Route path={Router.productItem} element={<ProductItem />} />
              <Route path={Router.detail_product} element={<DetailProduct />} />
              <Route path={Router.login} element={<Login />} />
              <Route path={Router.shopping_cart} element={<ShoppingCart />} />
              <Route path={Router.order_page} element={<OrderPage />} />
            </Route>

            {/* user */}
            <Route path={Router.infoUser} element={<InforUser />}>
              <Route index element={<GeneralUser />} />
              <Route path={Router.general_user} element={<GeneralUser />} />
              <Route path={Router.payment} element={<PaymentUser />} />
              <Route path={Router.historyShip} element={<HistoryShipUser />} />
              <Route path={Router.itemOrder} element={<ItemOrderUser />} />
            </Route>

            {/* admin */}
            <Route path={Router.login_admin} element={<LoginAdmin />} />
            <Route path={Router.table} element={<TableManager />}>
              <Route index element={<Allproduct />} />
              <Route path={Router.all_product} element={<Allproduct />} />
              <Route path={Router.post_product} element={<AddProduct />} />
              <Route path={Router.update_product} element={<UpdateProduct />} />
              <Route path={Router.order_product} element={<ListOrderOfUser />} />
              <Route path={Router.all_user} element={<AllUser />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Router from "./router/router";
import Login from "./page/Login";
import Shop from "./page/Shop";
import HomePage from "./page/HomePage";
import About from "./page/About";
import ProductItem from "./components/products/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserActions } from "./redux/actions/authActions";
import TableManager from "./page/admin/TableManager";
import LoginAdmin from "./page/admin/LoginAdmin";
import AddProduct from "./page/admin/addProduct/AddProduct";
import Allproduct from "./page/admin/allProduct/Allproduct";
import UpdateProduct from "./page/admin/updateProduct/UpdateProduct";
import { getAllProductActions } from "./redux/actions/productActions";
import { getAllProductApi } from "./api/api";
import Loading from "./components/Loading";
import { loginSuccess } from "./redux/reducers/authReducer";
import DetailProduct from "./components/products/DetailProduct";
import InforUser from "./components/inforUser/InforUser";
import GeneralUser from "./components/inforUser/GeneralUser";
import PaymentUser from "./components/inforUser/PaymentUser";
import HistoryShipUser from "./components/inforUser/HistoryShipUser";
import ItemOrderUser from "./components/inforUser/ItemOrderUser";
import StatusItemUser from "./components/inforUser/StatusItemUser";

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const isLoginAdmin = useSelector(state => state.admin.isLogin)
  const [loading, setLoading] = useState(true); // Mặc định là `true`

  // Lấy thông tin người dùng nếu đã login
  useEffect(() => {
    if (isLogin) {
      dispatch(getUserActions());
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
        // Hiển thị màn hình Loading khi đang tải dữ liệu
        <Loading />
      ) : (
        // Hiển thị nội dung chính khi dữ liệu đã tải xong
        <Routes>
          <Route path={Router.home} element={<Home />}>
            <Route path="*" element={<HomePage />} />
            <Route path={Router.shop} element={<Shop />} />
            <Route path={Router.about} element={<About />} />
            <Route path={Router.productItem} element={<ProductItem />} />
            <Route path={Router.detail_product} element={<DetailProduct />} />
            <Route path={Router.login} element={<Login />} />
          </Route>

          {/* user */}
          <Route path={Router.infoUser} element={<InforUser />} >
            <Route path={Router.general_user} element={<GeneralUser />} />
            <Route path={Router.payment} element={<PaymentUser />} />
            <Route path={Router.historyShip} element={<HistoryShipUser />} />
            <Route path={Router.itemOrder} element={<ItemOrderUser />} />
            <Route path={Router.statusItem} element={<StatusItemUser />} />

          </Route>


          {/* admin */}
          <Route path={Router.login_admin} element={<LoginAdmin />} />
          <Route path={Router.table} element={<TableManager />}>
            <Route path={Router.all_product} element={<Allproduct />} />
            <Route path={Router.post_product} element={<AddProduct />} />
            <Route path={Router.update_product} element={<UpdateProduct />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;

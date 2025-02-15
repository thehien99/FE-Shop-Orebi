import React, { useEffect } from "react";
import FormLogin from "../../components/formLogin/FormLogin";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/reducers/adminReducer";

const LoginAdmin = () => {
  const dispatch = useDispatch();
  const checkToken = localStorage.getItem("token"); // Kiểm tra token admin trong localStorage

  useEffect(() => {
    if (checkToken) {
      // Nếu có token, dispatch action loginSuccess
      dispatch(loginSuccess({
        accessToken: checkToken
      }));
    }
  }, [checkToken, dispatch]);

  return <FormLogin options={"Admin Panel"} />;
};

export default LoginAdmin;

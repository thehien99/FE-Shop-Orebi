import React, { useEffect } from "react";
import FormLogin from "../../components/formLogin/FormLogin";

const LoginAdmin = () => {
  return (
    <div className="w-1/2">
      <FormLogin options={"Admin Panel"} />
    </div>
  )
};

export default LoginAdmin;

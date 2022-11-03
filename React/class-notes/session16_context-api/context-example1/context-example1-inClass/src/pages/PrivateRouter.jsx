import { Outlet, Navigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";

const PrivateRouter = () => {
  const { user } = useContext(LoginContext);
  return user?.email ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;

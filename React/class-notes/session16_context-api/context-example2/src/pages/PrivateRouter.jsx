import { Outlet, Navigate } from "react-router-dom";
// import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";
import { useLoginContext } from "../context/LoginProvider";

const PrivateRouter = () => {
  const { user } = useLoginContext();
  return user?.email ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;

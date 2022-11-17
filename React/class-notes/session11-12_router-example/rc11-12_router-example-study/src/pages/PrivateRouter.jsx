import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const userAuth = false;
  return <div>{userAuth ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;

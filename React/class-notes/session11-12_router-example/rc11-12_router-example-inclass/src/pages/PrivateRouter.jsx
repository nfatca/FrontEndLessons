import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "./Login";

const PrivateRouter = () => {
  const userAuthenticated = true;
  return <div>{userAuthenticated ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;

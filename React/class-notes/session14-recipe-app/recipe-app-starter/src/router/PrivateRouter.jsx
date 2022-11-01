import React from "react";
import { Navigate, Outlet } from "react-router";

const PrivateRouter = () => {
  return (
    <div>
      user ? <Outlet /> : <Navigate to="/login" />
    </div>
  );
};

export default PrivateRouter;

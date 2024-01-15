import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedLayout = () => {
  const { profile } = useSelector((state) => state.user);

  if (!profile) {
    return <Navigate to={"/sign-in"} />;
  }
  return <Outlet />;
};

export default ProtectedLayout;

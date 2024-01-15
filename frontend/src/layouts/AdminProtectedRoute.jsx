import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const AdminProtectedRoute = () => {
  const { profile } = useSelector((state) => state.user);

  if (profile.role !== "admin") {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};

export default AdminProtectedRoute;

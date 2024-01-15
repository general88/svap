import React from "react";
import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const ProtectedUploadRoute = () => {
  const { profile } = useSelector((state) => state.user);

  if (profile?.role !== "admin" && !profile.radioRoomEmail) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};

export default ProtectedUploadRoute;

import React from "react";
import Navbar from "../components/Navbar";
import { FooterSec } from "../components/FooterSec";
import { Outlet, useLocation } from "react-router";

const MainLayout = () => {
  const location = useLocation();

  console.log(location);
  return (
    <>
      {!location.pathname.startsWith("/admin") && <Navbar />}
      <Outlet />
      <FooterSec />
    </>
  );
};

export default MainLayout;

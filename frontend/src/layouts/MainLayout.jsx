import React from "react";
import Navbar from "../components/Navbar";
import { FooterSec } from "../components/FooterSec";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterSec />
    </>
  );
};

export default MainLayout;

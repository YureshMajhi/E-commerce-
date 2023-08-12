import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import CallToAction from "./CallToAction";

const Layouts = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Layouts;

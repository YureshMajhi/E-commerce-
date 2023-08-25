import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Layouts from "./components/Layouts";
import HomePage from "./pages/HomePage";
import NewIn from "./pages/NewIn";
import BestSellers from "./pages/BestSellers";
import Pricing from "./pages/Pricing";
import ShopAll from "./pages/ShopAll";
import About from "./pages/About";
import Cart from "./pages/Cart";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<HomePage />} />
          <Route path="newIn" element={<NewIn />} />
          <Route path="bestsellers" element={<BestSellers />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="shopAll" element={<ShopAll />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
};

export default MyRoutes;

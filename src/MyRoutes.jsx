import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Layouts from "./components/Layouts";
import HomePage from "./pages/HomePage";
import NewIn from "./pages/NewIn";
import BestSellers from "./pages/BestSellers";
import WeekendStyles from "./pages/WeekendStyles";
import Pricing from "./pages/Pricing";
import ShopAll from "./pages/ShopAll";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<HomePage />} />
          <Route path="newIn" element={<NewIn />} />
          <Route path="bestsellers" element={<BestSellers />} />
          <Route path="weekendStyles" element={<WeekendStyles />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="shopAll" element={<ShopAll />} />
        </Route>
      </Routes>
    </>
  );
};

export default MyRoutes;

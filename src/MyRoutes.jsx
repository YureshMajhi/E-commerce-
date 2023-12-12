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
import SignUp from "./pages/SignUp";
import EmailVerification from "./pages/EmailVerification";
import SignIn from "./pages/SignIn";
import ForgetPassword from "./pages/ForgetPassword";

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
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="forgotpassword" element={<ForgetPassword />} />
          <Route
            path="emailverification/:token"
            element={<EmailVerification />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default MyRoutes;

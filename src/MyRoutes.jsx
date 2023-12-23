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
import ResetPassword from "./pages/ResetPassword";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminCategory from "./components/Admin/AdminCategory";
import AddCategory from "./components/Admin/AddCategory";
import UpdateCategory from "./components/Admin/UpdateCategory";

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
          <Route path="resetpassword/:token" element={<ResetPassword />} />
          <Route
            path="emailverification/:token"
            element={<EmailVerification />}
          />

          {/* admin  */}
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="category" element={<AdminCategory />} />
            <Route path="category/add" element={<AddCategory />} />
            <Route path="category/update/:id" element={<UpdateCategory />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default MyRoutes;

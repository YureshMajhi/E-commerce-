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
import AdminCategory from "./components/Admin/Category/AdminCategory";
import AddCategory from "./components/Admin/Category/AddCategory";
import UpdateCategory from "./components/Admin/Category/UpdateCategory";
import AdminProduct from "./components/Admin/Product/AdminProduct";
import AddProduct from "./components/Admin/Product/AddProduct";

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

            {/* Category */}
            <Route path="category" element={<AdminCategory />} />
            <Route path="category/add" element={<AddCategory />} />
            <Route path="category/update/:id" element={<UpdateCategory />} />

            {/* Product */}
            <Route path="product" element={<AdminProduct />} />
            <Route path="product/add" element={<AddProduct />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default MyRoutes;

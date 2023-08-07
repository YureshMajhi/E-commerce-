import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import "../App.css";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="sticky top-0 z-50 bg-white">
        <div className="flex justify-between max-w-[1400px] mx-auto px-16 py-8 ">
          <div className="flex items-center relative">
            {/* Title */}
            <div className="mr-14">
              <h1 className="font-[Stylish] text-4xl">Yurush</h1>
              <p className="text-[.6rem] text-center font-medium text-gray-700">
                Formerly Alice + Whittles
              </p>
            </div>
            {/* Menu */}
            <ul className="hidden lg:flex font-light text-base text-gray-700">
              <li className="p-4 hover:underline hover:text-black hover:font-normal">
                New In
              </li>
              <li className="p-4 hover:underline hover:text-black hover:font-normal">
                Bestsellers
              </li>
              <li className="p-4 hover:underline hover:text-black hover:font-normal">
                Weekend Boot
              </li>
              <li className="p-4 hover:underline hover:text-black hover:font-normal">
                Pricing
              </li>
              <li className="p-4 hover:underline hover:text-black hover:font-normal">
                Shop All
              </li>
            </ul>
            {/* Hamburger */}
            <div
              className="lg:hidden absolute top-[10px] left-[-40px] text-2xl"
              onClick={handleClick}
            >
              {nav ? <RxHamburgerMenu /> : <RxCross2 />}
            </div>
          </div>
          {/* Actions */}
          <div className="flex items-center text-[1.3rem]">
            <button className="m-3 hover:scale-125">
              <AiOutlineSearch />
            </button>
            <button className="m-3 hover:scale-125">
              <VscAccount />
            </button>
            <button className="m-3 hover:scale-125">
              <AiOutlineShoppingCart />
            </button>
          </div>
        </div>
      </div>
      <Sidebar nav={nav} handleClick={handleClick} />
    </>
  );
};

export default Navbar;

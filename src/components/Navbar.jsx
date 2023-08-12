import React, { useEffect, useState } from "react";

// Icons
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

import "../App.css";
import Sidebar from "./Sidebar";
import Info from "./Info";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  // Set title size
  const [bigFont, setBigFont] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setBigFont(false);
    } else {
      setBigFont(true);
    }
  };

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <>
      <Info />
      <div className="sticky top-0 z-50 bg-white">
        <div className="flex justify-between max-w-[1400px] mx-auto pl-16 pr-4 py-8 ">
          <div className="flex items-center relative">
            {/* Title */}
            <div className="mr-14 text-[#084240]">
              <h1
                className={`font-[Stylish] duration-300 ${
                  bigFont ? "text-5xl" : "text-4xl"
                }`}
              >
                <Link to="/">Yurush</Link>
              </h1>
              <p
                className={` ${
                  bigFont ? "text-[.8rem]" : "text-[.6rem]"
                }  duration-300 text-center font-medium text-gray-700`}
              >
                Formerly Alice + Whittles
              </p>
            </div>

            {/* Menu */}
            <ul className="hidden lg:flex font-light text-sm text-gray-700">
              <li className="p-4 tracking-wide hover:underline hover:text-black hover:font-normal">
                <Link to="/newIn">New In</Link>
              </li>
              <li className="p-4 tracking-wide hover:underline hover:text-black hover:font-normal">
                <Link to="bestsellers">Bestsellers</Link>
              </li>
              <li className="p-4 tracking-wide hover:underline hover:text-black hover:font-normal">
                <Link to="weekendBoot">Weekend Boot</Link>
              </li>
              <li className="p-4 tracking-wide hover:underline hover:text-black hover:font-normal">
                <Link to="pricing">Pricing</Link>
              </li>
              <li className="p-4 tracking-wide hover:underline hover:text-black hover:font-normal">
                <Link to="shopAll">Shop All</Link>
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
      {/* SideBar */}
      <Sidebar nav={nav} handleClick={handleClick} />
    </>
  );
};

export default Navbar;

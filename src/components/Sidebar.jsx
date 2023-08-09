import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ nav, handleClick }) => {
  return (
    <>
      <div
        onClick={handleClick}
        className={
          nav
            ? "hidden"
            : "flex bg-gray-400 opacity-50 absolute right-0 left-0 bottom-0 top-0"
        }
      >
        {/* Mobile Menu */}
      </div>
      <ul
        className={`w-[300px] flex flex-col duration-300 md:w-[400px] absolute top-0 pt-[150px] bottom-0 text-xl bg-white
          ${nav ? "translate-x-[-100%] duration-300" : "translate-x-0"}`}
      >
        <li onClick={handleClick} className="py-4 pl-6 my-1 hover:bg-gray-200">
          <Link to="/newIn">New In</Link>
        </li>
        <li onClick={handleClick} className="py-4 pl-6 my-1 hover:bg-gray-200">
          <Link to="bestsellers">Bestsellers</Link>
        </li>
        <li onClick={handleClick} className="py-4 pl-6 my-1 hover:bg-gray-200">
          <Link to="weekendBoot">Weekend Boot</Link>
        </li>
        <li onClick={handleClick} className="py-4 pl-6 my-1 hover:bg-gray-200">
          <Link to="pricing">Pricing</Link>
        </li>
        <li onClick={handleClick} className="py-4 pl-6 my-1 hover:bg-gray-200">
          <Link to="shopAll">Shop All</Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;

import React from "react";

const Sidebar = ({ nav, handleClick }) => {
  return (
    <div
      className={
        nav
          ? "hidden"
          : "flex bg-gray-400 opacity-50 absolute right-0 left-0 bottom-0 top-[133px]"
      }
    >
      {/* Mobile Menu */}
      <ul
        className={
          nav
            ? "ml-[-100%] duration-200"
            : "ml-0 w-[300px] flex flex-col pt-16 duration-200 md:w-[400px] absolute top-0 bottom-0 text-xl bg-white"
        }
      >
        <li onClick={handleClick} className="py-4 pl-6 my-1 hover:bg-gray-200">
          New In
        </li>
        <li onClick={handleClick} className="py-4 pl-6 my-1 hover:bg-gray-200">
          Best Sellers
        </li>
        <li onClick={handleClick} className="py-4 pl-6 my-1 hover:bg-gray-200">
          Weekend Boot
        </li>
        <li onClick={handleClick} className="py-4 pl-6 my-1 hover:bg-gray-200">
          Pricing
        </li>
        <li onClick={handleClick} className="py-4 pl-6 my-1 hover:bg-gray-200">
          Shop All
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

// Images
import yurushStore from "../assets/Images/Yurush Store.png";
import menClothing from "../assets/Images/men clothing.png";
import electronics from "../assets/Images/electronics.png";
import jwellery from "../assets/Images/jwellery.png";
import womenClothing from "../assets/Images/women clothing.png";

const HomePage = () => {
  return (
    <>
      {/* Image Holder */}
      <div className="relative">
        <img
          src={yurushStore}
          alt="Home page image"
          className="md:h-[60vh] lg:h-[75vh] h-[40vh] w-full max-w-[1500px] mx-auto object-cover"
        />
        <button className="absolute text-lg bottom-16 left-1/2 -translate-x-1/2 bg-white py-2 px-4 rounded-sm hover:scale-105 duration-100">
          <Link to="shopAll">Shop Now</Link>
        </button>
      </div>

      {/* Info */}
      <div>
        <p className="my-16 text-center text-[#084240] leading-snug text-3xl md:text-4xl max-w-[450px] md:max-w-[780px] mx-auto">
          Explore a world of socially responsible and environmentally friendly
          products that inspire you to #GoBeyond
        </p>
      </div>

      {/* Products */}
      <div className="flex justify-center items-center max-w-[1500px] mx-auto p-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="overflow-hidden group cursor-pointer">
            <img
              src={menClothing}
              alt="men's shirt"
              className="h-64 group-hover:scale-105 duration-300 w-[300px] object-cover"
            />
            <p className="my-4 relative pl-6 text-[#084240] font-semibold">
              Men's Clothing{" "}
              <BsArrowRight className="inline ml-2 group-hover:ml-4 duration-300" />
            </p>
          </div>
          <div className="overflow-hidden group cursor-pointer">
            <img
              src={electronics}
              alt="electronics"
              className="h-64 group-hover:scale-105 duration-300 w-[300px] object-cover"
            />
            <p className="my-4 relative pl-6 text-[#084240] font-semibold">
              Electronics{" "}
              <BsArrowRight className="inline ml-2 group-hover:ml-4 duration-300" />
            </p>
          </div>
          <div className="overflow-hidden group cursor-pointer">
            <img
              src={jwellery}
              alt="jwellery photo"
              className="h-64 group-hover:scale-105 duration-300 w-[300px] object-cover"
            />
            <p className="my-4 relative pl-6 text-[#084240] font-semibold">
              Jwelllery{" "}
              <BsArrowRight className="inline ml-2 group-hover:ml-4 duration-300" />
            </p>
          </div>
          <div className="overflow-hidden group cursor-pointer">
            <img
              src={womenClothing}
              alt="women's clothing"
              className="h-64 group-hover:scale-105 duration-300 w-[300px] object-cover"
            />
            <p className="my-4 relative pl-6 text-[#084240] font-semibold">
              Women's Clothing{" "}
              <BsArrowRight className="inline ml-2 group-hover:ml-4 duration-300" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

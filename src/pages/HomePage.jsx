import React from "react";
import yurushStore from "../assets/Images/Yurush Store.png";
import { BsArrowRight } from "react-icons/bs";

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
          Shop Now
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
          <div className="overflow-hidden group">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGe96NpibpIimMNyx8DleOFWkp5_RHj7UUMJy9NNkVgSSbGIN3_-RGX1vHI2VOJkjxFo&usqp=CAU"
              alt="a shirt"
              className="h-64 group-hover:scale-105 duration-300 w-[300px] object-cover"
            />
            <p className="my-4 relative text-[#084240] font-semibold">
              Shirt <BsArrowRight className="inline ml-2" />
            </p>
          </div>
          <div className="overflow-hidden group">
            <img
              src="https://5.imimg.com/data5/YS/YO/MY-22659923/ladies-boots-500x500.jpg"
              alt="a shirt"
              className="h-64 group-hover:scale-105 duration-300 w-[300px] object-cover"
            />
            <p className="my-4 relative text-[#084240] font-semibold">
              Boot <BsArrowRight className="inline ml-2" />
            </p>
          </div>
          <div className="overflow-hidden group">
            <img
              src="https://www.westend61.de/images/0000144023pw/wrist-watches-on-white-background-close-up-CSF015427.jpg"
              alt="a shirt"
              className="h-64 group-hover:scale-105 duration-300 w-[300px] object-cover"
            />
            <p className="my-4 relative text-[#084240] font-semibold">
              Watch <BsArrowRight className="inline ml-2" />
            </p>
          </div>
          <div className="overflow-hidden group">
            <img
              src="https://cdn.shopify.com/s/files/1/0535/9121/2224/products/Icon-Womens-Twenty-Niner-Gloves-Black-01.jpg?v=1620111458"
              alt="a shirt"
              className="h-64 group-hover:scale-105 duration-300 w-[300px] object-cover"
            />
            <p className="my-4 relative text-[#084240] font-semibold">
              Gloves <BsArrowRight className="inline ml-2" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

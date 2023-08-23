import React, { useEffect, useState } from "react";
import bestSellers from "../assets/Images/BestSellers.png";
import Card from "../components/Card";
import useProductAPI from "../useProductAPI";

const BestSellers = () => {
  const products = useProductAPI();

  return (
    <>
      <div>
        {/* Image Section */}
        <div className="relative">
          <img
            src={bestSellers}
            alt="New In Image"
            className="h-[20vh] md:h-[30vh] lg:h-[40vh] w-full max-w-[1500px] mx-auto object-cover object-top"
          />
        </div>

        {/* products Section */}
        <div className="flex justify-center my-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-6">
            {products &&
              products.slice(13, 20).map((product) => {
                return <Card item={product} key={product.id} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellers;

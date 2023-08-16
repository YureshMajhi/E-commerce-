import axios from "axios";
import React, { useEffect, useState } from "react";
import weekendStyles from "../assets/Images/Weekend Styles.png";
import WeekendStylesSm from "../assets/Images/Weekend Styles sm.png";
import Card from "../components/Card";

const WeekendStyles = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <div>
        {/* Large Image Section */}
        <div className="relative">
          <img
            src={weekendStyles}
            alt="New In Image"
            className="hidden sm:block h-[20vh] md:h-[30vh] lg:h-[40vh] lg:object-bottom w-full max-w-[1500px] mx-auto object-cover object-top"
          />
        </div>

        {/* small Image Section */}
        <div className="relative">
          <img
            src={WeekendStylesSm}
            alt="New In Image"
            className="sm:hidden h-[20vh] w-full max-w-[1500px] mx-auto object-cover object-top"
          />
        </div>

        {/* products Section */}
        <div className="flex justify-center my-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-6">
            {products &&
              products.slice(20, 28).map((product) => {
                return <Card item={product} key={product.id} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WeekendStyles;

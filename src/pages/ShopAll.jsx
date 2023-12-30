import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import useProductAPI from "../utils/useProductAPI.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import useCart from "../utils/useCart";
import { getAllProducts } from "../api/productapi.jsx";

const ShopAll = () => {
  // const products = useProductAPI();

  const [products, setProduct] = useState([]);
  useEffect(() => {
    getAllProducts().then((data) => {
      if (data.error) {
        toast.error(data.error);
      } else {
        setProduct(data);
      }
    });
  }, []);

  const { localProduct, addToCart } = useCart();

  // Page navigation
  const [buttonClicked, setButtonClicked] = useState("first");

  const [limitStart, setLimitStart] = useState(0);
  const [limitEnd, setLimitEnd] = useState(12);

  const handleClick = (start, end) => {
    setLimitStart(start);
    setLimitEnd(end);
    window.scrollTo({ top: 0, behavior: "smooth" });

    switch (start) {
      case 0:
        setButtonClicked("first");
        break;

      case 13:
        setButtonClicked("second");
        break;
    }
  };

  return (
    <>
      <ToastContainer theme="colored" position="top-center" />
      <div>
        {/* Products Section */}
        <h2 className="my-10 pl-10 text-4xl text-[#284057] max-w-[1350px] mx-auto">
          Shop All
        </h2>
        <div className="flex justify-center my-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 gap-y-20 p-6">
            {products &&
              products.slice(limitStart, limitEnd).map((product) => {
                return (
                  <Card
                    item={product}
                    key={product._id}
                    addToCart={addToCart}
                  />
                );
              })}
          </div>
        </div>

        {/* buttons */}
        <div className="flex justify-center text-[#284057] text-2xl">
          <button
            className={`mx-4 hover:underline ${
              buttonClicked == "first" ? "text-3xl underline" : ""
            }`}
            onClick={() => handleClick(0, 12)}
          >
            1
          </button>
          <button
            className={`mx-4 hover:underline ${
              buttonClicked == "second" ? "text-3xl underline" : ""
            }`}
            onClick={() => handleClick(13, 20)}
          >
            2
          </button>
        </div>
      </div>
    </>
  );
};

export default ShopAll;

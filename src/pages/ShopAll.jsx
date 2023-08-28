import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import useProductAPI from "../useProductAPI";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const ShopAll = () => {
  const products = useProductAPI();

  // setting products
  const [localProduct, setLocalProduct] = useState(() => {
    const localValue = localStorage.getItem("myCart");

    if (localValue) return JSON.parse(localValue);

    return [];
  });

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(localProduct));
  }, [localProduct]);

  const addToCart = (itemId) => {
    const selectedProduct = products.find((item) => {
      return item.id === itemId;
    });

    // Checking if the selected Product exists in the storage
    const currentProduct = localProduct.find((currentItem) => {
      return currentItem.id === itemId;
    });

    if (currentProduct) {
      toast.error("Item already exist in the cart.");
    } else {
      // localProduct.push(selectedProduct);
      setLocalProduct((currentProduct) => {
        return [...currentProduct, selectedProduct];
      });
      // localStorage.setItem("myCart", JSON.stringify(localProduct));
      toast.success(
        `${selectedProduct.title} is successfully added to the cart.`
      );
    }
  };

  // Page navigation
  const [buttonClicked, setButtonClicked] = useState("first");

  const [limitStart, setLimitStart] = useState(0);
  const [limitEnd, setLimitEnd] = useState(12);

  const handleClick = (start, end) => {
    setLimitStart(start);
    setLimitEnd(end);
    window.scrollTo({ top: 0, behavior: "smooth" });

    switch (start) {
      case 1:
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
                  <Card item={product} key={product.id} addToCart={addToCart} />
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

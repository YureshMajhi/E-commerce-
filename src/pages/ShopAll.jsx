import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import useProductAPI from "../useProductAPI";

const ShopAll = () => {
  const products = useProductAPI();

  const [buttonClicked, setButtonClicked] = useState("first");

  const [limitStart, setLimitStart] = useState(1);
  const [limitEnd, setLimitEnd] = useState(13);

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
      <div>
        {/* Products Section */}
        <h2 className="my-10 pl-10 text-4xl text-[#284057] max-w-[1350px] mx-auto">
          Shop All
        </h2>
        <div className="flex justify-center my-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 gap-y-20 p-6">
            {products &&
              products.slice(limitStart, limitEnd).map((product) => {
                return <Card item={product} key={product.id} />;
              })}
          </div>
        </div>

        {/* buttons */}
        <div className="flex justify-center text-[#284057] text-2xl">
          <button
            className={`mx-4 hover:underline ${
              buttonClicked == "first" ? "text-3xl underline" : ""
            }`}
            onClick={() => handleClick(1, 13)}
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

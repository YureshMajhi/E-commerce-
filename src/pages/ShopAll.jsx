import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const ShopAll = () => {
  const [products, setProducts] = useState([]);

  const [limitStart, setLimitStart] = useState(1);
  const [limitEnd, setLimitEnd] = useState(13);

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

  const [buttonClicked, setButtonClicked] = useState("first");
  const handleClick = (start, end) => {
    setLimitStart(start);
    setLimitEnd(end);
    window.scrollTo({ top: 0, behavior: "smooth" });

    switch (start) {
      case 1:
        setButtonClicked("first");
        break;

      case 14:
        setButtonClicked("second");
        break;

      case 27:
        setButtonClicked("third");
        break;

      case 40:
        setButtonClicked("fourth");
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
            onClick={() => handleClick(14, 26)}
          >
            2
          </button>
          <button
            className={`mx-4 hover:underline ${
              buttonClicked == "third" ? "text-3xl underline" : ""
            }`}
            onClick={() => handleClick(27, 39)}
          >
            3
          </button>
          <button
            className={`mx-4 hover:underline ${
              buttonClicked == "fourth" ? "text-3xl underline" : ""
            }`}
            onClick={() => handleClick(40, 43)}
          >
            4
          </button>
        </div>
      </div>
    </>
  );
};

export default ShopAll;

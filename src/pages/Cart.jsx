import React from "react";
import { BsTrash } from "react-icons/bs";

const Cart = () => {
  const localProduct = JSON.parse(localStorage.getItem("myCart")) || [];

  const deleteItem = (itemId) => {
    console.log(itemId);
  };

  return (
    <>
      {/* Container */}
      <div className="my-8 px-8 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex justify-between mb-6">
          <h2 className="text-3xl text-[#084240]">Your Cart</h2>
          <p className="underline font-light text-gray-700 hover:font-normal cursor-pointer">
            <a href="shopAll">Continue shopping</a>
          </p>
        </div>

        {/* Product Section */}
        <div>
          {/* Title */}
          <div>
            <div className="flex justify-between text-gray-700 uppercase text-xs">
              <p>product</p>
              <p>total</p>
            </div>
            <hr className="my-6" />
          </div>

          {/* products section */}
          {localProduct.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-between md:items-center"
              >
                {/* Info */}
                <div className="flex justify-between gap-4">
                  <div>
                    {" "}
                    <img
                      src={item.image}
                      alt="boot"
                      className="h-32 w-32 md:h-20 md:w-20 object-contain mr-[50px]"
                    />
                  </div>
                  <div className="md:flex items-center">
                    <div>
                      <p className="w-52 mr-10">{item.title}</p>
                      <p className="my-2 font-light">${item.price}</p>
                    </div>
                    <div className="flex">
                      <div className="flex border-2 border-gray-700 text-gray-700 w-[150px] h-[50px] justify-around p-2">
                        <button>-</button>
                        <p>1</p>
                        <button>+</button>
                      </div>
                      <button
                        className="ml-5"
                        onClick={() => deleteItem(item.id)}
                      >
                        <BsTrash />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-gray-700">$198</div>
              </div>
            );
          })}
          <hr className="my-6" />
        </div>

        {/* Checkout Section */}
        <div className="md:flex justify-between">
          <div>
            <p className="text-gray-700 my-2">Order special instructions</p>
            <textarea
              name="instructions"
              id="instructions"
              cols="30"
              rows="5"
              className="border-[1px] border-black w-full"
            ></textarea>
          </div>
          <div>
            <p className="text-center my-2 text-xl text-[#084240]">
              Subtotal <span className="text-gray-700 ml-4">$500 USD</span>
            </p>
            <p className="text-center text-gray-700 my-2 text-sm">
              Taxes and shipping calculated at checkout
            </p>
            <div className="flex justify-center">
              <button className="bg-[#084240] w-full max-w-sm text-white py-3 rounded-md">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

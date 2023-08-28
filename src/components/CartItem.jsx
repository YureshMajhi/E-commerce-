import React from "react";
import { BsTrash } from "react-icons/bs";

const CartItem = ({ item, i, quantities, setQuantities }) => {
  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleDecrement = (index) => {
    if (quantities[index] > 1) {
      const newQuantities = [...quantities];
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };
  return (
    <>
      <div className="flex justify-between md:items-center my-4">
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
              <p className="w-52 mr-10">{item.title.slice(0, 20)}...</p>
              <p className="my-2 font-light">${item.price}</p>
            </div>
            <div className="flex">
              <div className="flex border-2 border-gray-700 text-gray-700 w-[150px] h-[50px] justify-around p-2">
                <button onClick={() => handleDecrement(i)}>-</button>
                <p>{quantities[i]}</p>
                <button onClick={() => handleIncrement(i)}>+</button>
              </div>
              <button className="ml-5">
                <BsTrash />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-2 text-gray-700">
          ${(item.price * quantities[i]).toFixed(2)}{" "}
        </div>
      </div>
    </>
  );
};

export default CartItem;

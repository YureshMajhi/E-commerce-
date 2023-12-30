import React from "react";
import { BsTrash } from "react-icons/bs";
import { API } from "../config";

const CartItem = ({ item, i, quantities, setQuantities, deleteItem }) => {
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
              src={`${API}/${item.image}`}
              alt="boot"
              className="h-32 w-32 md:h-20 md:w-20 object-contain mr-[50px]"
            />
          </div>
          <div className="md:flex items-center">
            <div>
              <p className="w-52 md:mr-10">{item.title.slice(0, 20)}...</p>
              <p className="my-2 font-light">${item.price}</p>
            </div>
            <div className="flex">
              <div className="flex border-2 border-gray-700 text-gray-700 w-[120px] md:w-[150px] h-[40px] md:h-[50px] justify-around p-2">
                <button onClick={() => handleDecrement(i)}>-</button>
                <p>{quantities[i]}</p>
                <button onClick={() => handleIncrement(i)}>+</button>
              </div>
              <button
                onClick={() => deleteItem(item.id)}
                className="ml-5 scale-125 md:scale-100 hover:scale-125 duration-150"
              >
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

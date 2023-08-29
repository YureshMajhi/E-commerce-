import React from "react";

const Card = ({ item, addToCart }) => {
  const { id, price, image, title } = item;
  const titleLen = title.length;

  return (
    <>
      <div
        id={id}
        className="flex flex-col text-gray-950 max-w-[300px] group  cursor-pointer"
      >
        <div>
          <img
            src={image}
            alt="Image"
            className="object-contain w-full h-[300px] p-4 group-hover:p-0 duration-300"
          />
        </div>
        <p className="my-3 text-md">
          {titleLen > 25 ? title.slice(0, 25) + "..." : title}
        </p>
        <p className="text-lg">${price} USD</p>
        <button
          className="bg-[#084240] text-md text-white mt-2 font-semibold py-2 rounded-3xl hover:opacity-80"
          onClick={() => addToCart(id)}
        >
          Add to cart
        </button>
      </div>
    </>
  );
};

export default Card;

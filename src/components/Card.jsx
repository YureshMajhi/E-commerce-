import React from "react";

const Card = ({ item }) => {
  const { id, title, price } = item;
  const {
    images: [image],
  } = item;
  return (
    <>
      <div id={id} className="flex flex-col text-gray-950 max-w-[300px]">
        <div>
          <img
            // src="https://www.westend61.de/images/0000144023pw/wrist-watches-on-white-background-close-up-CSF015427.jpg"
            src={image}
            alt="Image"
            className="object-cover w-full h-[300px]"
          />
        </div>
        <p className="my-3 text-md">{title.slice(0, 28)}...</p>
        <p className="text-lg">${price} USD</p>
        <button className="bg-[#084240] text-md text-white mt-2 font-semibold py-2 rounded-3xl">
          Add to cart
        </button>
      </div>
    </>
  );
};

export default Card;

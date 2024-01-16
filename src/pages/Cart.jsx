import React, { useState } from "react";
import CartItem from "../components/CartItem";
import Checkout from "../components/Checkout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../reducers/cartActions";

const Cart = () => {
  let cart_items = useSelector((state) => state.cart.cart_items);

  // Handle quantities
  const [quantities, setQuantities] = useState(cart_items.map(() => 1));

  // Subtotal
  const calculateSubtotal = () => {
    let subtotal = 0;
    for (let i = 0; i < cart_items.length; i++) {
      subtotal += cart_items[i].price * quantities[i];
    }
    return subtotal.toFixed(2);
  };

  const dispatch = useDispatch();
  const deleteItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      {/* Container */}
      <div className="my-8 px-8 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex justify-between mb-6">
          <h2 className="text-3xl text-[#084240]">Your Cart</h2>
          <p className="underline font-light text-gray-700 hover:font-normal cursor-pointer">
            <Link to="/shopAll">Continue shopping</Link>
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

          {/* products showcase */}
          {cart_items.map((item, i) => {
            return (
              <CartItem
                key={i}
                item={item}
                i={i}
                setQuantities={setQuantities}
                quantities={quantities}
                deleteItem={deleteItem}
              />
            );
          })}
          <hr className="my-6" />
        </div>

        {/* Checkout Section */}
        <Checkout calculateSubtotal={calculateSubtotal} />
      </div>
    </>
  );
};

export default Cart;

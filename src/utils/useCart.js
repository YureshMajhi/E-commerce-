import React, { useEffect, useState } from "react";
import useProductAPI from "./useProductAPI";
import { ToastContainer, toast } from "react-toastify";

const useCart = () => {
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

  return { localProduct, addToCart };
};

export default useCart;

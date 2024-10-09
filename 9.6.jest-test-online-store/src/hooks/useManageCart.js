"use client";

import React, { useState } from "react";

const useManageCart = () => {
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    setCart((prev) => setCart([...prev, product]));
  };

  const removeProduct = (id) => {
    const filterProducts = cart.filter((product) => product.id !== id);
    setCart(filterProducts);
  };

  const clearCart = () => {
    setCart([]);
  };

  return { cart, addProduct, removeProduct, clearCart };
};

export default useManageCart;

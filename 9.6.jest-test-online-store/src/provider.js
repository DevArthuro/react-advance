"use client";

import CommerceContextProvider from "@/context/commerce";
import React from "react";
import useManageCart from "./hooks/useManageCart";

const Provider = ({ children }) => {
  const { addProduct, cart, clearCart, removeProduct } = useManageCart();

  return (
    <CommerceContextProvider
      value={{
        cart: cart,
        addProduct,
        clearCart,
        removeProduct,
      }}
    >
      {children}
    </CommerceContextProvider>
  );
};

export default Provider;

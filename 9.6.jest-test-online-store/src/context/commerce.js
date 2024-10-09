"use client";

import { createContext } from "react";

export const commerceContext = createContext({
  cart: [],
  addProduct: () => {},
  removeProduct: () => {},
  clearCart: () => {},
});

export default commerceContext.Provider;

import { createContext } from "react";
import { ShoppingType } from "../interfaces/products";

interface ContextType {
  products?: ShoppingType[];
}

export const ShoppingContext = createContext<ContextType>({});

export default ShoppingContext.Provider;

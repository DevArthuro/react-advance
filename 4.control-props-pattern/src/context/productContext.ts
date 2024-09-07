import { createContext } from "react";
import { ShoppingType } from "../interfaces/products";

interface ContextType {
  product?: ShoppingType;
}

export const ProductContext = createContext<ContextType>({});

export default ProductContext.Provider;

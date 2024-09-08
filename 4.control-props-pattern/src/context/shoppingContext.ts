import { createContext, Dispatch, SetStateAction } from "react";
import { ShoppingType } from "../interfaces/products";

export type CartValue = ShoppingType & { cantidity: number };

interface ContextType {
  products?: ShoppingType[];
  cart?: {
    value: CartValue[];
    setValue: Dispatch<SetStateAction<CartValue[]>>;
  };
}

export const ShoppingContext = createContext<ContextType>({});

export default ShoppingContext.Provider;

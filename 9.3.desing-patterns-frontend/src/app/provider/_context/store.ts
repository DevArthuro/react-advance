import { createContext, useContext } from "react";
import { PRODUCT_TYPE, ProductBought } from "../_types/store";

interface CONTEXT_TYPE {
  products: PRODUCT_TYPE[];
  buyByClient: ProductBought[];
  buyProduct: (identification: number, productId: number) => void;
}

export const StoreContext = createContext<CONTEXT_TYPE>({
  products: [],
  buyByClient: [],
  buyProduct: () => {},
});

export function useStoreContext() {
  return useContext(StoreContext);
}

export default StoreContext.Provider;

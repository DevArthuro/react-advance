import { createContext } from "react";
import { ProductCardType, ReturnUseProduct } from "../interfaces/product";

export const ProductContext = createContext(
  {} as { product: ProductCardType | null; redux: ReturnUseProduct }
);

export default ProductContext.Provider;

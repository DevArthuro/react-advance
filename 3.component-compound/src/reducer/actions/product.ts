import { ProductCardType } from "../../interfaces/product";
import { productActionType } from "../types/product";

export const addProduct = (product: ProductCardType): productActionType => ({
  type: "addProductState",
  payload: { product },
});

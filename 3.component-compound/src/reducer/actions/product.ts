import { ProductCardType } from "../../interfaces/product";
import { productActionType } from "../types/product";

export const addProduct = (product: ProductCardType): productActionType => ({
  type: "addProductState",
  payload: { product },
});

export const increaseCantidityProd = (): productActionType => ({
  type: "increaseBy",
  payload: null,
});

export const decreaseCantidityProd = (): productActionType => ({
  type: "decreaseBy",
  payload: null,
});

export const addFavoriteProd = (): productActionType => ({
  type: "addFavorite",
  payload: null,
});

export const addCartProd = (): productActionType => ({
  type: "addCart",
  payload: null,
});

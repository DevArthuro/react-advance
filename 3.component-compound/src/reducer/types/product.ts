import { ProductCardType } from "../../interfaces/product";

export type productActionType =
  | { type: "increaseBy"; payload: null }
  | { type: "decreaseBy"; payload: null }
  | { type: "addProductState"; payload: { product: ProductCardType } }
  | { type: "addFavorite"; payload: null }
  | { type: "addCart"; payload: null };

export interface StateProduct {
  product: ProductCardType | null;
  cantidity: number;
  favorite: boolean;
  inCart: boolean;
}

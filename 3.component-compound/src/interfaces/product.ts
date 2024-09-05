import { StateProduct } from "../reducer/types/product";

export interface ProductCardType {
  id: string;
  title: string;
  img: string;
  price: number;
}

export interface ReturnUseProduct {
  state: StateProduct;
  increase: () => void;
  decrease: () => void;
  addFav: () => void;
  addCart: () => void;
}

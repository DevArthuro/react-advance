import { useLayoutEffect, useReducer } from "react";
import productReducer from "../reducer/product";
import { INITIAL_STATE } from "../reducer/state/product";
import { addProduct } from "../reducer/actions/product";
import { StateProduct } from "../reducer/types/product";
import { PRODUCTS } from "../utils/product";

interface Props {
  id: string;
}

interface ReturnHook {
  state: StateProduct;
}

const useProduct = ({ id }: Props): ReturnHook => {
  const [state, dispatch] = useReducer(productReducer, INITIAL_STATE);
  const product = PRODUCTS.find((product) => product.id === id);

  if (!product) return { state };

  useLayoutEffect(() => {
    dispatch(addProduct(product));
  }, []);

  return {
    state,
  };
};

export default useProduct;

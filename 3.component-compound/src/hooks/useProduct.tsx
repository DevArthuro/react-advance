import { useLayoutEffect, useReducer } from "react";
import productReducer from "../reducer/product";
import { INITIAL_STATE } from "../reducer/state/product";
import {
  addCartProd,
  addFavoriteProd,
  addProduct,
  decreaseCantidityProd,
  increaseCantidityProd,
} from "../reducer/actions/product";
import { PRODUCTS } from "../utils/product";
import { ReturnUseProduct } from "../interfaces/product";

interface Props {
  id: string;
}

const useProduct = ({ id }: Props): ReturnUseProduct => {
  const [state, dispatch] = useReducer(productReducer, INITIAL_STATE);
  const product = PRODUCTS.find((product) => product.id === id);

  const increase = () => {
    dispatch(increaseCantidityProd());
  };

  const decrease = () => {
    dispatch(decreaseCantidityProd());
  };

  const addFav = () => {
    dispatch(addFavoriteProd());
  };

  const addCart = () => {
    dispatch(addCartProd());
  };

  useLayoutEffect(() => {
    if (product) {
      dispatch(addProduct(product));
    }
  }, []);

  return {
    state,
    increase,
    decrease,
    addFav,
    addCart,
  };
};

export default useProduct;

import { productActionType, StateProduct } from "./types/product";

const productReducer = (
  state: StateProduct,
  action: productActionType
): StateProduct => {
  const { cantidity } = state;
  const { type, payload } = action;

  switch (type) {
    case "increaseBy":
      return {
        ...state,
        cantidity: cantidity + 1,
      };
    case "decreaseBy":
      return {
        ...state,
        cantidity: cantidity - 1,
      };

    case "addProductState":
      return {
        ...state,
        product: payload?.product ?? null,
      };

    case "addFavorite":
      return {
        ...state,
        favorite: !state.favorite,
      };
    case "addCart":
      return {
        ...state,
        inCart: !state.inCart,
      };
    default:
      return state;
  }
};

export default productReducer;

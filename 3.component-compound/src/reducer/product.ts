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

    default:
      return state;
  }
};

export default productReducer;

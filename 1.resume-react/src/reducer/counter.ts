import { counterState } from "../types/counter";
import { ACTION_TYPES, ACTIONS_COUNTER } from "./types/counter";

export const counterReducer = (
  state: counterState,
  action: ACTIONS_COUNTER
): counterState => {
  switch (action.type) {
    case ACTION_TYPES.INCREASE:
      return {
        clicks: state.clicks + 1,
        value: state.value + action.payload.value,
      };
    case ACTION_TYPES.DECREASE:
      return {
        clicks: state.clicks + 1,
        value: state.value - action.payload.value,
      };
    case ACTION_TYPES.RESET:
      return {
        clicks: 0,
        value: 0,
      };
    default:
      return state;
  }
};

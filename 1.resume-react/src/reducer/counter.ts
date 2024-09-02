import { ActionsCounter, counterState } from "../types/counter";

export const counterReducer = (
  state: counterState,
  action: ActionsCounter
): counterState => {
  switch (action.type) {
    case "increase":
      return {
        clicks: state.clicks + 1,
        value: state.value + action.payload.value,
      };
    case "decrease":
      return {
        clicks: state.clicks + 1,
        value: state.value - action.payload.value,
      };
    case "reset":
      return {
        clicks: 0,
        value: 0,
      };
    default:
      return state;
  }
};

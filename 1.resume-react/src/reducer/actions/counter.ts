import { ACTION_TYPES, ACTIONS_COUNTER } from "../types/counter";

export const increaseCounter = (value: number = 1): ACTIONS_COUNTER => ({
  type: ACTION_TYPES.INCREASE,
  payload: { value },
});

export const decreaseCounter = (value: number = 1): ACTIONS_COUNTER => ({
  type: ACTION_TYPES.DECREASE,
  payload: { value },
});

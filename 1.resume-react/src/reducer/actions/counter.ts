import { ActionsCounter } from "../../types/counter";

export const increaseCounter = (value: number = 1): ActionsCounter => ({
  type: "increase",
  payload: { value },
});

export const decreaseCounter = (value: number = 1): ActionsCounter => ({
  type: "decrease",
  payload: { value },
});

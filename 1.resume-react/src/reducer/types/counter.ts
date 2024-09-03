export enum ACTION_TYPES {
  INCREASE,
  DECREASE,
  RESET,
}

export type ACTIONS_COUNTER =
  | { type: ACTION_TYPES.INCREASE; payload: { value: number } }
  | { type: ACTION_TYPES.DECREASE; payload: { value: number } }
  | {
      type: ACTION_TYPES.RESET;
    };

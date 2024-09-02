export interface counterState {
  clicks: number;
  value: number;
}

export enum Operations {
  SUM,
  REST,
}

export interface Props {
  initialState?: number;
}

export type ActionsCounter =
  | { type: "increase"; payload: { value: number } }
  | { type: "decrease"; payload: { value: number } }
  | { type: "reset" };

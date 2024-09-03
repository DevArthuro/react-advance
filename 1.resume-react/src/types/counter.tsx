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

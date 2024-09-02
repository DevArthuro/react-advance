import { useReducer } from "react";
import { counterReducer } from "../reducer/counter";
import { INITIAL_STATE } from "../reducer/initialState";
import { decreaseCounter, increaseCounter } from "../reducer/actions/counter";

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  return (
    <div className="counter">
      <div className="operation">
        <button
          onClick={() => {
            dispatch(decreaseCounter());
          }}
          className="button-oper rest-button"
        >
          -
        </button>
        <span className="counter-value">
          <span style={{ display: "inline-block" }}>{state.value}</span>
          <span className="touch" title="touched">
            {state.clicks}
          </span>
        </span>
        <button
          onClick={() => {
            dispatch(increaseCounter());
          }}
          className="button-oper plus-button"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterWithReducer;

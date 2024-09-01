import { useState } from "react";

interface Props {
  initialState?: number;
}

interface counterState {
  clicks: number;
  value: number;
}

enum Operations {
  SUM,
  REST,
}

const Counter: React.FC<Props> = ({ initialState }) => {
  const [counter, setCounter] = useState<counterState>({
    value: initialState ?? 0,
    clicks: 0,
  });

  const onClickCounter = (operator: Operations, value = 1) => {
    if (counter.value <= 0 && operator === Operations.REST) return;
    switch (operator) {
      case Operations.SUM:
        setCounter((prev) => ({ ...prev, value: prev.value + value }));
        break;
      case Operations.REST:
        setCounter((prev) => ({ ...prev, value: prev.value - value }));
        break;
      default:
        break;
    }
    setCounter((prev) => ({ ...prev, clicks: prev.clicks + 1 }));
  };

  return (
    <div className="counter">
      <h1 className="title">Counter {counter.value}</h1>
      <h1 className="touch">Touched {counter.clicks}</h1>
      <button
        onClick={() => onClickCounter(Operations.REST)}
        className="rest-button"
      >
        -
      </button>
      <button
        onClick={() => onClickCounter(Operations.SUM)}
        className="plus-button"
      >
        +
      </button>
      <button onClick={() => onClickCounter(Operations.SUM, 5)}>
        plus 5 points
      </button>
    </div>
  );
};

export default Counter;

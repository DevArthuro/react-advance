import { useState } from "react";
import { Operations, Props } from "../types/counter";
import useCounter from "../hooks/useCounter";

const Counter: React.FC<Props> = ({ initialState }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [length, setLength] = useState(true);

  const { numberForm, onClickCounter, operation, valueRef, counter } =
    useCounter({
      initialState,
    });

  return (
    <div className="counter">
      <div className="operation">
        <button
          onClick={() => onClickCounter(Operations.REST)}
          className="button-oper rest-button"
        >
          -
        </button>
        <span className="counter-value">
          <span style={{ display: "inline-block" }} ref={valueRef}>
            {counter.value}
          </span>
          <span className="touch" title="touched">
            {counter.clicks}
          </span>
        </span>
        <button
          onClick={() => onClickCounter(Operations.SUM)}
          className="button-oper plus-button"
        >
          +
        </button>
      </div>
      <div className="button-details">
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Ocultar detaller" : "Mostrar detalles"}
        </button>
      </div>
      <form
        className={`${!showDetails ? "disabled" : ""} form`}
        onSubmit={(e) => {
          e.preventDefault();
          const number = numberForm.current?.value;
          const operator = operation.current?.value ?? Operations.SUM;
          onClickCounter(Number(operator), Number(number));
        }}
      >
        <div className="input">
          <label htmlFor="number">Number</label>
          <input
            type="number"
            name="number"
            id="number"
            min={1}
            ref={numberForm}
            onChange={(e) => {
              if (e.target.value.length === 0) {
                setLength(true);
                return;
              }
              setLength(false);
            }}
          />
        </div>
        <div className="input">
          <label htmlFor="operations">Operaciones</label>
          <select
            name="operations"
            id="operations"
            defaultValue={Operations.SUM}
            ref={operation}
          >
            <option value={Operations.REST}>Rest</option>
            <option value={Operations.SUM}>Plus</option>
          </select>
        </div>
        <input type="submit" value="Operar" disabled={length} />
      </form>
    </div>
  );
};

export default Counter;

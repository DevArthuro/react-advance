import gsap from "gsap";
import { useRef, useState } from "react";

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
  const valueRef = useRef<HTMLParagraphElement>(null);
  const tl = gsap.timeline();
  const [showDetails, setShowDetails] = useState(false);
  const [length, setLength] = useState(true);

  const numberForm = useRef<HTMLInputElement>(null);
  const operation = useRef<HTMLSelectElement>(null);

  const onClickCounter = (operator: Operations, value = 1) => {
    if (counter.value <= 0 && operator === Operations.REST) return;
    switch (operator) {
      case Operations.SUM:
        setCounter((prev) => ({ ...prev, value: prev.value + value }));
        tl.to(valueRef.current, { y: -100, duration: 0.2, ease: "ease.out" });
        tl.to(valueRef.current, {
          y: 0,
          duration: 0.1,
          ease: "ease.in",
        });

        break;
      case Operations.REST:
        setCounter((prev) => ({ ...prev, value: prev.value - value }));
        tl.to(valueRef.current, {
          y: 70,
          duration: 0.2,
          ease: "ease.out",
        });
        tl.to(valueRef.current, {
          y: 0,
          duration: 0.1,
          ease: "ease.in",
        });
        break;
      default:
        break;
    }
    setCounter((prev) => ({ ...prev, clicks: prev.clicks + 1 }));
  };

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

import gsap from "gsap";
import { useRef, useState } from "react";
import { counterState, Operations } from "../types/counter";

const useCounter = ({ initialState = 0 }) => {
  const [counter, setCounter] = useState<counterState>({
    value: initialState ?? 0,
    clicks: 0,
  });
  const valueRef = useRef<HTMLParagraphElement>(null);
  const tl = gsap.timeline();

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

  return {
    onClickCounter,
    numberForm,
    operation,
    valueRef,
    counter,
  };
};

export default useCounter;

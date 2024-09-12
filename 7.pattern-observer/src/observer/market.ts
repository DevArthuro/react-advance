import { v4 } from "uuid";

interface Product {
  name: string;
  price: string;
}

interface STATE_OBSERVER {
  activeCarts: number;
  subscribers: {
    [key: string]: { func: () => void; data: Product };
  };
}

export const Observer = (initialState: STATE_OBSERVER) => {
  const state_observer: STATE_OBSERVER = initialState;

  const subscribe = (func: () => string, data: Product) => {
    const key = v4();
    state_observer.subscribers[key] = {
      func,
      data,
    };

    state_observer.activeCarts++;

    return {
      orderId: key,
      deleteSub: () => {
        delete state_observer.subscribers[key];
        state_observer.activeCarts--;
      },
      func,
    };
  };

  const notifyChanges = () => {
    Object.entries(state_observer.subscribers).forEach(([_, value]) => {
      value.func();
    });
  };

  return {
    subscribe,
    notifyChanges,
    getState: () => state_observer,
  };
};

export default Observer;

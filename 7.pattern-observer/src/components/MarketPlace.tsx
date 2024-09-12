import { useContext, useRef, useState } from "react";
import { observerContext } from "../context/observer";

export const MarketPlace = () => {
  const { observer } = useContext(observerContext);

  const [observerUpdates, setObserver] = useState(observer.getState());
  const [handlerObserver, sethandlerObserver] = useState<
    { orderId: string; deleteSub: () => void; func: () => string }[]
  >([]);

  const userRef = useRef<HTMLInputElement>(null);

  const newOrder = (user: string) => {
    const message = `${user} is added is changed`;
    return () => {
      console.log(message);
      return message;
    };
  };

  const onChange = () => {
    setObserver((prev) => ({ ...prev, ...observer.getState() }));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!userRef.current) return;
          const { orderId, deleteSub, func } = observer.subscribe(
            newOrder(userRef.current.value),
            {
              name: "tomates",
              price: 3500,
            }
          );
          alert(`You order is ${orderId}`);
          onChange();
          sethandlerObserver((prev) => [...prev, { orderId, deleteSub, func }]);
          console.log(handlerObserver);
        }}
      >
        <label htmlFor="user">Name user</label>
        <input type="text" ref={userRef} />
        <input type="submit" />
      </form>
      <br />
      <pre>{JSON.stringify(observerUpdates, null, 3)}</pre>
      <br />
      {handlerObserver.length > 0 ? (
        handlerObserver.map((orderHandler, index) => (
          <div key={orderHandler.orderId}>
            <p>{orderHandler.orderId}</p>
            <p>Message Reference "{orderHandler.func()}"</p>
            <button
              onClick={() => {
                orderHandler.deleteSub();
                onChange();
                handlerObserver.splice(index, 1);
              }}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <div>Not found</div>
      )}
      <br />
      <button onClick={observer.notifyChanges}>Enviar Notificación</button>
    </div>
  );
};

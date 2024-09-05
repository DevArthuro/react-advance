import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

const Counter = () => {
  const {
    redux: {
      decrease,
      increase,
      state: { cantidity },
    },
  } = useContext(ProductContext);

  return (
    <div className="cantidity">
      <div className="rest" onClick={decrease}>
        -
      </div>
      <div className="value">{cantidity}</div>
      <div className="plus" onClick={increase}>
        +
      </div>
    </div>
  );
};

export default Counter;

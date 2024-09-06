import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import { GlobalProps } from "../../interfaces/product";

const Counter = ({ className, style }: GlobalProps) => {
  const {
    redux: {
      decrease,
      increase,
      state: { cantidity },
    },
  } = useContext(ProductContext);

  return (
    <div className={`cantidity ${className}`} style={style}>
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

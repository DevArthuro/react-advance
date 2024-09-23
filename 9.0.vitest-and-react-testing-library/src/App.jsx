import { useState } from "react";
import { v4 } from "uuid";
import ProductsList from "./components/ProductsList";
import { changeOrderByPrice } from "./utils/handlerOrderProducts";

export const initialProducts = [
  {
    id: v4(),
    name: "Tomates",
    price: 1.99,
  },
  {
    id: v4(),
    name: "Leite",
    price: 2.99,
  },
  {
    id: v4(),
    name: "Carrot",
    price: 1.49,
  },
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  return (
    <div className="App">
      <ProductsList products={products} />
      <button onClick={() => setProducts(changeOrderByPrice(products))}>
        Order by price
      </button>
    </div>
  );
}

export default App;

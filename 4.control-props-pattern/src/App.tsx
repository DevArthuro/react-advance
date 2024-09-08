import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Shopping from "./pages/Shopping";
import ShoppingContextProvider, { CartValue } from "./context/shoppingContext";
import useProducts from "./hooks/useProducts";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState<CartValue[]>([]);
  const { loading, products, error } = useProducts();

  if (loading) return <div>Loading {JSON.stringify(loading)}</div>;

  if (error) return <div>This is a error</div>;

  return (
    <>
      <ShoppingContextProvider
        value={{ products, cart: { value: cart, setValue: setCart } }}
      >
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Shopping />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ShoppingContextProvider>
    </>
  );
}

export default App;

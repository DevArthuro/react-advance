import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Shopping from "./pages/Shopping";
import ShoppingContextProvider from "./context/shoppingContext";
import useProducts from "./hooks/useProducts";

function App() {
  const { loading, products, error } = useProducts();

  if (loading) return <div>Loading {JSON.stringify(loading)}</div>;

  if (error) return <div>This is a error</div>;

  return (
    <>
      <ShoppingContextProvider value={{ products }}>
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

import ProductContextProvider from "../context/productContext";
import useProduct from "../hooks/useProduct";
import AddCartButton from "./partials/AddCartButton";
import Counter from "./partials/Counter";
import Details from "./partials/Details";
import Image from "./partials/Image";

const ProductCardComponent: React.FC<{
  children: React.ReactNode[];
  id: string;
}> = ({ id, children }) => {
  const { state, increase, decrease, addFav, addCart } = useProduct({ id });

  const { product } = state;

  return (
    <ProductContextProvider
      value={{ product, redux: { state, increase, decrease, addCart, addFav } }}
    >
      <div className="card">{children}</div>
    </ProductContextProvider>
  );
};

export const ProductCard = Object.assign(ProductCardComponent, {
  Image,
  Details,
  Counter,
  AddCartButton,
});

export default ProductCardComponent;

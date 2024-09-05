import ProductContextProvider from "../context/productContext";
import useProduct from "../hooks/useProduct";
import AddCartButton from "./partials/AddCartButton";
import Counter from "./partials/Counter";
import Details from "./partials/Details";
import Image from "./partials/Image";

const ProductCard: React.FC<{ id: string }> = ({ id }) => {
  const { state, increase, decrease, addFav, addCart } = useProduct({ id });

  const { product } = state;

  return (
    <ProductContextProvider
      value={{ product, redux: { state, increase, decrease, addCart, addFav } }}
    >
      <div className="card">
        <Image />
        <Details />
        <Counter />
        <AddCartButton />
      </div>
    </ProductContextProvider>
  );
};

export default ProductCard;

import ProductContextProvider from "../context/productContext";
import useProduct from "../hooks/useProduct";

const ProductCard: React.FC<{ children: React.ReactNode[]; id: string }> = ({
  id,
  children,
}) => {
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

export default ProductCard;

import { useEffect, useState } from "react";
import { ShoppingType } from "../interfaces/products";

const useProducts = () => {
  const [products, setProducts] = useState<ShoppingType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data: ShoppingType[] = await response.json();
        setProducts(data);
        setError(false);
      } catch (e) {
        console.error(e);
        setError(true);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;

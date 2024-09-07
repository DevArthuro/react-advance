type Categories =
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing";

export interface ShoppingType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Categories;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

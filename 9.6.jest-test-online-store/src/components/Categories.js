import React from "react";
import Product from "./Product";
import Products from "./Products";

const Categories = ({ categories, products }) => {
  return (
    <ul role="list-categories">
      {categories.map((category) => (
        <li key={category.id} role="parent-category">
          <h2>{category.name}</h2>
          <ul role="list-category-products">
            <Products products={products} />
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Categories;

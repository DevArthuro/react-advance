"use client";

import React from "react";
import WithSearch from "./_components/WithSearch";
import ProductList from "./_components/ProductList";
import { products, todos } from "./utils/dataSets";
import TodoList from "./_components/TodoList";

const page = () => {
  const ProductListWithSearch = WithSearch({
    Component: ProductList,
    dataset: products,
  });

  const TodoListWithSearch = WithSearch({
    Component: TodoList,
    dataset: todos,
  });
  return (
    <div>
      <h2>HOC</h2>
      <div>
        <h3>Product Search</h3>
        <ProductListWithSearch />
      </div>
      <div>
        <h3>Todo search</h3>
        <TodoListWithSearch />
      </div>
    </div>
  );
};

export default page;

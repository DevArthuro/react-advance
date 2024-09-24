import { ChangeEvent, useState } from "react";
import { PRODUCT_TYPE } from "../_types/Product";
import { TODO_TYPE } from "../_types/Todo";
import ProductList from "./ProductList";
import TodoList from "./TodoList";

type Props = {
  Component: typeof ProductList | typeof TodoList;
  dataset: PRODUCT_TYPE[] | TODO_TYPE[];
};

const WithSearch = ({ Component, dataset }: Props) => {
  return () => {
    const [query, setQuery] = useState("");

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      setQuery(e.target.value);
    }

    return (
      <div>
        <input onChange={(e) => handleChange(e)} value={query} />
        <Component query={query} dataset={dataset as TODO_TYPE[]} />
      </div>
    );
  };
};

export default WithSearch;

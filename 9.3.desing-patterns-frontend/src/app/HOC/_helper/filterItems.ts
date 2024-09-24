import { PRODUCT_TYPE } from "../_types/Product";
import { TODO_TYPE } from "../_types/Todo";

type Props =
  | { query: string; dataset: TODO_TYPE[] }
  | { query: string; dataset: PRODUCT_TYPE[] };

export const filterItems = ({
  dataset,
  query,
}: Props): TODO_TYPE[] | PRODUCT_TYPE[] => {
  if (query === "") {
    return dataset;
  }

  return dataset.filter((item) => item.title.indexOf(query) === 0);
};

import { filterItems } from "../_helper/filterItems";
import { TODO_TYPE } from "../_types/Todo";
import Todo from "./Todo";

interface Props {
  query: string;
  dataset: TODO_TYPE[];
}

const TodoList: React.FC<Props> = ({ query, dataset }) => {
  const items = filterItems({ query, dataset }) as TODO_TYPE[];
  return (
    <div>
      {items.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;

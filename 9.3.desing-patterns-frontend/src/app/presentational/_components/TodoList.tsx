import { TODO_TYPE } from "../_types/todo";
import Todo from "./Todo";

interface Props {
  items: TODO_TYPE[];
  onCompleted: (id: number) => void;
  itemsCompleted: number;
  totalItems: number;
}

const TodoList: React.FC<Props> = ({
  items,
  itemsCompleted,
  onCompleted,
  totalItems,
}) => {
  return (
    <div>
      <div>
        {itemsCompleted} of {totalItems} completed
      </div>
      {items.map((item) => (
        <Todo key={item.id} {...item} onCompleted={onCompleted} />
      ))}
    </div>
  );
};

export default TodoList;

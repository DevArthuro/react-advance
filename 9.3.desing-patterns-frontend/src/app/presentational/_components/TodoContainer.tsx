"use client";

import { useMemo, useState } from "react";
import { data } from "../_utils/todosData";
import { TODO_TYPE } from "../_types/todo";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [items, setItems] = useState<TODO_TYPE[]>(data);

  const handleCompleted = (id: number) => {
    const index = items.findIndex((item) => item.id === id);
    items[index].completed = !items[index].completed;
    setItems([...items]);
  };

  const itemsCompleted = useMemo(
    () => items.filter((item) => item.completed).length,
    [items]
  );

  return (
    <div>
      <TodoList
        items={items}
        onCompleted={handleCompleted}
        itemsCompleted={itemsCompleted}
        totalItems={items.length}
      />
    </div>
  );
};

export default TodoContainer;

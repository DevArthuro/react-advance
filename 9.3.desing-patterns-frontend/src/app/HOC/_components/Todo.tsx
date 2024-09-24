import React from "react";
import { TODO_TYPE } from "../_types/Todo";

const Todo: React.FC<TODO_TYPE> = ({ title, completed }) => {
  const handleChange = () => {
    /**  */
  };
  return (
    <div>
      <div>
        <input type="checkbox" checked={completed} onChange={handleChange} />
        {title}
      </div>
    </div>
  );
};

export default Todo;

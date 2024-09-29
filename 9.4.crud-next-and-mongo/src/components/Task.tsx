"use client";
import { TASK_TYPE } from "@/types/task";

const Task: React.FC<TASK_TYPE> = (task) => {
  return (
    <div className="bg-gray-800 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-900">
      <h3> {task.title}</h3>
      <p> {task.description}</p>
    </div>
  );
};

export default Task;

import { TASK_TYPE } from "@/types/task";
import ButtonUpdate from "./ButtonUpdate";
import ButtonDelete from "./ButtonDelete";

const Task: React.FC<TASK_TYPE> = (task) => {
  return (
    <div className="bg-gray-800 p-8 text-white rounded-md hover:cursor-pointer hover:bg-gray-900 grid grid-cols-2">
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-[1.6rem]"> {task.title}</h3>
        <p> {task.description}</p>
      </div>
      <div className="grid gird-rows-2 gap-4 place-content-center">
        <ButtonUpdate id={task._id} />
        <ButtonDelete id={task._id} />
      </div>
    </div>
  );
};

export default Task;

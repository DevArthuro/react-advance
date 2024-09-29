import { TASK_TYPE } from "@/types/task";
import React from "react";

interface PropsChild {
  tasks: TASK_TYPE[];
}

interface Props {
  children: (props: PropsChild) => JSX.Element;
  tasks: TASK_TYPE[];
  className: string;
}

const ManageTasks = ({ children, tasks, className }: Props) => {
  return (
    <div className={className}>
      {children({
        tasks,
      })}
    </div>
  );
};

export default ManageTasks;

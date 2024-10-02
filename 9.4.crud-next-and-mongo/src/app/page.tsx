import React from "react";
import ManageTasks from "@/components/ManageTask";
import Task from "@/components/Task";
import { TASK_TYPE } from "@/types/task";
import ButtonCreateTask from "@/components/ButtonCreateTask";

export default async function Home() {
  const tasksReq: TASK_TYPE[] | { error: boolean, message: string } = await getTasks();
  
  if ("error" in tasksReq) {
     return <h1>{tasksReq?.message}</h1>;
  }

  return (
    <>
      <div>
        <ButtonCreateTask />
        <hr/>
      </div>
      {tasksReq.length > 0 ? (
          <ManageTasks
            tasks={tasksReq}
            className="grid gird-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2"
          >
            {({ tasks }) => (
              <>
                {tasks.map((task) => (
                  <Task key={task._id} {...task} />
                ))}
              </>
            )}
          </ManageTasks>
      ) : (
        <h1>there isn't the task yet</h1>
      )}
    </>
  );
}

async function getTasks() {
  const BASE_URL_API = process.env.BASE_URL as string;
  try {
    const response = await fetch(`${BASE_URL_API}/tasks/`, {
      cache: "no-store",
    });
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    return { error: true, message: "Can't to fetch task"};
  }
}

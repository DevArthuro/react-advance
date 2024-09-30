import React from "react";
import ManageTasks from "@/components/ManageTask";
import Task from "@/components/Task";
import { TASK_TYPE } from "@/types/task";

export default async function Home() {
  const tasksReq: TASK_TYPE[] = await getTasks();
  return (
    <>
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
    return [];
  }
}

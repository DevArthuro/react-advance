"use client";

import { TASK_TYPE } from "@/types/task";
import { useState } from "react";

function useTasks(taskReq: TASK_TYPE[]) {
  const [a, b] = useState();
  return {
    tasks: taskReq,
  };
}

export default useTasks;

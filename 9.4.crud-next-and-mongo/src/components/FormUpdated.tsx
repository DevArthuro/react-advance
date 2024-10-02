"use client";

import React from "react";
import { TASK_TYPE } from "@/types/task";
import Form from "./Form";
import { FormEvent, useMemo, useState } from "react";

interface Props {
  taskReq: TASK_TYPE;
}

const FormUpdated: React.FC<Props> = ({ taskReq }) => {
  if (!taskReq) {
    window.location.href = "/";
  }

  const [task, setTask] = useState({
    title: taskReq?.title,
    description: taskReq?.description,
  });

  const [message, setMessage] = useState("");

  const isDisabled = useMemo(() => {
    return task.title.length > 0 || task.description.length > 0;
  }, [task]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = { title: task.title, description: task.description };
      const response = await fetch(`/api/tasks/${taskReq._id}`, {
        method: "PATCH",
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (response.status === 400) throw Error(data?.message);
      setMessage(`Task updated ${data.title}`);
      setTask(() => ({ title: data?.title, description: data?.description }));
    } catch (error) {
      console.log(error);
      setMessage((error as Error).message ?? `Cannot create task`);
    }
  };

  return (
    <>
      <Form
        setTask={setTask}
        task={task}
        handleSubmit={handleSubmit}
        isDisabled={isDisabled}
        message={message}
      />
    </>
  );
};

export default FormUpdated;

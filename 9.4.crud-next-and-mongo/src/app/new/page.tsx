"use client";

import React from "react";
import Form from "@/components/Form";
import { FormEvent, useMemo, useState } from "react";

const Page = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const isDisabled = useMemo(() => {
    return task.title.length > 0 && task.description.length > 0;
  }, [task]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = { title: task.title, description: task.description };
      const response = await fetch(`/api/tasks`, {
        method: "POST",
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (response.status === 400) throw Error(data?.message);
      setMessage(`Task created ${data.title}`);
      setTask(() => ({ title: "", description: "" }));
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

export default Page;

"use client";

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
      const BASE_URL_API = "http://localhost:3000/api";
      const body = { title: task.title, description: task.description };
      const response = await fetch(`${BASE_URL_API}/tasks`, {
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
    <div className="h-[calc(100vh-7rem)] flex flex-col justify-center items-center">
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
          onChange={(e) =>
            setTask((prev) => ({ ...prev, title: e.target.value }))
          }
          value={task.title ?? ""}
        />
        <textarea
          onChange={(e) =>
            setTask((prev) => ({ ...prev, description: e.target.value }))
          }
          rows={3}
          name="description"
          placeholder="Description"
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
          value={task.description ?? ""}
        />
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg"
          disabled={!isDisabled}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Page;

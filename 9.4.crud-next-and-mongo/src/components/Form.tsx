import React, { Dispatch, FormEvent, SetStateAction } from "react";

interface Props {
  message?: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  setTask: Dispatch<
    SetStateAction<{
      title: string;
      description: string;
    }>
  >;
  task: {
    title: string;
    description: string;
  };
  isDisabled?: boolean;
}

const Form: React.FC<Props> = ({
  handleSubmit,
  message = false,
  setTask,
  task,
  isDisabled = false,
}) => {
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

export default Form;

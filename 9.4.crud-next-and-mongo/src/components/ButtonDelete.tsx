"use client";

import React from "react";

const ButtonDelete: React.FC<{ id: string }> = ({ id }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/tasks/${id}`, {
        cache: "no-cache",
        method: "DELETE",
      });
      const data = await response.json();
      if (data?.error) throw Error(data?.message ?? "Can't delete the task");
      window.location.href = "/";
    } catch (error) {
      alert(JSON.stringify((error as Error)?.message));
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="max-w-[100px] bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg"
    >
      Delete
    </button>
  );
};

export default ButtonDelete;

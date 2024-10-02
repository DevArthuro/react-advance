import React from "react";
import { TASK_TYPE } from "@/types/task";
import FormUpdated from "@/components/FormUpdated";
import { redirect, RedirectType } from "next/navigation";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const taskReq: TASK_TYPE = await getTask(id);
  if (!taskReq) {
    redirect("/", RedirectType.replace);
  }

  return (
    <>
      <FormUpdated taskReq={taskReq} />
    </>
  );
};

async function getTask(id: string) {
  const BASE_URL_API = process.env.BASE_URL as string;
  try {
    const response = await fetch(`${BASE_URL_API}/tasks/${id}`, {
      cache: "no-cache",
    });
    const data = await response.json();
    if (data?.error) throw new Error(data?.message ?? "Tasks Not found");
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default page;

import { redirect, RedirectType } from "next/navigation";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const task = await getTask(id);
  if (!task) {
    redirect("/", RedirectType.replace);
  }
  return <div>{task.title}</div>;
};

async function getTask(id: string) {
  const BASE_URL_API = process.env.BASE_URL as string;
  try {
    const response = await fetch(`${BASE_URL_API}/tasks/${id}`);
    const data = await response.json();
    if (data?.error) throw new Error(data?.message ?? "Tasks Not found");
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default page;

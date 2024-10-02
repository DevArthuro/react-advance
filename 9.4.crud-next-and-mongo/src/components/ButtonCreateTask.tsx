"use client"

import { useRouter } from "next/navigation"

const ButtonCreateTask = () => {
    const router = useRouter()
    const handlerCreateTask = () => {
        router.push("/new")
    }
  return (
    <button
      onClick={handlerCreateTask}
      className="px-6 py-2 border-white border-solid border-2 rounded-full bg-sky-700 my-4"
    >
      Create task
    </button>
  );
}

export default ButtonCreateTask
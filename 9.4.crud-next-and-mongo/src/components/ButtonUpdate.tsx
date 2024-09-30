"use client";

import { useRouter } from "next/navigation";

const ButtonUpdate: React.FC<{ id: string }> = ({ id }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/${id}`)}
      className="max-w-[100px] bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg"
    >
      Update
    </button>
  );
};

export default ButtonUpdate;

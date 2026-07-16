"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  projectId: number;
};

export default function ProjectActions({ projectId }: Props) {
  const router = useRouter();
  const [success, setSuccess] = useState(false);

  const handleDelete = () => {
    const ok = window.confirm("この案件を削除しますか？");

    if (!ok) return;

    setSuccess(true);

    setTimeout(() => {
      router.push("/projects");
    }, 1000);
  };

  return (
    <>
      {success && (
        <div className="mb-4 rounded-lg bg-green-100 border border-green-400 text-green-700 px-4 py-3">
          ✅ 案件を削除しました。
        </div>
      )}

      <div className="flex gap-4 pt-6">

        <Link
          href={`/projects/${projectId}/edit`}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
        >
          編集
        </Link>

        <button
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition"
        >
          削除
        </button>

      </div>
    </>
  );
}
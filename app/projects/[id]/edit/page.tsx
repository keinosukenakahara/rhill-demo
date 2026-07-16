"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { projects, type Project } from "@/lib/projects";

export default function EditProjectPage() {
  const router = useRouter();
  const params = useParams();

  const project: Project | undefined = projects.find(
    (p) => p.id === Number(params.id)
  );

  if (!project) {
    return <div>案件が見つかりません。</div>;
  }

  const [person, setPerson] = useState(project.employee);
  const [name, setName] = useState(project.project);
  const [startDate, setStartDate] = useState(project.start);
  const [status, setStatus] = useState(project.status);
  const [success, setSuccess] = useState(false);

  const handleUpdate = () => {
    setSuccess(true);

    setTimeout(() => {
      router.push("/projects");
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">
        案件編集
      </h1>

      {success && (
        <div className="mb-4 rounded-lg bg-green-100 border border-green-400 text-green-700 px-4 py-3">
          ✅ 案件を更新しました。
        </div>
      )}

      <div className="space-y-4">

        <div>
          <label className="block mb-1 font-medium">
            担当者
          </label>

          <input
            className="w-full border rounded-lg px-3 py-2"
            value={person}
            onChange={(e) => setPerson(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            案件名
          </label>

          <input
            className="w-full border rounded-lg px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            開始日
          </label>

          <input
            type="date"
            className="w-full border rounded-lg px-3 py-2"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            ステータス
          </label>

          <select
            className="w-full border rounded-lg px-3 py-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>未着手</option>
            <option>進行中</option>
            <option>完了</option>
          </select>
        </div>

        <button
          onClick={handleUpdate}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          更新
        </button>

      </div>
    </div>
  );
}
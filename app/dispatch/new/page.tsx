"use client";

import Link from "next/link";
import { useState } from "react";

export default function NewDispatchPage() {
  const [employee, setEmployee] = useState("");
  const [project, setProject] = useState("");
  const [vendor, setVendor] = useState("");
  const [dispatchDate, setDispatchDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("手配を登録しました。（次のStepで保存機能を追加します）");
  };

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        🚚 新規手配
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-lg border bg-white p-6 shadow"
      >
        <div>
          <label className="block mb-2 font-medium">
            担当者
          </label>

          <input
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
            className="w-full rounded border p-2"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            案件名
          </label>

          <input
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="w-full rounded border p-2"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            配送業者
          </label>

          <input
            value={vendor}
            onChange={(e) => setVendor(e.target.value)}
            className="w-full rounded border p-2"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            手配日
          </label>

          <input
            type="date"
            value={dispatchDate}
            onChange={(e) => setDispatchDate(e.target.value)}
            className="w-full rounded border p-2"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            登録
          </button>

          <Link
            href="/dispatch"
            className="rounded bg-gray-500 px-5 py-2 text-white hover:bg-gray-600"
          >
            戻る
          </Link>
        </div>
      </form>
    </main>
  );
}
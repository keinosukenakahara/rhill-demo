"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Dispatch,
  getDispatches,
  saveDispatches,
} from "@/lib/dispatches";

export default function DispatchPage() {
  const [dispatches, setDispatches] = useState<Dispatch[]>([]);
  const router = useRouter();

  useEffect(() => {
    setDispatches(getDispatches());
  }, []);

  const handleDelete = (id: number) => {
    const ok = window.confirm(
      "この手配を削除しますか？"
    );

    if (!ok) {
      return;
    }

    const current = getDispatches();

    const updated = current.filter(
      (item) => item.id !== id
    );

    saveDispatches(updated);

    setDispatches(updated);

    router.refresh();
  };


  return (
    <main className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          🚚 手配管理
        </h1>

      <div className="mb-6 rounded-lg bg-yellow-50 p-4">

        <h3 className="mb-2 font-bold text-yellow-700">
          🚚 手配管理について
        </h3>

        <p className="leading-7 text-gray-700">
          作業に必要な人員・車両・協力会社などの
          手配状況を管理する画面です。
          手配済・未手配の状態を確認できます。
        </p>

      </div>


        <Link
          href="/dispatch/new"
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          ＋ 新規手配
        </Link>
      </div>

      <div className="overflow-x-auto rounded-lg border bg-white shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">担当者</th>
                <th className="p-3 text-left">案件</th>
                <th className="p-3 text-left">配送業者</th>
                <th className="p-3 text-left">手配日</th>
                <th className="p-3 text-left">ステータス</th>
                <th className="p-3 text-center">操作</th>
              </tr>
            </thead>
        <tbody>
          {dispatches.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-3">{item.employee}</td>

              <td className="p-3">{item.project}</td>

              <td className="p-3">{item.vendor}</td>

              <td className="p-3">{item.dispatchDate}</td>

              <td className="p-3">
                <span
                  className={`rounded-full px-3 py-1 text-sm ${
                    item.status === "手配済"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              <td className="p-3">
                <div className="flex gap-2">
                  <Link
                    href={`/dispatch/${item.id}`}
                    className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
                  >
                    📄 詳細
                  </Link>

                  <Link
                    href={`/dispatch/${item.id}/edit`}
                    className="rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600"
                  >
                    ✏️ 編集
                  </Link>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                  >
                    🗑️ 削除
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
          </table>
        </div>
      </div>

      <Link
        href="/"
        className="inline-block mt-6 rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
      >
        ← 業務ポータルへ戻る
      </Link>
    </main>
  );
}
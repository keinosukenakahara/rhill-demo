"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NewProjectPage() {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <h2 className="text-2xl font-bold mb-6">案件登録</h2>

          <div className="bg-white rounded-xl shadow p-6 max-w-2xl">

            <div className="mb-4">
              <label className="block font-semibold mb-2">
                担当者
              </label>

              <input
                type="text"
                placeholder="担当者名"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-2">
                案件名
              </label>

              <input
                type="text"
                placeholder="案件名"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-2">
                開始日
              </label>

              <input
                type="date"
                className="border rounded-lg px-4 py-2"
              />
            </div>

            <div className="mb-6">
              <label className="block font-semibold mb-2">
                ステータス
              </label>

              <select className="border rounded-lg px-4 py-2 w-full">
                <option>進行中</option>
                <option>待機</option>
                <option>完了</option>
              </select>
            </div>

            {success && (
              <div className="mb-4 rounded-lg bg-green-100 border border-green-400 text-green-700 px-4 py-3">
                ✅ 案件を登録しました。
              </div>
            )}

            <button
              onClick={() => {
                setSuccess(true);

                setTimeout(() => {
                  router.push("/projects");
                }, 1000);
              }} 

              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
            >
              登録
            </button>

            <div className="mt-6">
              <Link
                href="/projects"
                className="text-blue-600 hover:underline"
              >
                ← 案件一覧へ戻る
              </Link>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
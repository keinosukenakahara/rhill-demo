"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import {
  Placement,
  getPlacements,
  savePlacements,
} from "@/lib/placements";


export default function PlacementsPage() {

  const [placements, setPlacements] =
  useState<Placement[]>([]);

  useEffect(() => {
    setPlacements(getPlacements());
  }, []);
  
  function handleReset() {
  if (!confirm("配置データを初期状態へ戻しますか？")) {
    return;
  }

  localStorage.removeItem("placements");

  router.refresh();

  window.location.reload();
}

  const router = useRouter();

  const handleDelete = (id: number) => {
    const ok = window.confirm("この配置を削除しますか？");

    if (!ok) return;

    const updated = getPlacements().filter(
      (item) => item.id !== id
    );

    savePlacements(updated);

    setPlacements(updated);

    router.refresh();
  };

  return (
   
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">配置管理</h2>


            <div className="mb-6 rounded-lg bg-green-50 p-4">

              <h3 className="mb-2 font-bold text-green-700">
                👥 配置管理について
              </h3>

              <p className="leading-7 text-gray-700">
                作業担当者や配置先を管理する画面です。
                案件情報をもとに配置計画を作成し、
                作業開始までの状況を確認できます。
              </p>

            </div>

            <Link
              href="/placements/new"
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              ＋ 新規登録
            </Link>

            <button
              onClick={handleReset}
              className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              🔄 開発データ初期化
            </button>


          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left">ID</th>
                  <th className="px-4 py-3 text-left">担当者</th>
                  <th className="px-4 py-3 text-left">配置先</th>
                  <th className="px-4 py-3 text-left">開始日</th>
                  <th className="px-4 py-3 text-left">ステータス</th>
                  <th className="px-4 py-3 text-center">操作</th>
                </tr>
              </thead>

              <tbody>
                {placements.map((placement) => (
                  <tr
                    key={placement.id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="px-4 py-3">{placement.id}</td>

                    <td className="px-4 py-3">
                      {placement.employee}
                    </td>

                    <td className="px-4 py-3">
                      {placement.destination}
                    </td>

                    <td className="px-4 py-3">
                      {placement.startDate}
                    </td>

                    <td className="px-4 py-3">
                      {placement.status}
                    </td>

                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-3">

                      <Link
                        href={`/placements/${placement.id}`}
                        className="text-blue-600 hover:underline"
                      >
                        詳細
                      </Link>

                      <Link
                        href={`/placements/${placement.id}/edit`}
                        className="text-green-600 hover:underline"
                      >
                        編集
                      </Link>

                      <button
                        onClick={() => handleDelete(placement.id)}
                        className="text-red-600 hover:underline"
                      >
                        削除
                      </button>

                    </div>
                  </td>
                  
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>



  );
}


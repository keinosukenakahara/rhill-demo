"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { placements } from "@/lib/placements";

export default function PlacementEditPage() {
 const router = useRouter();
  const params = useParams();

  const placement = placements.find(
    (p) => p.id === Number(params.id)
  );

  if (!placement) {
    return <div>配置データが見つかりません。</div>;
  }

  const [employee, setEmployee] = useState(placement.employee);
const [destination, setDestination] = useState(placement.destination);
const [startDate, setStartDate] = useState(placement.startDate);
const [status, setStatus] = useState(placement.status);

const [success, setSuccess] = useState(false);

const handleUpdate = () => {
  setSuccess(true);

    setTimeout(() => {
      router.push("/placements");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <h2 className="mb-6 text-2xl font-bold">
            配置編集
          </h2>

          {success && (
            <div className="mb-4 rounded-lg border border-green-400 bg-green-100 px-4 py-3 text-green-700">
              ✅ 配置情報を更新しました。
            </div>
          )}

          <div className="rounded-lg bg-white p-6 shadow space-y-4">

            <div>
              <label className="block mb-1 font-medium">
                担当者
              </label>
              <input
                value={employee}
                onChange={(e) => setEmployee(e.target.value)}
                className="w-full rounded border px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                配置先
              </label>
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full rounded border px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                開始日
              </label>
              <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full rounded border px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                ステータス
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full rounded border px-3 py-2"
              >
                <option>配置予定</option>
                <option>配置中</option>
                <option>完了</option>
              </select>
            </div>

          </div>

          <div className="mt-6 flex gap-3">

            <button
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              保存
            </button>

            <button
              onClick={handleUpdate}
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              更新
            </button>
          </div>

        </main>
      </div>
    </div>
  );
}
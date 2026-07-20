"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  getPlacements,
  savePlacements,
  Placement,
} from "@/lib/placements";

export default function NewPlacementPage() {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [employee, setEmployee] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [status, setStatus] = useState("配置予定");

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8">

          <h2 className="mb-6 text-xl font-bold md:text-2xl">
            配置登録
          </h2>

          <div className="max-w-2xl rounded-xl bg-white p-4 shadow md:p-6">

            <div className="mb-4">
              <label className="block font-semibold mb-2">
                担当者
              </label>

              <input
                type="text"
                placeholder="担当者名"
                value={employee}
                onChange={(e) => setEmployee(e.target.value)}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-2">
                配置先
              </label>

              <input
                type="text"
                placeholder="配置先"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-2">
                開始日
              </label>

              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div className="mb-6">
              <label className="block font-semibold mb-2">
                ステータス
              </label>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border rounded-lg px-4 py-2"
              >
                <option>配置予定</option>
                <option>配置中</option>
                <option>完了</option>
              </select>
            </div>

            {success && (
              <div className="mb-4 rounded-lg border border-green-400 bg-green-100 px-4 py-3 text-green-700">
                ✅ 配置を登録しました。
              </div>
            )}

            <button
              onClick={() => {
                const placements = getPlacements();

                const nextId =
                  placements.length > 0
                  ? Math.max(...placements.map((p) => p.id)) + 1
                  : 1;

                const newPlacement: Placement = {
                  id: nextId,
                  employee,
                  destination,
                  startDate,
                  status,
                };

                placements.push(newPlacement);

                savePlacements(placements);

                setSuccess(true);

                setTimeout(() => {
                  router.push("/placements");
                }, 1000);
              }}
              className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
            >
              登録
            </button>

            <div className="mt-6">
              <Link
                href="/placements"
                className="text-blue-600 hover:underline"
              >
                ← 配置一覧へ戻る
              </Link>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}
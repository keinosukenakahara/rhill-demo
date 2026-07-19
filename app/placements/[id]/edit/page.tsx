"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import {
  getPlacements,
  savePlacements,
} from "@/lib/placements";

export default function PlacementEditPage() {
  const router = useRouter();
  const params = useParams();

  const id = Number(params.id);

  const placement = getPlacements().find(
    (p) => p.id === id
  );

  if (!placement) {
    return (
      <div className="p-8">
        配置データが見つかりません。
      </div>
    );
  }

  const [employee, setEmployee] = useState(
    placement.employee
  );
  const [destination, setDestination] = useState(
    placement.destination
  );
  const [startDate, setStartDate] = useState(
    placement.startDate
  );
  const [status, setStatus] = useState(
    placement.status
  );

  const [success, setSuccess] = useState(false);

  const handleUpdate = () => {
    const updated = getPlacements().map((item) =>
      item.id === id
        ? {
            ...item,
            employee,
            destination,
            startDate,
            status,
          }
        : item
    );

    savePlacements(updated);

    setSuccess(true);

    setTimeout(() => {
      router.push(`/placements/${id}`);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">

          <h2 className="mb-8 text-3xl font-bold">
            配置編集
          </h2>

          {success && (
            <div className="mb-6 rounded-lg border border-green-400 bg-green-100 px-4 py-3 text-green-700">
              ✅ 配置情報を更新しました。
            </div>
          )}

          <div className="max-w-2xl rounded-xl bg-white p-8 shadow space-y-6">

            <div>
              <label className="mb-2 block font-semibold">
                担当者
              </label>

              <input
                value={employee}
                onChange={(e) =>
                  setEmployee(e.target.value)
                }
                className="w-full rounded border px-3 py-2"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                配置先
              </label>

              <input
                value={destination}
                onChange={(e) =>
                  setDestination(e.target.value)
                }
                className="w-full rounded border px-3 py-2"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                開始日
              </label>

              <input
                type="date"
                value={startDate}
                onChange={(e) =>
                  setStartDate(e.target.value)
                }
                className="w-full rounded border px-3 py-2"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                ステータス
              </label>

              <select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value)
                }
                className="w-full rounded border px-3 py-2"
              >
                <option>配置予定</option>
                <option>配置中</option>
                <option>完了</option>
              </select>
            </div>

            <div className="flex gap-3 pt-4">

              <button
                onClick={handleUpdate}
                className="rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
              >
                💾 更新
              </button>

              <Link
                href={`/placements/${id}`}
                className="rounded bg-gray-600 px-5 py-2 text-white hover:bg-gray-700"
              >
                ← 戻る
              </Link>

            </div>

          </div>

        </main>
      </div>
    </div>
  );
}
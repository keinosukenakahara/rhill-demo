"use client";

import { deliveries } from "@/lib/deliveries";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function DeliveryEditPage() {
  const params = useParams();
  const id = params.id as string;
  
  const [employee, setEmployee] = useState("山田 太郎");
  const [destination, setDestination] = useState("大阪市北区");
  const [date, setDate] = useState("2026-07-20");
  const [status, setStatus] = useState("配送予定");

  return (
    <main className="p-8 max-w-2xl">

      <h1 className="text-3xl font-bold mb-6">
        🚚 配送編集
      </h1>

      <div className="bg-white rounded-xl shadow p-6 space-y-5">

        <div>
          <label className="block mb-2 font-semibold">
            担当者
          </label>

          <input
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
            className="w-full rounded border px-4 py-2"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            配送先
          </label>

          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full rounded border px-4 py-2"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            配送予定日
          </label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded border px-4 py-2"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            状態
          </label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded border px-4 py-2"
          >
            <option>配送予定</option>
            <option>配送中</option>
            <option>完了</option>
          </select>
        </div>

        <div className="flex gap-3 pt-4">

          <button
            className="rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            保存
          </button>

          <Link
            href={`/delivery/${id}`}
            className="rounded bg-gray-600 px-5 py-2 text-white hover:bg-gray-700"
          >
            キャンセル
          </Link>

        </div>

      </div>

    </main>
  );
}
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { getPlacements } from "@/lib/placements";

export default function PlacementDetailPage() {
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

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">

          <h2 className="mb-8 text-3xl font-bold">
            配置詳細
          </h2>

          <div className="max-w-2xl rounded-xl bg-white p-8 shadow">

            <div className="space-y-4">

              <div className="flex">
                <div className="w-32 font-semibold">
                  ID
                </div>
                <div>{placement.id}</div>
              </div>

              <div className="flex">
                <div className="w-32 font-semibold">
                  担当者
                </div>
                <div>{placement.employee}</div>
              </div>

              <div className="flex">
                <div className="w-32 font-semibold">
                  配置先
                </div>
                <div>{placement.destination}</div>
              </div>

              <div className="flex">
                <div className="w-32 font-semibold">
                  開始日
                </div>
                <div>{placement.startDate}</div>
              </div>

              <div className="flex">
                <div className="w-32 font-semibold">
                  ステータス
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-sm ${
                    placement.status === "配置予定"
                      ? "bg-yellow-100 text-yellow-700"
                      : placement.status === "配置中"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {placement.status}
                </span>
              </div>

            </div>

            <div className="mt-8 flex gap-3">

              <Link
                href={`/placements/${placement.id}/edit`}
                className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                ✏️ 編集
              </Link>

              <Link
                href="/placements"
                className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
              >
                ← 一覧へ戻る
              </Link>

            </div>

          </div>

        </main>
      </div>
    </div>
  );
}
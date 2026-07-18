"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { placements } from "@/lib/placements";

export default function PlacementsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">配置管理</h2>

            <Link
              href="/placements/new"
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              ＋ 新規登録
            </Link>
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
                      <Link
                        href={`/placements/${placement.id}`}
                        className="text-blue-600 hover:underline"
                      >
                        詳細
                      </Link>
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
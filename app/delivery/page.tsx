"use client";

import { deliveries } from "@/lib/deliveries";
import Link from "next/link";
import { useState } from "react";

export default function DeliveryPage() {

  const [keyword, setKeyword] = useState("");

  const filteredDeliveries = deliveries.filter((delivery) =>
  (
    delivery.employee +
    delivery.destination +
    delivery.status
  ).includes(keyword)
);

  return (
    <main className="p-8">


      <h1 className="text-3xl font-bold mb-6">
        🚚 宅配業務管理
      </h1>

      <div className="mb-6 rounded-lg bg-purple-50 p-4">

        <h3 className="mb-2 font-bold text-purple-700">
          📦 宅配管理について
        </h3>

        <p className="leading-7 text-gray-700">
          作業完了後の商品・機器配送状況を
          管理する画面です。
          配送予定や履歴を確認できます。
        </p>

      </div>

    <div className="mb-4 text-gray-700">

      配送件数：
      <span className="font-bold">
        {filteredDeliveries.length}件
      </span>

    </div>


      <div className="mb-6">

        <div className="text-gray-600">
          配送状況を管理します。
        </div>

      </div>


      <input
        type="text"
        placeholder="担当者・配送先・状態で検索"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="mb-4 w-full rounded border px-4 py-2"
      />

      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-xl font-semibold mb-4">
          配送一覧
        </h2>



        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse">
              <thead>

              <tr className="border-b bg-gray-50">

                <th className="text-left p-3">
                  配送ID
                </th>

                <th className="text-left p-3">
                  担当者
                </th>

                <th className="text-left p-3">
                  配送先
                </th>

                <th className="text-left p-3">
                  配送予定日
                </th>

                <th className="text-left p-3">
                  状態
                </th>

                <th className="text-left p-3">
                  操作
                </th>

              </tr>

            </thead>

            <tbody>
              {filteredDeliveries.map((delivery) => (
                
                <tr
                  key={delivery.id}
                  className="border-b hover:bg-gray-50"
                >


                  <td className="p-3">
                    <Link
                      href={`/delivery/${delivery.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {delivery.id}
                    </Link>
                  </td>


                  <td className="p-3">
                    {delivery.employee}
                  </td>


                  <td className="p-3">
                    {delivery.destination}
                  </td>


                  <td className="p-3">
                    {delivery.date}
                  </td>


                  <td className="p-3">

                    <span
                      className={`
                        px-3 py-1 rounded-full text-sm
                        ${
                          delivery.status === "完了"
                            ? "bg-green-100 text-green-700"
                            : delivery.status === "配送中"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-yellow-100 text-yellow-700"
                        }
                      `}
                    >
                      {delivery.status}
                    </span>

                  </td>

                  <td className="p-3">

                    <div className="flex flex-wrap gap-3">
                      
                      <Link
                        href={`/delivery/${delivery.id}`}
                        className="text-blue-600 hover:underline"
                      >
                        詳細
                      </Link>

                      <Link
                        href={`/delivery/${delivery.id}/edit`}
                        className="text-green-600 hover:underline"
                      >
                        編集
                      </Link>

                      <button
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
      </div>
    </main>
  );
}
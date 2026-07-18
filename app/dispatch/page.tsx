import Link from "next/link";
import { dispatches } from "@/lib/dispatches";

export default function DispatchPage() {
  return (
    <main className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          🚚 手配管理
        </h1>

        <Link
          href="/dispatch/new"
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          ＋ 新規手配
        </Link>
      </div>

      <div className="overflow-x-auto rounded-lg border bg-white shadow">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">担当者</th>
              <th className="p-3 text-left">案件</th>
              <th className="p-3 text-left">配送業者</th>
              <th className="p-3 text-left">手配日</th>
              <th className="p-3 text-left">ステータス</th>
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
              </tr>
            ))}
          </tbody>
        </table>
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
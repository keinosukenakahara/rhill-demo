import Link from "next/link";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { placements } from "@/lib/placements";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PlacementDetailPage({
  params,
}: Props) {
  const { id } = await params;

  const placement = placements.find(
    (p) => p.id === Number(id)
  );

  if (!placement) {
    return <div>配置データが見つかりません。</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <h2 className="mb-6 text-2xl font-bold">
            配置詳細
          </h2>

          <div className="rounded-lg bg-white p-6 shadow space-y-4">
            <p><strong>ID：</strong>{placement.id}</p>
            <p><strong>担当者：</strong>{placement.employee}</p>
            <p><strong>配置先：</strong>{placement.destination}</p>
            <p><strong>開始日：</strong>{placement.startDate}</p>
            <p><strong>ステータス：</strong>{placement.status}</p>
          </div>

          <div className="mt-6">
            <Link
              href={`/placements/${placement.id}/edit`}
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              ✏️ 編集
            </Link>

            <button
              className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              🗑️ 削除
            </button>

            <Link
              href="/placements"
              className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
            >
              ← 配置一覧へ戻る
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
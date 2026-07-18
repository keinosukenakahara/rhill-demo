import Link from "next/link";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { dispatches } from "@/lib/dispatches";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DispatchDetailPage({
  params,
}: Props) {
  const { id } = await params;

  const dispatch  =dispatches.find(
    (p) => p.id === Number(id)
  );

  if (!dispatch ) {
    return <div>手配データが見つかりません。</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <h2 className="mb-6 text-2xl font-bold">
            手配詳細
          </h2>

          <div className="rounded-lg bg-white p-6 shadow space-y-4">
            <p><strong>ID：</strong>{dispatch.id}</p>
            <p><strong>担当者：</strong>{dispatch.employee}</p>
            <p><strong>配置先：</strong>{dispatch.destination}</p>
            <p><strong>開始日：</strong>{dispatch.dispatchDate}</p>
            <p><strong>ステータス：</strong>{dispatch.status}</p>
          </div>

          <div className="mt-6 flex items-center gap-3">

            <Link
              href={`/dispatch/${dispatch.id}/edit`}
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              ✏️ 編集
            </Link>

            <button
              type="button"
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
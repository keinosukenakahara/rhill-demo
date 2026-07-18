import Link from "next/link";

export default function DispatchPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        📋 手配管理システム
      </h1>

      <p className="mb-8 text-gray-600">
        現在、RHILL業務管理システムへ統合中です。
      </p>

      <div className="rounded-lg border bg-white p-6 shadow">
        <h2 className="text-xl font-semibold mb-4">
          今後実装予定
        </h2>

        <ul className="list-disc ml-6 space-y-2">
          <li>案件手配</li>
          <li>担当者管理</li>
          <li>進捗管理</li>
          <li>完了管理</li>
        </ul>
      </div>

      <Link
        href="/"
        className="inline-block mt-8 rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
      >
        ← 業務ポータルへ戻る
      </Link>
    </main>
  );
}
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <nav>
        <ul className="space-y-3">

          <li>
            <Link
              href="/"
              className="block rounded px-3 py-2 hover:bg-gray-700"
            >
              🏠 業務ポータル
            </Link>
          </li>

          <li>
            <Link
              href="/projects"
              className="block rounded px-3 py-2 hover:bg-gray-700"
            >
              📦 案件管理
            </Link>
          </li>

          <li>
            <Link
              href="/placements"
              className="block rounded px-3 py-2 hover:bg-gray-700"
            >
              👥 配置管理
            </Link>
          </li>

          <li>
            <Link
              href="/delivery"
              className="block rounded px-3 py-2 hover:bg-gray-700"
            >
              🚚 宅配管理
            </Link>
          </li>

          <li>
            <Link
              href="/dispatch"
              className="block rounded px-3 py-2 hover:bg-gray-700"
            >
              📋 手配管理
            </Link>
          </li>

          <li>
            <Link
              href="/system"
              className="block rounded px-3 py-2 hover:bg-gray-700"
            >
              🏗 システム構成
            </Link>
          </li>

          <li className="rounded px-3 py-2 text-gray-400">
            📊 分析（準備中）
          </li>

          <li className="rounded px-3 py-2 text-gray-400">
            ⚙ マスタ管理（準備中）
          </li>

        </ul>
      </nav>
    </aside>
  );
}
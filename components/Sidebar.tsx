import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">

      <div className="mb-6 text-xl font-bold">
        RHILL
        <br />
        業務管理システム
      </div>

      <nav>
        <ul className="space-y-3">

          <li>
            <Link
              href="/"
              className="block rounded px-3 py-2 hover:bg-gray-700"
            >
              🏠 ダッシュボード
            </Link>
          </li>


          <li>
            <Link
              href="/projects"
              className="block rounded px-3 py-2 hover:bg-gray-700"
            >
              📁 案件管理
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
              href="/dispatch"
              className="block rounded px-3 py-2 hover:bg-gray-700"
            >
              🚚 手配管理
            </Link>
          </li>

        <li>
          <Link href="/shifts">
            📅 稼働表・発注書
          </Link>
        </li>

        <li>
          <Link href="/counts">
            📦 件数管理
          </Link>
        </li>

        <li>
          <Link href="/payment">
            📄 支払通知書
          </Link>
        </li>

        <li>
          <Link href="/advance">
            💴 前払い管理
          </Link>
        </li>

        <li>
          <Link href="/staff">
            👤 スタッフ管理
          </Link>
        </li>

        <Link href="/counts">
        📦 件数管理
        </Link>

        <Link href="/payment">
          📄 支払通知書
        </Link>

        <Link href="/advance">
          💴 前払い管理
        </Link>


          <li>
            <Link
              href="/delivery"
              className="block rounded px-3 py-2 hover:bg-gray-700"
            >
              📦 宅配管理
            </Link>
          </li>


          <hr className="my-4 border-gray-600" />


          <li>
            <div
              className="block rounded px-3 py-2 text-gray-400"
            >
              ⚙ システム管理（予定）
            </div>
          </li>


        </ul>
      </nav>

    </aside>
  );
}
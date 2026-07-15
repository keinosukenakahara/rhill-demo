export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <nav>
        <ul className="space-y-3">
          <li className="hover:text-yellow-300 cursor-pointer">
            ダッシュボード
          </li>

          <li className="hover:text-yellow-300 cursor-pointer">
            案件一覧
          </li>

          <li className="hover:text-yellow-300 cursor-pointer">
            配置計画
          </li>

          <li className="hover:text-yellow-300 cursor-pointer">
            受入確認
          </li>

          <li className="hover:text-yellow-300 cursor-pointer">
            完了
          </li>
        </ul>
      </nav>
    </aside>
  );
}




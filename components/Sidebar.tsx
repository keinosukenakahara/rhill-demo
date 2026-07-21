"use client";

import Link from "next/link";

type Props = {
  mobile?: boolean;
};


export default function Sidebar({
  mobile = false,
}: Props) {


  return (

    <aside
      className={`
        w-64 bg-gray-800 text-white p-4
        ${mobile ? "min-h-screen" : "hidden md:block min-h-screen"}
      `}
    >

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
            <Link
              href="/delivery"
              className="block rounded px-3 py-2 hover:bg-gray-700"
            >
              📦 宅配管理
            </Link>
          </li>


          <li>
            <Link
              href="/shifts"
              className="block rounded px-3 py-2 hover:bg-gray-700"
            >
              📅 稼働表・発注書
            </Link>
          </li>


          <li>
            <Link
              href="/counts"
              className="block rounded px-3 py-2 hover:bg-gray-700"
            >
              📦 件数管理
            </Link>
          </li>


          <li>
            <Link
              href="/payment"
              className="block rounded px-3 py-2 hover:bg-gray-700"
            >
              📄 支払通知書
            </Link>
          </li>


          <li>
            <Link
              href="/advance"
              className="block rounded px-3 py-2 hover:bg-gray-700"
            >
              💴 前払い管理
            </Link>
          </li>


          <li>
            <Link
              href="/staff"
              className="block rounded px-3 py-2 hover:bg-gray-700"
            >
              👤 スタッフ管理
            </Link>
          </li>


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
            <div className="px-3 py-2 text-gray-400">
              ⚙ システム管理（予定）
            </div>
          </li>


        </ul>

      </nav>


    </aside>

  );
}
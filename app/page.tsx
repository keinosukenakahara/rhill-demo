import Link from "next/link";
import DashboardCard from "@/components/DashboardCard";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-100">

      <Header />

      <div className="flex">

        <Sidebar />
        
          <main className="flex-1 p-8">

            <h2 className="text-3xl font-bold mb-2">
              RHILL 業務管理システム
            </h2>

            <p className="text-gray-600 mb-8">
              各業務システムへアクセスするポータル画面です。
            </p>

            <div className="grid grid-cols-2 gap-6">

              <Link href="/projects">
                <DashboardCard
                  title="配置管理システム"
                  value="案件・配置"
                  icon="📦"
                  change="案件登録・編集・配置管理"
                />
              </Link>

              <Link href="/delivery">
                <DashboardCard
                    title="宅配業務管理"
                    value="配送管理"
                    icon="🚚"
                    change="配送状況・配送履歴"
                />
              </Link>

              <Link href="/dispatch">
                <DashboardCard
                    title="手配管理システム"
                    value="手配管理"
                    icon="📋"
                    change="案件手配・進捗管理"
                />
              </Link>

              <DashboardCard
                  title="今後追加予定"
                  value="Coming Soon"
                  icon="📈"
                  change="分析・マスタ・権限管理"
              />

            </div>

            <div className="mt-10 rounded-lg bg-white p-6 shadow">
              <h3 className="mb-4 text-2xl font-bold text-blue-700">
                📢 レビューのお願い
              </h3>

              <p className="mb-4 leading-8 text-gray-700">
                本システムは、配置管理・宅配管理・手配管理を統合した
                「RHILL業務管理システム」のデモ版です。
              </p>

              <p className="mb-4 leading-8 text-gray-700">
                今回のレビューでは、画面構成・操作性・業務フローを中心に
                ご確認いただき、ご意見・ご要望を今後の開発へ反映したいと考えております。
              </p>

              <div className="mt-6 rounded-lg bg-blue-50 p-4">
                <h4 className="mb-3 font-bold text-blue-700">
                  今後実装予定
                </h4>

                <ul className="list-disc space-y-2 pl-6">
                  <li>🔐 ログイン・ユーザー認証</li>
                  <li>👥 権限管理（管理者・一般ユーザー）</li>
                  <li>🗄 データベース（Supabase）対応</li>
                  <li>📊 分析ダッシュボード</li>
                  <li>📄 CSV・PDF出力</li>
                  <li>📧 メール通知</li>
                  <li>📱 スマートフォン最適化</li>
                </ul>
              </div>

              <p className="mt-6 text-sm text-gray-500">
                ※ 上記機能はレビュー結果を反映した上で、優先順位を決定し実装予定です。
              </p>
            </div>
          </main>
      </div>

    </div>
  );
}
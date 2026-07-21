import Link from "next/link";
import DashboardCard from "@/components/DashboardCard";
import { getProjects } from "@/lib/projects";
import { getPlacements } from "@/lib/placements";
import { getDispatches } from "@/lib/dispatches";
import { dashboardData } from "@/lib/dashboard";

export default function Home() {

  const projects = getProjects();
  const placements = getPlacements();
  const dispatches = getDispatches();

  const completedDispatches = dispatches.filter(
    (d) => d.status === "手配済"
  ).length;

  const waitingDispatches = dispatches.filter(
    (d) => d.status === "未手配"
  ).length;

  const plannedPlacements = placements.filter(
    (p) => p.status === "配置予定"
  ).length;


  const activePlacements = placements.filter(
    (p) => p.status === "配置中"
  ).length;


  const completedPlacements = placements.filter(
    (p) => p.status === "完了"
  ).length;

return (
  <div className="min-h-screen bg-gray-100">

    <main className="flex-1 p-8">

            <h2 className="text-3xl font-bold mb-2">
              業務管理システム
            </h2>

            <p className="text-gray-600 mb-4">
              案件登録から配置・手配・配送までの業務フローを
              一元管理する業務管理システムです。
            </p>

            <p className="text-gray-600 mb-8">
              本画面はレビュー版ポータルとして、
              各管理機能へアクセスできます。
            </p>

           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

              <Link href="/projects">
                <DashboardCard
                  title="案件・配置管理"
                  value={`案件 ${projects.length}件`}
                  icon="👥"
                  change={`配置予定 ${plannedPlacements}件 / 配置中 ${activePlacements}件`}
                />
              </Link>

              <Link href="/delivery">
                <DashboardCard
                    title="配送管理"
                    value="配送管理"
                    icon="🚚"
                    change="配送状況・配送履歴"
                />
              </Link>

              <Link href="/dispatch">
                <DashboardCard
                  title="手配管理"
                  value={`${dispatches.length}件`}
                  icon="📋"
                  change={`手配済 ${completedDispatches}件 / 未手配 ${waitingDispatches}件`}
                  />
              </Link>


              <DashboardCard
                title="拡張機能（予定）"
                value="Future"
                icon="⚙️"
                change="ログイン・権限・分析・DB連携"
              />

              <DashboardCard
                  title="今後追加予定"
                  value="Coming Soon"
                  icon="📈"
                  change="分析・マスタ・権限管理"
              />

          <DashboardCard

          title="スタッフ数"

          value={`${dashboardData.staffs}名`}

          description="稼働スタッフ"

          />


          <DashboardCard

          title="件数承認待ち"

          value={`${dashboardData.pendingCounts}件`}

          description="確認が必要"

          />


          <DashboardCard

          title="支払確定"

          value={`${dashboardData.paymentDone}名`}

          description="今月確定"

          />


          <DashboardCard

          title="前払い申請"

          value={`${dashboardData.advanceRequests}件`}

          description="承認待ち"

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
      );
}
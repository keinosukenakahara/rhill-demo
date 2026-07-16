import Link from "next/link";
import DashboardCard from "@/components/DashboardCard";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { projects } from "@/lib/projects";

export default function Home() {

    const totalProjects = projects.length;

    const inProgress = projects.filter(
      (p) => p.status === "進行中"
    ).length;

    const completed = projects.filter(
      (p) => p.status === "完了"
    ).length;

    const notStarted = projects.filter(
      (p) => p.status === "未着手"
    ).length;

  return (
    <div className="min-h-screen bg-gray-100">

      <Header />

      <div className="flex">

        <Sidebar />
        
          <main className="flex-1 p-8">

            <h2 className="text-3xl font-bold mb-8">
              ダッシュボード
            </h2>

            <div className="grid grid-cols-2 gap-6">

              <Link href="/projects">
                <DashboardCard
                    title="案件数"
                    value={`${totalProjects}件`}
                    icon="📦"
                    change="↑ +2 本日"
                />
              </Link>

              <Link href="/waiting">
                <DashboardCard
                    title="未着手"
                    value={`${notStarted}件`}
                    icon="👤"
                    change="↓ -1 昨日"
                />
              </Link>

              <Link href="/receiving">
                <DashboardCard
                    title="進行中"
                    value={`${inProgress}件`}
                    icon="📝"
                    change="↑ +1 本日"
                />
              </Link>

              <Link href="/completed">
                <DashboardCard
                    title="完了"
                    value={`${completed}件`}
                    icon="✅"
                    change="↑ +5 今週"
                />
              </Link>

            </div>
            
          </main>

      </div>

    </div>
  );
}
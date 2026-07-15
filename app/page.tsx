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

            <h2 className="text-3xl font-bold mb-8">
              ダッシュボード
            </h2>

            <div className="grid grid-cols-2 gap-6">

              <DashboardCard
                title="案件数"
                value="18件"
              />

              <DashboardCard
                title="配置待ち"
                value="6件"
              />

              <DashboardCard
                title="受入確認"
                value="4件"
              />

              <DashboardCard
                title="完了"
                value="12件"
              />

            </div>
            
          </main>

      </div>

    </div>
  );
}
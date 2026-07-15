import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Header />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8">

          <h2 className="text-3xl font-bold mb-6">
            ダッシュボード
          </h2>

          <div className="bg-white rounded-lg shadow p-6">
            レビュー用デモです。
          </div>

        </main>

      </div>

    </div>
  );
}
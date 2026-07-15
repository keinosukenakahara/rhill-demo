import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function ReceivingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <h2 className="text-3xl font-bold mb-6">
            受入確認一覧
          </h2>

          <div className="bg-white rounded-lg shadow p-6">
            <p>ここに受入確認案件を表示します。</p>
          </div>
        </main>
      </div>
    </div>
  );
}
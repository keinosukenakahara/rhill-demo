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

              <div className="bg-white rounded-lg shadow p-6">
                <p className="text-gray-500">
                  案件数
                </p>

                <p className="text-4xl font-bold mt-4">
                  18件
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <p className="text-gray-500">
                  配置待ち
                </p>

                <p className="text-4xl font-bold mt-4">
                  6件
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <p className="text-gray-500">
                  受入確認
                </p>

                <p className="text-4xl font-bold mt-4">
                  4件
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <p className="text-gray-500">
                  完了
                </p>

                <p className="text-4xl font-bold mt-4">
                  12件
                </p>
              </div>

            </div>

          </main>

      </div>

    </div>
  );
}
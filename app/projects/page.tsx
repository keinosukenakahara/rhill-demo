import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <h2 className="text-3xl font-bold mb-6">
            案件一覧
          </h2>

          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600">
              ここに案件一覧が表示されます。
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
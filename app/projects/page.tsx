import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const projects = [
  {
    id: 1,
    employee: "山田 太郎",
    project: "PCキッティング",
    status: "進行中",
    start: "2026/07/01",
  },
  {
    id: 2,
    employee: "佐藤 花子",
    project: "LAN配線工事",
    status: "完了",
    start: "2026/06/15",
  },
  {
    id: 3,
    employee: "鈴木 一郎",
    project: "ネットワーク構築",
    status: "待機",
    start: "2026/08/01",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-6">
            案件一覧
          </h1>

          <div className="bg-white rounded-lg shadow">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-4">社員名</th>
                  <th className="text-left p-4">案件名</th>
                  <th className="text-left p-4">ステータス</th>
                  <th className="text-left p-4">開始日</th>
                </tr>
              </thead>

              <tbody>
                {projects.map((project) => (
                  <tr
                    key={project.id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="p-4">{project.employee}</td>
                    <td className="p-4">{project.project}</td>
                    <td className="p-4">
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                        {project.status}
                      </span>
                    </td>
                    <td className="p-4">{project.start}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
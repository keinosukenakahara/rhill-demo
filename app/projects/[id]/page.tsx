import ProjectActions from "@/components/ProjectActions";
import Link from "next/link";
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

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <div>案件が見つかりません。</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">

          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">
              ダッシュボード
            </Link>

            <span className="mx-2">›</span>

            <Link href="/projects" className="hover:underline">
              案件一覧
            </Link>

            <span className="mx-2">›</span>

            <span className="text-gray-700 font-medium">
              案件詳細
            </span>
          </nav>

          <h1 className="text-3xl font-bold mb-8">
            案件詳細
          </h1>

          <div className="bg-white rounded-xl shadow p-8 space-y-4 max-w-xl">

            <div className="flex">
              <div className="w-32 font-semibold">案件ID</div>
              <div>{project.id}</div>
            </div>

            <div className="flex">
              <div className="w-32 font-semibold">担当者</div>
              <div>{project.employee}</div>
            </div>

            <div className="flex">
              <div className="w-32 font-semibold">案件名</div>
              <div>{project.project}</div>
            </div>

            <div className="flex">
              <div className="w-32 font-semibold">開始日</div>
              <div>{project.start}</div>
            </div>

            <div className="flex">
              <div className="w-32 font-semibold">ステータス</div>

              <span
                className={`px-3 py-1 rounded-full text-sm
                ${
                  project.status === "進行中"
                    ? "bg-blue-100 text-blue-700"
                    : project.status === "完了"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {project.status}
              </span>
            </div>

            <ProjectActions />

            <div className="pt-6">
              <Link
                href="/projects"
                className="text-blue-600 hover:underline"
              >
                ← 案件一覧へ戻る
              </Link>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
"use client";

import Link from "next/link";
import { useState } from "react";
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
  const [search, setSearch] = useState("");
  const filteredProjects = projects.filter((project) =>
    project.employee.toLowerCase().includes(search.toLowerCase()) ||
    project.project.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">

        <div className="flex justify-between items-center mb-6">
        
            <h1 className="text-3xl font-bold">
              案件一覧
            </h1>

            <Link
              href="/projects/new"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              ＋ 新規案件
            </Link>

          </div>

        <div className="mb-6">
            <input
              type="text"
              placeholder="社員名・案件名で検索"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-80 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

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
                 {filteredProjects.map((project) => (
                  <tr
                    key={project.id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="p-4">{project.employee}</td>

                    <td className="p-4">
                      <Link
                        href={`/projects/${project.id}`}
                        className="text-blue-600 hover:underline"
                      >
                        {project.project}
                      </Link>
                    </td>
                    
                    <td className="p-4">
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
"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { projects, type Project } from "@/lib/projects";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const filteredProjects: Project[] = projects.filter((project) =>{
    const keyword = search.toLowerCase();

    return (
      project.employee.toLowerCase().includes(keyword) ||
      project.project.toLowerCase().includes(keyword)
    );
  });

  console.log("検索文字:", search);
  console.log("結果:", filteredProjects); 

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

          <p className="mb-4 text-sm text-gray-600">
          検索結果：{filteredProjects.length}件
          </p>

          <div className="bg-white rounded-lg shadow">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-4">社員名</th>
                  <th className="text-left p-4">案件名</th>
                  <th className="text-left p-4">ステータス</th>
                  <th className="text-left p-4">開始日</th>
                  <th className="text-left p-4">操作</th>
                </tr>
              </thead>

              <tbody>
                {filteredProjects.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="p-8 text-center text-gray-500"
                    >
                      該当する案件がありません。
                    </td>
                  </tr>
                ) : (
                  filteredProjects.map((project: Project) => (
                    <tr
                      key={project.id}
                      className="border-t hover:bg-gray-50"
                    >
                      <td className="p-4">
                        {project.employee}
                      </td>

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

                      <td className="p-4">
                        {project.start}
                      </td>

                      <td className="p-4">
                        <Link
                          href={`/projects/${project.id}/edit`}
                          className="text-blue-600 hover:underline"
                        >
                          編集
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
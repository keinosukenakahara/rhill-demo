"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProjectActions from "@/components/ProjectActions";

import {
  getProjects,
  type Project,
} from "@/lib/projects";

import {
  getPlacements,
  type Placement,
} from "@/lib/placements";

import {
  getDispatches,
  type Dispatch,
} from "@/lib/dispatches";

export default function ProjectDetail() {
  const params = useParams();
  const id = Number(params.id);

  const [project, setProject] = useState<Project | null>(null);
  const [placement, setPlacement] = useState<Placement | null>(null);
  const [dispatch, setDispatch] = useState<Dispatch | null>(null);

  useEffect(() => {
    const p =
      getProjects().find((item) => item.id === id) ?? null;

    setProject(p);

    if (p) {
      setPlacement(
        getPlacements().find(
          (item) => item.employee === p.employee
        ) ?? null
      );

      setDispatch(
        getDispatches().find(
          (item) => item.project === p.project
        ) ?? null
      );
    }
  }, [id]);

  if (!project) {
    return (
      <div className="p-8">
        案件が見つかりません。
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">

          <nav className="mb-4 text-sm text-gray-500">
            <Link href="/" className="hover:underline">
              ダッシュボード
            </Link>

            <span className="mx-2">›</span>

            <Link href="/projects" className="hover:underline">
              案件一覧
            </Link>

            <span className="mx-2">›</span>

            <span className="font-medium text-gray-700">
              案件詳細
            </span>
          </nav>

          <h1 className="mb-8 text-3xl font-bold">
            案件詳細
          </h1>

          <div className="max-w-3xl rounded-xl bg-white p-8 shadow">

            <div className="space-y-4">

              <div className="flex">
                <div className="w-32 font-semibold">
                  案件ID
                </div>
                <div>{project.id}</div>
              </div>

              <div className="flex">
                <div className="w-32 font-semibold">
                  担当者
                </div>
                <div>{project.employee}</div>
              </div>

              <div className="flex">
                <div className="w-32 font-semibold">
                  案件名
                </div>
                <div>{project.project}</div>
              </div>

              <div className="flex">
                <div className="w-32 font-semibold">
                  開始日
                </div>
                <div>{project.start}</div>
              </div>

              <div className="flex">
                <div className="w-32 font-semibold">
                  ステータス
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-sm ${
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

            </div>

            {placement && (
              <div className="mt-8 rounded-lg border bg-gray-50 p-6">

                <h2 className="mb-4 text-xl font-bold">
                  📍 配置情報
                </h2>

                <div className="space-y-3">

                  <div className="flex">
                    <div className="w-32 font-semibold">
                      配置先
                    </div>
                    <div>{placement.destination}</div>
                  </div>

                  <div className="flex">
                    <div className="w-32 font-semibold">
                      開始日
                    </div>
                    <div>{placement.startDate}</div>
                  </div>

                  <div className="flex">
                    <div className="w-32 font-semibold">
                      ステータス
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-sm ${
                        placement.status === "配置予定"
                          ? "bg-yellow-100 text-yellow-700"
                          : placement.status === "配置中"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {placement.status}
                    </span>

                  </div>

                </div>

              </div>
            )}

            {dispatch && (
              <div className="mt-8 rounded-lg border bg-gray-50 p-6">

                <h2 className="mb-4 text-xl font-bold">
                  🚚 手配情報
                </h2>

                <div className="space-y-3">

                  <div className="flex">
                    <div className="w-32 font-semibold">
                      配送業者
                    </div>
                    <div>{dispatch.vendor}</div>
                  </div>

                  <div className="flex">
                    <div className="w-32 font-semibold">
                      手配日
                    </div>
                    <div>{dispatch.dispatchDate}</div>
                  </div>

                  <div className="flex">
                    <div className="w-32 font-semibold">
                      ステータス
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-sm ${
                        dispatch.status === "手配済"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {dispatch.status}
                    </span>

                  </div>

                </div>

              </div>
            )}

            <ProjectActions projectId={project.id} />

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
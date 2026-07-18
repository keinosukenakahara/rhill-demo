"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Dispatch,
  getDispatches,
  saveDispatches,
} from "@/lib/dispatches";
export default function EditDispatchPage() {

  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);

  const [dispatch, setDispatch] = useState<Dispatch | null>(null);
  const [employee, setEmployee] = useState("");
  const [project, setProject] = useState("");
  const [vendor, setVendor] = useState("");
  const [dispatchDate, setDispatchDate] = useState("");

  useEffect(() => {

    const list = getDispatches();

    const target = list.find(
      (item) => item.id === id
    );

    if (target) {
      setDispatch(target);

      setEmployee(target.employee);
      setProject(target.project);
      setVendor(target.vendor);
      setDispatchDate(target.dispatchDate);
    }

  }, [id]);


    const handleSave = () => {

    const list = getDispatches();

    const updated = list.map((item) =>
      item.id === id
        ? {
            ...item,
            employee,
            project,
            vendor,
            dispatchDate,
          }
        : item
    );

    saveDispatches(updated);

    router.push("/dispatch");
  };


  if (!dispatch) {
    return (
      <main className="p-8">
        データを読み込み中です...
      </main>
    );
  }


  return (
    <main className="max-w-2xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-6">
        ✏️ 手配編集
      </h1>


      <div className="rounded-lg border bg-white p-6 shadow">

        <div className="mb-4">
          <label className="block mb-2 font-medium">
            担当者
          </label>

          <input
            value={dispatch.employee}
            readOnly
            className="w-full rounded border p-2 bg-gray-100"
          />
        </div>


        <div className="mb-4">
          <label className="block mb-2 font-medium">
            案件名
          </label>

          <input
            value={dispatch.project}
            readOnly
            className="w-full rounded border p-2 bg-gray-100"
          />
        </div>


        <div className="mb-4">
          <label className="block mb-2 font-medium">
            配送業者
          </label>

          <input
            value={dispatch.vendor}
            readOnly
            className="w-full rounded border p-2 bg-gray-100"
          />
        </div>


        <div>
          <label className="block mb-2 font-medium">
            手配日
          </label>

          <input
            value={dispatch.dispatchDate}
            readOnly
            className="w-full rounded border p-2 bg-gray-100"
          />
        </div>

      </div>


      <Link
        href="/dispatch"
        className="inline-block mt-6 rounded bg-gray-600 px-4 py-2 text-white"
      >
        ← 手配一覧へ戻る
      </Link>

    </main>
  );
}
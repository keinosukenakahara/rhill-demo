"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Dispatch,
  getDispatches,
  saveDispatches,
} from "@/lib/dispatches";


export default function DispatchDetailPage() {

  const params = useParams();
  const router = useRouter();

  const id = Number(params.id);

  const [dispatch, setDispatch] =
    useState<Dispatch | null>(null);


  useEffect(() => {

    const data = getDispatches();

    const target = data.find(
      (item) => item.id === id
    );

    setDispatch(target ?? null);

  }, [id]);



  if (!dispatch) {
    return (
      <div className="p-6">
        手配データがありません。
      </div>
    );
  }



  const handleDelete = () => {

    const ok = window.confirm(
      "この手配を削除しますか？"
    );


    if (!ok) return;


    const data = getDispatches();


    const newData =
      data.filter(
        (item) => item.id !== id
      );


    saveDispatches(newData);


    router.push("/dispatch");

  };



  return (

    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        手配詳細
      </h1>


      <div className="bg-white rounded-lg shadow p-6 space-y-4">


        <div>
          <span className="font-bold">
            手配ID：
          </span>
          {dispatch.id}
        </div>


        <div>
          <span className="font-bold">
            社員名：
          </span>
          {dispatch.employee}
        </div>


        <div>
          <span className="font-bold">
            案件名：
          </span>
          {dispatch.project}
        </div>


        <div>
          <span className="font-bold">
            ステータス：
          </span>
          {dispatch.status}
        </div>

        <div>
          <span className="font-bold">
            手配先：
          </span>
          {dispatch.vendor}
        </div>


        <div>
          <span className="font-bold">
            手配日：
          </span>
          {dispatch.dispatchDate}
        </div>



        <div className="flex gap-3 pt-4">


          <Link
            href={`/dispatch/${dispatch.id}/edit`}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            編集
          </Link>



          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            削除
          </button>


        </div>


      </div>


      <Link
        href="/dispatch"
        className="inline-block mt-6 text-blue-600"
      >
        ← 手配一覧へ戻る
      </Link>


    </div>

  );

}
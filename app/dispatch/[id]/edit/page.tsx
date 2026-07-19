"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Dispatch,
  getDispatches,
  saveDispatches,
} from "@/lib/dispatches";


export default function DispatchEditPage() {

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



  const handleSave = () => {


    const data = getDispatches();


    const newData =
      data.map((item) =>
        item.id === id
          ? dispatch
          : item
      );


    saveDispatches(newData);


    alert("手配情報を更新しました");


    router.push(
      `/dispatch/${id}`
    );

  };



  return (

    <div className="p-6">


      <h1 className="text-2xl font-bold mb-6">
        手配編集
      </h1>



      <div className="bg-white shadow rounded-lg p-6 space-y-4">


        <div>

          <label className="block font-bold mb-1">
            社員名
          </label>

          <input

            value={dispatch.employee}

            onChange={(e)=>
              setDispatch({
                ...dispatch,
                employee:e.target.value
              })
            }

            className="border rounded px-3 py-2 w-full"

          />

        </div>




        <div>

          <label className="block font-bold mb-1">
            案件名
          </label>


          <input

            value={dispatch.project}

            onChange={(e)=>
              setDispatch({
                ...dispatch,
                project:e.target.value
              })
            }


            className="border rounded px-3 py-2 w-full"

          />


        </div>




        <div>

          <label className="block font-bold mb-1">
            ステータス
          </label>


          <select

            value={dispatch.status}

            onChange={(e)=>
              setDispatch({
                ...dispatch,
                status:e.target.value
              })
            }


            className="border rounded px-3 py-2 w-full"

          >

            <option>
              配置予定
            </option>

            <option>
              配置済
            </option>

            <option>
              完了
            </option>


          </select>


        </div>




        <button

          onClick={handleSave}

          className="bg-green-600 text-white px-5 py-2 rounded"

        >

          保存

        </button>


      </div>


    </div>

  );

}
"use client";

import {
  Staff,
  getStaffs,
  saveStaffs
} from "@/lib/staffs";

import {
  useEffect,
  useState
} from "react";

export default function StaffPage() {

  const [staffList,setStaffList] = useState<Staff[]>([]);

  useEffect(()=>{

    setStaffList(
      getStaffs()
    );

  },[]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-6">
        👤 スタッフ管理
      </h1>


      <div className="bg-white rounded-lg shadow p-6">


        <div className="flex justify-between items-center mb-4">

          <h2 className="text-xl font-bold">
            スタッフ一覧
          </h2>


          <button
            className="
            bg-blue-600
            text-white
            px-4
            py-2
            rounded
            "
          >
            ＋ スタッフ追加
          </button>

        </div>



        <table className="w-full border-collapse">


          <thead>

            <tr className="bg-gray-100">

              <th className="border p-3">
                No.
              </th>

              <th className="border p-3">
                氏名
              </th>

              <th className="border p-3">
                契約形態
              </th>

              <th className="border p-3">
                配送単価
              </th>

              <th className="border p-3">
                インボイス
              </th>

              <th className="border p-3">
                状態
              </th>

              <th className="border p-3">
                操作
              </th>

            </tr>

          </thead>


          <tbody>


          {staffList.map((staff)=>(
            <tr key={staff.id}>


              <td className="border p-3 text-center">
                {staff.id}
              </td>


              <td className="border p-3">
                {staff.name}
              </td>


              <td className="border p-3">
                {staff.contract}
              </td>


              <td className="border p-3 text-right">
                {staff.unitPrice}円
              </td>


              <td className="border p-3">
                {staff.invoice}
              </td>


              <td className="border p-3">
                <span
                  className="
                  bg-green-100
                  text-green-700
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  "
                >
                  {staff.status}
                </span>
              </td>


              <td className="border p-3">

                <button
                 
                className="
                border
                px-3
                py-1
                rounded
                "
                >
                編集
                </button>


                <button

                onClick={()=>{

                const updated =
                staffList.filter(
                (s)=>s.id !== staff.id
                );


                setStaffList(updated);

                saveStaffs(updated);


                }}

                className="
                bg-red-500
                text-white
                px-3
                py-1
                rounded
                ml-2
                "
                >

                削除
                </button>

              </td>


            </tr>

          ))}


          </tbody>


        </table>


      </div>

    </div>
  );
}
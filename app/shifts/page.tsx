import { shifts } from "@/lib/shifts";


export default function ShiftsPage(){

return (

<div className="min-h-screen bg-gray-100 p-8">


<h1 className="text-3xl font-bold mb-6">
📅 稼働表・発注書
</h1>



<div className="bg-white rounded shadow p-6">


<h2 className="text-xl font-bold mb-4">
2026年7月 稼働表
</h2>


<table className="w-full border">


<thead>

<tr className="bg-gray-100">

<th className="border p-3">
スタッフ
</th>

<th className="border p-3">
地区
</th>

<th className="border p-3">
日付
</th>

<th className="border p-3">
勤務
</th>

<th className="border p-3">
状態
</th>

</tr>

</thead>


<tbody>


{
shifts.map((shift)=>(

<tr key={shift.id}>


<td className="border p-3">
{shift.staff}
</td>


<td className="border p-3">
{shift.area}
</td>


<td className="border p-3">
{shift.date}
</td>


<td className="border p-3 text-center">
{shift.workType}
</td>


<td className="border p-3">
{shift.status}
</td>


</tr>

))
}


</tbody>


</table>



<div className="mt-6">


<button
className="
bg-blue-600
text-white
px-5
py-2
rounded
"
>

📄 発注書生成

</button>


</div>


</div>


</div>

);

}
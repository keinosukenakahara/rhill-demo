import { counts } from "@/lib/counts";


export default function CountsPage(){


const unitPrice = 182;



return (

<div className="min-h-screen bg-gray-100 p-8">


<h1 className="text-3xl font-bold mb-6">
📦 件数管理
</h1>



<div className="bg-white rounded shadow p-6">


<div className="mb-5">

<h2 className="text-xl font-bold">
宮崎 圭二
</h2>

<p>
2026年7月 配達実績
</p>

</div>



<table className="w-full border">


<thead>

<tr className="bg-gray-100">

<th className="border p-3">
日付
</th>

<th className="border p-3">
配達完了
</th>


<th className="border p-3">
転居
</th>


<th className="border p-3">
夜間
</th>


<th className="border p-3">
売上
</th>


</tr>

</thead>



<tbody>


{
counts.map((item)=>{


const amount =
(item.delivery + item.transfer)
*
unitPrice;



return (

<tr key={item.id}>


<td className="border p-3">
{item.date}
</td>


<td className="border p-3 text-center">
{item.delivery}
</td>


<td className="border p-3 text-center">
{item.transfer}
</td>


<td className="border p-3 text-center">
{item.night}
</td>


<td className="border p-3 text-right font-bold">

{amount.toLocaleString()}円

</td>


</tr>


)

})

}



</tbody>


</table>



<div className="mt-6 text-right">


<button
className="
bg-green-600
text-white
px-6
py-3
rounded
"
>

✅ 件数確定

</button>


</div>


</div>


</div>


);


}
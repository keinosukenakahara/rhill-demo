import { advances } from "@/lib/advances";


export default function AdvancePage(){


return (

<div className="min-h-screen bg-gray-100 p-8">


<h1 className="text-3xl font-bold mb-6">
💴 前払い管理
</h1>



<div className="bg-white rounded shadow p-6">



<h2 className="text-xl font-bold mb-5">

前払い可能額一覧

</h2>



<table className="w-full border">


<thead>


<tr className="bg-gray-100">


<th className="border p-3">
スタッフ
</th>


<th className="border p-3">
売上
</th>


<th className="border p-3">
控除
</th>


<th className="border p-3">
前払済
</th>


<th className="border p-3">
前払可能額
</th>


<th className="border p-3">
操作
</th>


</tr>


</thead>



<tbody>


{
advances.map((item)=>{


const available =

item.sales
-
item.deduction
-
item.paid;



return (

<tr key={item.id}>


<td className="border p-3">
{item.staff}
</td>



<td className="border p-3 text-right">

{item.sales.toLocaleString()}円

</td>



<td className="border p-3 text-right text-red-600">

-
{item.deduction.toLocaleString()}円

</td>



<td className="border p-3 text-right">

{item.paid.toLocaleString()}円

</td>



<td
className={`
border
p-3
text-right
font-bold
${available > 0
?
"text-green-700"
:
"text-red-600"
}
`}
>


{
available.toLocaleString()
}円


</td>



<td className="border p-3 text-center">


<button

className="
bg-blue-600
text-white
px-3
py-1
rounded
"

>

前払申請

</button>


</td>



</tr>


)


})

}


</tbody>


</table>


</div>


</div>


);


}
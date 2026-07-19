import { payments } from "@/lib/payments";


export default function PaymentPage(){


return (

<div className="min-h-screen bg-gray-100 p-8">


<h1 className="text-3xl font-bold mb-6">
📄 支払通知書
</h1>



<div className="bg-white rounded shadow p-6">


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
振込金額
</th>


<th className="border p-3">
操作
</th>


</tr>

</thead>



<tbody>


{
payments.map((payment)=>{


const deduction =
payment.gasoline
+
payment.vehicle;


const transfer =
payment.sales
-
deduction;



return (

<tr key={payment.id}>


<td className="border p-3">
{payment.staff}
</td>


<td className="border p-3 text-right">

{payment.sales.toLocaleString()}円

</td>


<td className="border p-3 text-right text-red-600">

-
{deduction.toLocaleString()}円

</td>



<td className="border p-3 text-right font-bold text-green-700">

{transfer.toLocaleString()}円

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

PDF

</button>


</td>


</tr>


)


})

}



</tbody>


</table>



<div className="mt-6">


<button

className="
bg-green-600
text-white
px-5
py-2
rounded
"

>

✅ 支払通知書確定

</button>


</div>



</div>


</div>


);


}
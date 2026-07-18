import { deliveries } from "@/lib/deliveries";

type Props = {
  params: Promise<{ 
    id: string; 
  }>;
};

export default async function DeliveryDetailPage({
  params,
}: Props) {
const { id } = await params;

const delivery = deliveries.find((item) => item.id === id);

if (!delivery) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold">配送情報が見つかりません。</h1>
      </main>
    );
  }

  return (
    <main className="p-8">


      <h1 className="text-3xl font-bold mb-6">
        🚚 配送詳細
      </h1>



      <div className="bg-white rounded-xl shadow p-6">


        <div className="space-y-4">


          <div>
            <span className="font-semibold">
              配送ID：
            </span>

            {delivery.id}
          </div>



          <div>
            <span className="font-semibold">
              担当者：
            </span>

            {delivery.employee}
          </div>



          <div>
            <span className="font-semibold">
              配送先：
            </span>

            {delivery.destination}
          </div>



          <div>
            <span className="font-semibold">
              詳細住所：
            </span>

            {delivery.address}
          </div>



          <div>
            <span className="font-semibold">
              配送予定日：
            </span>

            {delivery.date}
          </div>



          <div>
            <span className="font-semibold">
              状態：
            </span>


            <span
              className="
                ml-2
                px-3
                py-1
                rounded-full
                bg-yellow-100
                text-yellow-700
                text-sm
              "
            >
              {delivery.status}
            </span>

          </div>



          <div>
            <span className="font-semibold">
              備考：
            </span>

            {delivery.note}
          </div>


        </div>


      </div>


      <a
        href="/delivery"
        className="
          inline-block
          mt-6
          rounded
          bg-gray-700
          px-5
          py-2
          text-white
          hover:bg-gray-800
        "
      >
        ← 配送一覧へ戻る
      </a>


    </main>
  );
}
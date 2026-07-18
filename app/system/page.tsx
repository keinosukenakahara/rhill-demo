export default function SystemPage() {
  return (
    <main className="p-8">

      <h1 className="text-2xl font-bold mb-6">
        システム構成管理
      </h1>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


        {/* 利用ユーザー */}
        <div className="bg-white rounded-xl shadow p-6">

          <div className="text-gray-500 mb-2">
            👤 利用ユーザー
          </div>

          <div className="text-3xl font-bold">
            24名
          </div>

          <div className="text-sm text-gray-500 mt-2">
            登録社員数
          </div>

        </div>



        {/* 登録案件 */}
        <div className="bg-white rounded-xl shadow p-6">

          <div className="text-gray-500 mb-2">
            📦 登録案件
          </div>

          <div className="text-3xl font-bold">
            18件
          </div>

          <div className="text-sm text-gray-500 mt-2">
            現在管理中
          </div>

        </div>



        {/* システム状態 */}
        <div className="bg-white rounded-xl shadow p-6">

          <div className="text-gray-500 mb-2">
            🖥 システム状態
          </div>

          <div className="text-3xl font-bold text-green-600">
            正常
          </div>

          <div className="text-sm text-gray-500 mt-2">
            稼働状況
          </div>

        </div>


      </div>



      {/* 構成一覧 */}

      <div className="mt-8 bg-white rounded-xl shadow p-6">


        <h2 className="text-xl font-bold mb-4">
          システム構成
        </h2>


        <table className="w-full border-collapse">


          <thead>

            <tr className="border-b bg-gray-50">

              <th className="text-left p-3">
                項目
              </th>

              <th className="text-left p-3">
                状態
              </th>

              <th className="text-left p-3">
                備考
              </th>

            </tr>

          </thead>


          <tbody>


            <tr className="border-b">

              <td className="p-3">
                Next.js
              </td>

              <td className="p-3 text-green-600">
                稼働中
              </td>

              <td className="p-3">
                Webアプリケーション
              </td>

            </tr>



            <tr className="border-b">

              <td className="p-3">
                localStorage
              </td>

              <td className="p-3 text-green-600">
                稼働中
              </td>

              <td className="p-3">
                案件データ保存
              </td>

            </tr>



            <tr>

              <td className="p-3">
                Supabase
              </td>

              <td className="p-3 text-yellow-600">
                準備中
              </td>

              <td className="p-3">
                将来DB連携予定
              </td>

            </tr>


          </tbody>


        </table>


      </div>


    </main>
  );
}
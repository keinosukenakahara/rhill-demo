export default function Header() {
  return (
    <header className="flex items-center justify-between bg-blue-700 text-white px-6 py-4 shadow">
      <div>
        <h1 className="text-2xl font-bold">
          RHILL 業務管理システム
        </h1>
        <p className="text-sm text-blue-100">
          Business Management Portal
        </p>
      </div>

      <div className="text-right">
        <p className="text-sm">ログインユーザー</p>
        <p className="font-semibold">中原様</p>
      </div>
    </header>
  );
}
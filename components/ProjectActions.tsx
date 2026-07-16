"use client";

export default function ProjectActions() {
  return (
    <div className="flex gap-4 pt-6">

      <button
        onClick={() => alert("編集機能は準備中です。")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
      >
        編集
      </button>

      <button
        onClick={() => alert("削除機能は準備中です。")}
        className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition"
      >
        削除
      </button>

    </div>
  );
}
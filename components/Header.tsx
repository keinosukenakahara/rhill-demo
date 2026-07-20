"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between bg-blue-700 text-white px-4 py-4 shadow md:px-6">

        <div className="flex items-center">

          <button
            onClick={() => setMenuOpen(true)}
            className="mr-3 text-2xl md:hidden"
          >
            ☰
          </button>

          <div>
            <h1 className="text-xl font-bold md:text-2xl">
              RHILL 業務管理システム
            </h1>

            <p className="hidden text-sm text-blue-100 md:block">
              Business Management Portal
            </p>
          </div>

        </div>


        <div className="text-right">

          <p className="text-sm">
            ログインユーザー
          </p>

          <p className="font-semibold">
            中原様
          </p>

        </div>

      </header>


      {menuOpen && (

        <div
          className="fixed inset-0 z-50 bg-black/50 md:hidden"
          onClick={() => setMenuOpen(false)}
        >

          <div
            className="h-full w-64 bg-gray-800"
            onClick={(e) => e.stopPropagation()}
          >

            <Sidebar mobile />

          </div>

        </div>

      )}

    </>
  );
}
"use client";

import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="w-64 bg-gray-800 text-white p-4 h-full">
      <h2 className="text-2xl font-bold mb-6">Quản lý Admin</h2>
      <ul className="space-y-4">
        <li>
          <button
            onClick={() => router.push("/admin/dashboard")}
            className="w-full text-left px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
          >
            Dashboard
          </button>
        </li>
        <li>
          <button
            onClick={() => router.push("/admin/users")}
            className="w-full text-left px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
          >
            Quản lý Người dùng
          </button>
        </li>
        <li>
          <button
            onClick={() => router.push("/admin/settings")}
            className="w-full text-left px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
          >
            Cài đặt
          </button>
        </li>
      </ul>
    </div>
  );
}

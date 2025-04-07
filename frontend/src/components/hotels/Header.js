"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";

export default function Header() {
  const router = useRouter();
  const [username, setUsername] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Lấy username từ localStorage khi trang load
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username"); // Xóa thông tin user
    localStorage.removeItem("token"); // Xóa token nếu có
    router.refresh(); // Reload trang để cập nhật state
  };

  return (
    <header className="bg-yellow-700 text-white py-6 shadow-lg">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4">
        {/* Click vào logo để quay về trang chủ */}
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          HTH Booking.com
        </h1>

        <nav className="flex gap-6">
          <a href="#" className="hover:underline">
            Về chúng tôi
          </a>
          <a href="#" className="hover:underline">
            Liên hệ
          </a>

          {/* Nút menu user */}
          {username ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 bg-yellow-800 px-4 py-2 rounded-lg hover:bg-yellow-900"
              >
                <FaUser />
                <span>{username}</span>
              </button>

              {/* Dropdown menu */}
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg overflow-hidden">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Thông tin tài khoản
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Lịch sử đặt phòng
                  </a>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => router.push("/login")}
              className="bg-yellow-800 px-4 py-2 rounded-lg hover:bg-yellow-900"
            >
              Đăng nhập
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

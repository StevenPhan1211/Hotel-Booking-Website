"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const [currentTime, setCurrentTime] = useState("");
  const [scroll, setScroll] = useState(0);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login");
  };

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 w-full z-50 text-white text-sm py-2 px-6 flex justify-end items-center space-x-4 font-medium bg-gray-800">
        <span>hotelnikkosaigon.com.vn</span>
        <span>| HCM | {currentTime} | Tiếng Việt ▼</span>
      </div>

      {/* Header */}
      <header
        className={`fixed top-8 left-0 w-full z-50 transition-all duration-300 py-4 ${
          scroll > 50
            ? "bg-white bg-opacity-100 shadow-md"
            : "bg-black bg-opacity-60"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo/logo-white.png"
              width={125}
              height={50}
              alt="hotel nikko saigon"
              className="h-12"
            />
          </div>

          {/* Navigation */}
          <nav
            className={`hidden md:flex space-x-6 font-medium transition-all duration-300 ${
              scroll > 50 ? "text-gray-700" : "text-white"
            }`}
          >
            <a href="#" className="hover:text-gray-500">
              PHÒNG
            </a>
            <a href="#" className="hover:text-gray-500">
              ĂN UỐNG
            </a>
            <a href="#" className="hover:text-gray-500">
              SỰ KIỆN
            </a>
            <a href="#" className="hover:text-gray-500">
              TIỆN NGHI
            </a>
            <a href="/hotels" className="hover:text-gray-500">
              ĐẶT PHÒNG
            </a>
            <a href="#" className="hover:text-gray-500">
              LIÊN HỆ
            </a>
          </nav>

          {/* User Info hoặc Đăng nhập */}
          {user ? (
            <div className="flex items-center space-x-4">
              <span
                className={`text-sm font-medium ${
                  scroll > 50 ? "text-gray-700" : "text-white"
                }`}
              >
                Xin chào, {user.username}
              </span>
              <button
                onClick={handleLogout}
                className="px-3 py-2 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
              >
                Đăng xuất
              </button>
            </div>
          ) : (
            <button
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                scroll > 50
                  ? "bg-gray-800 text-white hover:bg-gray-900"
                  : "bg-yellow-500 text-black hover:bg-yellow-600"
              }`}
              onClick={() => router.push("/login")}
            >
              ĐĂNG NHẬP
            </button>
          )}
        </div>
      </header>
    </>
  );
}

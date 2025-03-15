"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [currentTime, setCurrentTime] = useState("");
  // Mới thêm dòng này
  const [scroll, setScroll] = useState(false)

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

  // Moi them ham nay
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll ? "bg-gray-700" : "bg-gray-800" 
      } text-white text-sm py-2 px-6 flex justify-end items-center space-x-4 font-medium`}>
        <span>hotelnikkosaigon.com.vn</span>
        <span>| HCM | {currentTime} | Tiếng Việt ▼</span>
      </div>

      {/* Header */}
      <header className={`fixed top-8 left-0 w-full z-50 transition-all duration-300 ${
        scroll ? "bg-white shadow-md" : "bg-transparent"
      } py-4`}>
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
          <nav className={`hidden md:flex space-x-6 font-medium transition-all duration-300 ${
            scroll ? "text-gray-700" : "text-white"
          }`}>
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
            <a href="#" className="hover:text-gray-500">
              DỊCH VỤ
            </a>
            <a href="#" className="hover:text-gray-500">
              LIÊN HỆ
            </a>
          </nav>

          {/* Booking Button */}
          <button className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            scroll ? "bg-gray-800 text-white hover:bg-gray-900" : "bg-yellow-500 text-black hover:bg-yellow-600"
          }`}
          >
            ĐẶT PHÒNG
          </button>
        </div>
      </header>
    </>
  );
}


//"bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Header() {
    const [currentTime, setCurrentTime] = useState("")

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            const formattedTime = now.toLocaleTimeString("vi-VN", {
                hour: "2-digit",
                minute: "2-digit",
            })
            setCurrentTime(formattedTime)
        }

        updateTime()
        const interval = setInterval(updateTime, 60 * 1000)
        return () => clearInterval(interval)
    }, [])

    return (
      <>
        {/* Top Bar */}
        <div className="bg-gray-800 text-white text-sm py-2 px-6 flex justify-end items-center space-x-4 font-medium">
          <span>hotelnikkosaigon.com.vn</span>
          <span>| HCM | {currentTime} | Tiếng Việt ▼</span>
        </div>

        {/* Header */}
        <header className="bg-white shadow-md py-4">
          <div className="container mx-auto flex justify-between items-center px-6">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logo/logo-white.png"
                width = {125}
                height = {50}
                alt="hotel nikko saigon"
                className="h-12"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
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
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
              ĐẶT PHÒNG
            </button>
          </div>
        </header>
      </>
    );
}
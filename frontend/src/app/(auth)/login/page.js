"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "@/styles/globals.css"

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Gửi dữ liệu đến backend để kiểm tra đăng nhập
    const res = await fetch("http://localhost:5000/accounts/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("user", JSON.stringify({ username }));
      router.push("/"); // Chuyển hướng sau khi đăng nhập thành công
    } else {
      alert("Đăng nhập thất bại!");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Đăng nhập</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Đăng nhập
        </button>
      </form>
      <p className="text-center mt-4">
        Chưa có tài khoản?{" "}
        <a href="/register" className="text-blue-500">
          Đăng ký
        </a>
      </p>
    </div>
  );
}

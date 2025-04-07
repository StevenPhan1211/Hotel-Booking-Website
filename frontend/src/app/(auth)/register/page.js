"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "@/styles/globals.css";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/accounts/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push("/login");
    } else {
      alert("Đăng ký thất bại!");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Đăng ký</h2>
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
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Đăng ký
        </button>
      </form>
      <p className="text-center mt-4">
        Đã có tài khoản?{" "}
        <a href="/login" className="text-blue-500">
          Đăng nhập
        </a>
      </p>
    </div>
  );
}

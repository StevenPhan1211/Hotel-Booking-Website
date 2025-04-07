"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function BookingPage() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [hotelData, setHotelData] = useState(null);

  const router = useRouter();
  const searchParams = useSearchParams();

  const hotelId = searchParams.get("hotelId"); // Lấy hotelId từ query params

  useEffect(() => {
    if (hotelId) {
      fetch(`http://localhost:5000/hotels/${hotelId}`)
        .then((res) => res.json())
        .then((data) => setHotelData(data))
        .catch((err) => console.error("Lỗi khi lấy thông tin khách sạn", err));
    }
  }, [hotelId]);

  useEffect(() => {
    if (checkIn && checkOut && hotelData?.price) {
      const startDate = new Date(checkIn);
      const endDate = new Date(checkOut);
      const days = (endDate - startDate) / (1000 * 60 * 60 * 24);
      setTotalPrice(days > 0 ? days * parseFloat(hotelData.price) : 0);
    }
  }, [checkIn, checkOut, hotelData]);

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!checkIn || !checkOut || guests < 1) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const bookingData = {
      hotelId,
      hotelName: hotelData?.name,
      checkIn,
      checkOut,
      guests,
      totalPrice,
    };

    const res = await fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    });

    if (res.ok) {
      alert("Đặt phòng thành công!");
      router.push("/profile");
    } else {
      alert("Đặt phòng thất bại!");
    }
  };

  if (!hotelData) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">
        Đặt phòng tại {hotelData.name}
      </h2>
      <form onSubmit={handleBooking} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Ngày nhận phòng</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Ngày trả phòng</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Số lượng khách</label>
          <input
            type="number"
            min="1"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </div>

        <div className="text-lg font-semibold">
          Tổng tiền: {totalPrice.toLocaleString()} VNĐ
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
        >
          Xác nhận đặt phòng
        </button>
      </form>
    </div>
  );
}

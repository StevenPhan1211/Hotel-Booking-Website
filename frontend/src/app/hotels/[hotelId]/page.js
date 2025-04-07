import Link from "next/link";

export default async function HotelDetail({ params }) {
  const { hotelId } = await params;

  // Gọi API lấy thông tin khách sạn
  const res = await fetch(`http://localhost:5000/hotels/${hotelId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Can't load hotel details!");
  }

  const hotel = await res.json();

  // Gọi API lấy danh sách hình ảnh
  const imgRes = await fetch(
    `http://localhost:5000/roomimages?hotelId=${hotelId}`,
    { cache: "no-store" }
  );

  if (!imgRes.ok) {
    throw new Error("Can't load hotel images!");
  }

  const images = await imgRes.json();

  // Gọi API lấy danh sách phòng nhưng chỉ lấy HotelID = 1
  const roomsRes = await fetch(`http://localhost:5000/rooms`, {
    cache: "no-store",
  });

  if (!roomsRes.ok) {
    throw new Error("Can't load rooms!");
  }

  let rooms = await roomsRes.json();
  rooms = rooms.filter((room) => room.HotelID === 1); // Lọc chỉ lấy HotelID = 1

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{hotel.HotelName}</h1>
      <p>
        <strong>Số điện thoại:</strong> {hotel.PhoneNumber}
      </p>
      <p>
        <strong>Email:</strong> {hotel.Email}
      </p>
      <p>
        <strong>Mô tả:</strong> {hotel.Description}
      </p>

      {/* Khu vực hiển thị hình ảnh khách sạn */}
      <div className="w-full max-w-2xl mx-auto border rounded-lg p-4 shadow-lg mt-6">
        <h2 className="text-xl font-semibold">Hình ảnh khách sạn</h2>
        <div className="grid grid-cols-3 gap-2 mt-4">
          {images.map((image) => (
            <div
              key={image.ImageID}
              className="relative w-full h-40 overflow-hidden rounded-md border"
            >
              <Link href={`/images/${image.ImageID}`}>
                <img
                  src={image.ImageURL}
                  alt="Hotel Room"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Danh sách phòng dạng bảng */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Danh sách phòng</h2>
        <table className="w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Tên phòng</th>
              <th className="border border-gray-300 p-2">Loại phòng</th>
              <th className="border border-gray-300 p-2">Giá mỗi đêm (VND)</th>
              <th className="border border-gray-300 p-2">Sức chứa</th>
              <th className="border border-gray-300 p-2">Tình trạng</th>
              <th className="border border-gray-300 p-2">Đặt phòng</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room.RoomID}>
                <td className="border border-gray-300 p-2">{room.RoomName}</td>
                <td className="border border-gray-300 p-2">
                  {room.RoomTypeName}
                </td>
                <td className="border border-gray-300 p-2">
                  {room.PricePerNight
                    ? room.PricePerNight.toLocaleString()
                    : "Liên hệ"}
                </td>
                <td className="border border-gray-300 p-2">
                  {room.Capacity} người
                </td>
                <td className="border border-gray-300 p-2">
                  {room.IsAvailable ? "Còn phòng" : "Hết phòng"}
                </td>
                <td className="border border-gray-300 p-2">
                  <Link
                    href={`/booking?roomId=${room.RoomID}`}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                  >
                    Đặt phòng
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
